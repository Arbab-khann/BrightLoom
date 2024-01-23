import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Head = () => {
  const navi = useNavigate();
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo-box">
            <div onClick={() => navi("/")} className="logo-img">
              <img src="../../../../public/images/headerlogo.svg" />
            </div>
            <div className="logo-text">
              <h1>BRIGHTLOOM</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </div>
          </div>
          <div className="social flex">
            <i className="fab fa-facebook-f icon">
              <FaFacebookF />
            </i>
            <i className="fab fa-instagram icon">
              <FaInstagram />
            </i>
            <i className="fab fa-twitter icon">
              <FaXTwitter />
            </i>
            <i className="fab fa-youtube icon">
              <RiYoutubeLine />
            </i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
