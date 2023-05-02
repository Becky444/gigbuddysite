import React from "react";
import { Button } from "./Button";

import "./PromoterSignUpForm.css";

function PromoterSignUpForm() {
  return (
    <div className="promotersignupform">
      <form>
        <div className="first2">
          <label>
            Email:
            <input className="textbox" type="text" />
          </label>

          <label>
            Promoter Name:
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
    <div className="createaccountbutton">
        <Button>Create</Button>
    </div>
    </div>

  );
}

export default PromoterSignUpForm;
