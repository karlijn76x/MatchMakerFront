import React from "react";
import Header from "../Components/Header";
import "./SwipeMenu.css";

const SwipeMenu: React.FC = () => {
  return (
    <div className="container-fluid">
      <Header />

      <div className="card">
        <div className="image">300 x 300</div>
        <h2 className="Username">*username*</h2>
        <p className="rank">*Rank*</p>
        <p className="info">
          <strong>Plays:</strong> *role*
        </p>
        <p className="info">
          <strong>Champions:</strong> *champion1*, *champion2*, *champion3*
        </p>
        <p className="bio">
          <strong>Bio:</strong> *bio*
        </p>
      </div>

      <div className="buttonContainer">
        <button className="button no">No</button>
        <button className="button yes">Yes</button>
      </div>
    </div>
  );
};

export default SwipeMenu;
