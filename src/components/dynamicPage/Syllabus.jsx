import { useState } from "react";
// import { useContext } from "react";
// import { Store } from "../../Dumydata";
import Heading from "../common/heading/Heading";

const Syllabus = (props) => {
  const [click, setClick] = useState(false);
  let data1 = props.data;
  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  // console.log(props);
  return (
    <>
      <Heading subtitle="" title="Syllabus coverd by mentor" />
      <section className="faq">
        <div className="container">
          {data1
            .filter((item) => item.type === "syllabusDetails")
            .map((val, index) => (
              <div className="box" key={index}>
                <button className="accordion" onClick={() => toggle(index)}>
                  <h2>{val.title}</h2>
                  <span>
                    {click === index ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </span>
                </button>
                {click === index ? (
                  <div className="text">
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Syllabus;
