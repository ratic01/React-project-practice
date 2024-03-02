import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AngularLogo from "./components/AngularLogo";
import ReactLogo from "./components/ReactLogo";
import VueLogo from "./components/VueLogo";

const angualarLogoImage = require("../src/images/angularlogo.png"); //uvozimo sliku iz direktorijuma images
const reactLogoImage = require("../src/images/reactlogo2.png");
const vueLogoImage = require("../src/images/vuelogo.png");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="logovi">
      <AngularLogo image={angualarLogoImage} />
      <ReactLogo image={reactLogoImage} />
      <VueLogo image={vueLogoImage} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
