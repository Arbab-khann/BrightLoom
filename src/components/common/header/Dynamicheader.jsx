import React from "react";
import { useNavigate } from "react-router-dom";

function Dynamicheader() {
  const navi = useNavigate();
  return (
    <div className="dyn-header">
      <div onClick={() => navi("/")} className="dyn-headerlogo">
        <img src="../../../../public/images/headerlogo.svg" />
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
