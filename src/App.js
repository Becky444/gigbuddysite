import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import BrowseArtists from './pages/BrowseArtists';
import BrowsePromoters from './pages/BrowsePromoters';
import Discover from './pages/Discover';
import ArtistSignUp from './pages/ArtistSignUp';
import SignIn1 from './pages/SignIn1';
import ArtistProfile from './pages/ArtistProfile';
import MyRequestsArtist from './pages/MyRequestsArtist';
import MyScheduleArtist from './pages/MyScheduleArtist';
import PromoterSignUp from './pages/PromoterSignUp';
import PromoterProfile from './pages/PromoterProfile';
import BookingRequest from './pages/BookingRequest';  
import CollaborationRequest from './pages/CollaborationRequest';
import EditArtist from './pages/EditArtist';
import ArtistProfileOther from './pages/ArtistProfileOther';
import MySchedulePromoter from './pages/MySchedulePromoter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route exact path="" element={<Homepage />} />
          <Route path="/artists" element={<BrowseArtists/>} />
          <Route path="/promoters" element={<BrowsePromoters/>} />
          <Route path="/discover" element={<Discover/>} />
          <Route path="/artistsignup" element={<ArtistSignUp/>} />
          <Route path="/login" element={<SignIn1/>} />
          <Route path="/artistprofile" element={<ArtistProfile/>} />
          <Route path="/artistrequests" element={<MyRequestsArtist/>} />
          <Route path="/artistschedule" element={<MyScheduleArtist/>} />
          <Route path="/promotersignup" element={<PromoterSignUp/>} />
          <Route path="/promoterprofile" element={<PromoterProfile/>} />
          <Route path="/bookingrequest" element={<BookingRequest/>} />
          <Route path="/collaborationrequest" element={<CollaborationRequest/>} />
          <Route path="/editartist" element={<EditArtist/>} />
          <Route path="/artistprofileother" element={<ArtistProfileOther/>} />
          <Route path="/promoterschedule" element={<MySchedulePromoter/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsandconditions" element={<TermsAndConditions/>} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;










// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Homepage from './pages/Homepage';
// import ArtistSignUpForm from './components/ArtistSignUpForm';
// import PromoterSignUpForm from './components/PromoterSignUpForm';
// import ArtistSignUp from './pages/ArtistSignUp';
// import PromoterSignUp from './pages/PromoterSignUp';
// import SignIn from './pages/SignIn';
// import ArtistProfile from './pages/ArtistProfile';
// import ArtistProfileOther from './pages/ArtistProfileOther';
// import PromoterProfile from './pages/PromoterProfile';
// import PromoterProfileOther from './pages/PromoterProfileOther';
// import MyRequestsArtist from './pages/MyRequestsArtist';
// import MyRequestsPromoter from './pages/MyRequestsPromoter';
// import MySchedulePromoter from './pages/MySchedulePromoter';
// import MyScheduleArtist from './pages/MyScheduleArtist';
// import BookingRequest from './pages/BookingRequest';
// import CollaborationRequest from './pages/CollaborationRequest';
// import BrowseArtists from './pages/BrowseArtists';
// import BrowsePromoters from './pages/BrowsePromoters';
// import Discover from './pages/Discover';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//             <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/artists">Artists</Link>
//             </li>
//             <li>
//               <Link to="/promoters">Promoters</Link>
//             </li>
//             <li>
//               <Link to="/events">Events</Link>
//             </li>
//             <li>
//               <Link to="/discover">Discover</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>



//       {/* <Header/> */}
//       {/* <Homepage/> */}
//       {/* <ArtistSignUp/> */}
//       {/* <SignIn/> */}
//       {/* <ArtistProfile/> */}
//       {/* <ArtistProfileOther/> */}
//       {/* <PromoterProfile/> */}
//       {/* <PromoterProfileOther/> */}
//       {/* <MyRequestsArtist/> */}
//       {/* <MyRequestsPromoter/> */}
//       {/* <PromoterSignUp/> */}
//       {/* <ArtistSignUpForm/> */}
//       {/* <PromoterSignUpForm/> */}
//       {/* <MySchedulePromoter/> */}
//       {/* <MyScheduleArtist/> */}
//       {/* <BookingRequest/> */}
//       {/* <CollaborationRequest/> */}
//       {/* <BrowseArtists/> */}
//       {/* <BrowsePromoters/> */}
//       {/* <Discover/> */}
//     </div>
//   );
// }

// export default App;
