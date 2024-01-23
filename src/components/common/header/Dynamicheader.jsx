import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./headerlogo.svg";
function Dynamicheader() {
  const navi = useNavigate();
  // making another haeder to show in dynamic componnet
  return (
    <div className="dyn-header">
      <div onClick={() => navi("/")} className="dyn-headerlogo">
        <img src={img} />
      </div>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => navi("/")}
        className="dyn-header-text"
      >
        BrightLoom
      </span>
    </div>
  );
}

export default Dynamicheader;
