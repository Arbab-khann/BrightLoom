import React, { useContext } from "react";

// import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";
import { Store } from "../../../Dumydata";

const Testimonal = () => {
  const [data] = useContext(Store);
  return (
    <>
      <section className="testimonal">
        <div className="container">
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="content t-monal grid2">
            {data
              .filter((item) => item.type === "testimonal")
              .map((val, index) => (
                <div className="items shadow" key={index}>
                  <div className="box flex">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
