import React, { Component } from "react";
import "./Discover.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";


function Discover() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerD">
        <div className="profileTitleMRA">
          <h1>Discover</h1>
        </div>

        <div className="fullPageD">
        <div className="dropDowns">
          <p>Town</p>
        <select onchange="handleSelection(this)">
          <option value="">Select an option</option>
          <option value="option1">Belfast</option>
          <option value="option2">Bangor</option>
          <option value="option3">Lisburn</option>
        </select>

        <p>Genre</p>
        <select onchange="handleSelection(this)">
          <option value="">Select an option</option>
          <option value="option1">Pop</option>
          <option value="option2">Rock</option>
          <option value="option3">Country</option>
        </select>
        </div>

        <div className="buttonD">
        <Button>Submit</Button>
        </div>
     
     
        <div class="resultContainerD">
        
        <div class="resultTitle">Based on this criteria, we would recommend the following artists:</div>

          <div class="promoterCardBP">
            <div class="browsePromoterPicBP"></div>
            <div class="promoterCardTxtBP">Name: Becky McNeice</div>
            <div class="promoterCardTxtBP">Town: Belfast</div>

          </div>

        <div class="promoterCardBP">
            <div class="browsePromoterPicBP"></div>
            <div class="promoterCardTxtBP">Name: Becky McNeice</div>
            <div class="promoterCardTxtBP">Town: Belfast</div>

          </div>

          <div class="promoterCardBP">
            <div class="browsePromoterPicBP"></div>
            <div class="promoterCardTxtBP">Name: Becky McNeice</div>
            <div class="promoterCardTxtBP">Town: Belfast</div>

          </div>

          </div>


 </div>
      </div>
    </>
  );
}

export default Discover;
