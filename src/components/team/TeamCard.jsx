import React, { useContext } from "react";
import { Store } from "../../Dumydata";
// import { team } from "../../dummydata"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import "./team.css";
const TeamCard = () => {
  const [data] = useContext(Store);
  return (
    <>
      {data
        .filter((item) => item.type === "team")
        .map((val, index) => (
          <div className="items shadow" key={index}>
            <div className="img">
              <img src={val.cover} alt="" />
              <div className="overlay">
                <i className="fab fa-facebook-f icon">
                  <FaFacebookF />
                </i>
                <i className="fab fa-twitter icon">
                  <FaXTwitter />
                </i>
                <i className="fab fa-instagram icon">
                  <FaInstagram />
                </i>
              </div>
            </div>
            <div className="details">
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default TeamCard;
