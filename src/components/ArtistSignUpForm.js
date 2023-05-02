import React from "react";
import { Button } from "./Button";
import "./ArtistSignUpForm.css";

function ArtistSignUpForm() {
  return (
    <div className="artistsignupform">
      <form>
        <div className="first2">
          <label>
            Email:
            <input className="textbox" type="text" />
          </label>

          <label>
            Artist Name:
            <input className="textbox" type="text" />
          </label>
        </div>

        <div className="second2">
          <label>
            Password
            <input className="textbox" type="text" />
          </label>

          <label>
            Town:
            <input className="textbox" type="text" />
          </label>
        </div>
      </form>
    <div>
        <Button>Create Account</Button>
    </div>
    </div>
  );
}

export default ArtistSignUpForm;
