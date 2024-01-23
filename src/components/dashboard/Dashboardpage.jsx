import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/SliceComponent";
// import "./dashboard.css";
import Dynamicheader from "../common/header/Dynamicheader";
import DynSideHeader from "../common/header/DynSideHeader";

function Dashboardpage() {
  const receivedData = useSelector(selectCartItems);
  console.log("line 10 in dashboard", receivedData);
  return (
    <>
      <Dynamicheader value={receivedData} />
      <DynSideHeader />
      <Footer />
    </>
  );
}

export default Dashboardpage;
