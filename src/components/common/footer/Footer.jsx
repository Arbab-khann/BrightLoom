import React, { useContext } from "react";
import { Store } from "../../../Dumydata";
// import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  const [data] = useContext(Store);
  return (
    <>
      <footer>
        <div className="container footer-main padding">
          <div className="box logo">
            <h1>BRIGHTLOOM</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          {/* <div className="box">
            <h3>Recent Post</h3>
            {data
              .filter((item) => item.type === "blog")
              .slice(0, 3)
              .map((val, index) => (
                <div className="items flexSB" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <h4>{val.title.slice(0, 40)}...</h4>
                  </div>
                </div>
              ))}
          </div> */}
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>okhla New Delhi</li>
              <li>+917836947520</li>
              <li>Arbabkhan4u.ak.ak@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2024 BRIGHTLOOM All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
