import React, { useContext } from "react";
import { Store } from "../../Dumydata";
import "./courses.css";
import { Link } from "react-router-dom";
// import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const [data] = useContext(Store);
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {data
              .filter((item) => item.type === "online")
              .map((val, index) => (
                <>
                  <Link to={`/details/${val.id}`}>
                    <div className="box online-cards" key={index}>
                      <div className="img online-cards-img">
                        <img src={val.cover} />
                        <img src={val.hoverCover} alt="" className="show" />
                      </div>
                      <h1>{val.coursesName}</h1>
                      <span>Enroll Now</span>
                    </div>
                  </Link>
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
