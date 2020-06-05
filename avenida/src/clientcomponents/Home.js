import React from "react";
import Chart from "../components/contents/common/Chart";
import Map from "../components/contents/map/Map";
import MainMap from "../components/contents/map/MainMap";
import "./style.css";
import yellowlogo from "../img/yellow.png";
import orangelogo from "../img/orange.png";
import redlogo from "../img/red.png";

function Home() {
  document.title = "Avenida";

  return (
    <div className="container">
      <div
        style={{ backgroundColor: "rgba(15, 94, 156, 0.6)", paddingBottom: 30 }}
        className="row"
      >
        <div className="col mt-5">
          <MainMap height="75vh" from="Client" />
        </div>
      </div>
      <div className="card mt-5 ">
        <div className="card-header">
          <h3 className="d-flex justify-content-center">Legend</h3>
        </div>
        <div classname="card-body">
          <div className="row mt-5 mx-3">
            <div className="col">
              <img src={yellowlogo} height="200px" alt="low" />
            </div>
            <div className="col">
              <img src={orangelogo} height="200px" alt="low" />
            </div>
            <div className="col">
              <img src={redlogo} height="200px" alt="low" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
       <p className="d-flex justify-content-center mt-3"><strong> ®This is a capstone project by students in ICS-WMSU Insert picture of
        prototype hardware</strong></p>
      </div>
    </div>
  );
}

export default Home;
