import { React, useEffect, useState, useRef } from "react";
import "./Style.css";

const PopUp = () => {
  const [popup, setPopUp] = useState(false);
  const toglePopup = () => {
    setPopUp(!popup);
  };
  return (
    <div>
      <div className="page">
        <h1>Interested In $25 Discount For The course?</h1>
        <p>A little something for you</p>
        <button onClick={toglePopup} className="btn btn-success">
          open
        </button>
      </div>
      {popup && (
        <div className="popup">
          <div onClick={toglePopup} className="overlay"></div>
          <div className="popup-content">
            <h1>New Around Here?</h1>
            <h3>Don't Miss Chance To Learn React</h3>
            <p>Sigh Up for The Course and get The 15% discount</p>
            <button onClick={toglePopup} className="close-popup btn btn-info">
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
