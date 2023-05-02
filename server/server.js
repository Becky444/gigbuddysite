const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const cors = require("cors"); //
const app = express();   
const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
const jwt = require('jsonwebtoken');

app.use(cors()); //
app.use(express.json());  //



// Connecting to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/gigbuddy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch((err) => {
    console.log(err);
  });

// Get database object
const db = mongoose.connection;

// database connection error
db.on('error', (err) => {
  console.error(err);
});

// database connection success
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

//starting server on port 5000
app.listen(5000, () => {
  console.log(`Server listening on port 5000!`);
});


// ////////////////routes///////////////////////////////////////////////////////////////////////////////////


// Login for existing user 
app.post('/api/login', (req, res) => {
    // Handling user login
    const { email, password } = req.body;
    const usersCollection = db.collection('users');
    
    // Checking is email address exists in db 
    usersCollection.findOne({ email:email }, (err, user) => {
        console.log(user);
        if (err) {
          console.log(err);
          res.sendStatus(500);  // 500 response if error occurs 
          return;
        }
        if (!user) {
          res.status(401).send('Invalid email');  // 401 response if email doesnt exist 
          return;
        }
            // Checking if password matches in db 
            if (password!=user.password) {
              res.status(401).send('Invalid password');
              return;
            } else {
      
            // Passwords match - log the user in
            const token = generateToken(user._id, user.email);
            res.send({ token });
            };
          });
    });

    //Generate JWT token to contain userid and email 
    function generateToken(userId, userEmail) {
    return jwt.sign({ userId, userEmail }, secret);
  }

  app.get('/', (req, res) => {
    res.send("testtttt")
  });

  ///////////////////////Sign Up/////////////////////////////////////////////////////////////////////////////

// Sign-up API 
app.post('/api/signup', async (req, res) => {
    const { email, password, name, town } = req.body;
  
    try {
      const usersCollection = db.collection('users');
  
      // Check if email exists in db
      const user = await usersCollection.findOne({ email });
      if (user) {
        res.status(400).send('User already exists');
        return;
      }
  
      // hashing & salting password with bcrypt
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // create  user object
      const newUser = {
        email,
        password: hashedPassword,
        name,
        town
      };

      // insert  user object into the db
      const result = await usersCollection.insertOne(newUser);
  
      // create JWT token for new user
      const token = generateToken(result.insertedId, email);
  
      res.send({ token });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
   
///////////////////////send email//////////////////////////////////////////////////////////////////
app.post('/api/send-email', (req, res) => {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gigbuddytest123@gmail.com',
        pass: ''
      }
    });
    
    //taking data from request body to create email message
    const { email, date, venue, capacity, length, fee, info } = req.body;
    
    // email message object 
    const mailOptions = {
      from: 'gigbuddytest123@gmail.com', //sender
      to: email, //recipient - email address entered by sender 
      subject: 'Booking Request', //email subject
      text: `Booking Request for ${date} \n\n Venue: ${venue} \n\n Capacity: ${capacity} \n\n Length: ${length}  \n\n Fee: ${fee} \n\n Info: ${info}` //email text
    };
    
    //send email with transporter 
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.sendStatus(500); //error returned if email not sent 
      } else {
        console.log('Email sent: ' + info.response); // success message if email sent 
        res.sendStatus(200);
      }
    });
  });