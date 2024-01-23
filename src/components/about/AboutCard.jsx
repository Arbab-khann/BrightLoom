import React, { useContext } from "react";
import { Store } from "../../Dumydata";
import Heading from "../common/heading/Heading";
import "./about.css";
// import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  const [data] = useContext(Store);
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="../images/blog/b2.webp" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {data
                .filter((data) => data.type === "homeAbout")
                .map((val, index) => {
                  // console.log("line 26 home", data);
                  return (
                    <div className="item flexSB" key={index}>
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
