// import React, { useContext } from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { Store } from "../../Dumydata";
import { Link } from "react-router-dom";
import { useContext } from "react";

const HAbout = () => {
  const [data] = useContext(Store);
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />
          <div className="coursesCard">
            {/* copy code form  coursesCard to slice 3 data and show on homepage */}
            <div className="grid2 home-onlinecourse">
              {data
                .filter((item) => item.type === "coursesCard")
                .slice(0, 3)
                .map((val, index) => (
                  <div className="items" key={index}>
                    {/* link for dynamic route */}
                    <Link to={`/details/${val.id}`}>
                      <div className="content flex">
                        <div className="left">
                          <div className="img">
                            <img src={val.cover} alt="pic" />
                          </div>
                        </div>
                        <div className="text">
                          <h1>{val.coursesName}</h1>

                          <div className="details">
                            {val.courTeacher.map((details, index) => (
                              <>
                                <div className="box" key={index}>
                                  <div className="dimg">
                                    <img src={details.dcover} alt="" />
                                  </div>
                                  <div className="para">
                                    <h4>{details.name}</h4>
                                  </div>
                                </div>
                                <span>{details.totalTime}</span>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="price">
                        <h3>
                          {val.priceAll} / {val.pricePer}
                        </h3>
                      </div>

                      <button className="outline-btn">ENROLL NOW !</button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
