// import React, { useContext } from "react";
import { Store } from "../../Dumydata";
import { useParams } from "react-router-dom";
import "./dynamic.css";
import Header from "../common/header/Header";
import Syllabus from "./Syllabus";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/SliceComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";

function Dynamic() {
  const [data] = useContext(Store);

  const id = useParams().id;
  const dispatch = useDispatch();

  // adding data to redux store
  const handleClick = (reduxData) => {
    // react toster for notification
    toast.success("Added to Dashboard", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    dispatch(addItem(reduxData));
  };

  return (
    <>
      <div className="dynamic-main">
        <Header />
        {/* applying map to render all data on dynamic componnet */}
        {data
          .filter((data) => data.id === id)
          .map((item, index) => {
            console.log("line 26", item.courseImage);
            return (
              <div className="container flex" key={index}>
                <div className="img-block left-block">
                  <img src={item.image} />

                  {/* calling handleckick which send data to redux store */}
                  <div style={{ margin: "2rem 0rem" }}>
                    <h2>
                      Status:<span>{item.status}</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => handleClick(item)}
                    className="outline-btn dyn-btn"
                  >
                    ENROLL NOW !
                  </button>
                </div>
                <div className="right-block">
                  <div className="text-block ">
                    <div className="text-inner-1">
                      <h3>{item.coursesName}</h3>
                      <div className="details">
                        {item.courTeacher.map((details, index) => {
                          console.log("line 44 dynamic", details);
                          return (
                            <>
                              <div className="box" key={index}>
                                <div className="para">
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus debitis porro, dignissimos doloremque minima
                      repudiandae laborum eos. Laboriosam quos, sunt beatae
                      nobis, officiis voluptas blanditiis animi, excepturi eius
                      odit ad?
                    </p>
                    {/* calling syllabus component to show all syllabus data */}
                    <Syllabus data={item.syllabus} />
                  </div>
                </div>
              </div>
            );
          })}
        {/* <Footer /> */}
      </div>
      {/* react toaster for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Dynamic;
