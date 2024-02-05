import React from "react";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="container">
        <div className="selectCity">
          <label>Select City:</label>
          <input type="text" name="" id="" />
        </div>

        <div className="weather">
          <img src="" alt="Image" />
          <div className="city">Lahore</div>
          <div className="temp">14 ℃ ℉</div>
          <div>Windy</div>
        </div>
      </div>
    </div>
  );
}
