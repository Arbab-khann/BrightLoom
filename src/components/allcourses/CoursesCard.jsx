import React, { useContext } from "react";
import { Store } from "../../Dumydata";
import "./courses.css";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  const [data] = useContext(Store);
  return (
    <>
      <section className="coursesCard">
        <div className="container cource-main grid2">
          {data
            .filter((item) => item.type === "coursesCard")
            .map((val, index) => (
              <>
                <Link to={`/details/${val.id}`}>
                  <div className="items" key={index}>
                    <div className="content flex card-txt-block">
                      <div className="left">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <h1>{val.coursesName}</h1>
                        <div className="details">
                          {val.courTeacher.map((details) => (
                            <>
                              <div className="box">
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
                  </div>
                </Link>
              </>
            ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
