import { useState } from "react";
import "./header.css";
import User from "../../dashboard/User";
import Progress from "../../dashboard/Progress";
import { useNavigate } from "react-router-dom";

function DynSideHeader() {
  const navi = useNavigate();
  const [activeComponent, setActiveComponent] = useState("User");

  //  omclick its passes that particular button value to make it active
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    // making to buttons which show progress and use enrolled courses
    <div className="flex dyn-sideHeader-main">
      <div className="dyn-sideHeader">
        <button
          onClick={() => handleButtonClick("Progress")}
          className=" btn progress"
        >
          Progress
        </button>
        <button
          onClick={() => handleButtonClick("User")}
          className="btn courses"
        >
          Courses
        </button>
      </div>
      <div className="dyn-rightside">
        <div className="dyn-rightside-inner">
          {/* advertisment on users enrolled component */}
          <h3>
            Academy Full Stack Web Development Career{" "}
            <span>
              <img src="../../../images/pancuationicon.png" />
            </span>{" "}
            Lifetime Access to Lectures
            <span>
              <img src="/public/images/schedule.png" />
            </span>{" "}
            Enrollment : 9 Aug 2023
            <button onClick={() => navi("/courses")} id="dasboard-head-btn">
              Check Now?
            </button>
          </h3>
        </div>
        <div>
          {/* making one button active while clicking to show its data on display */}
          {/* passing function tp user compo which makes active among progres and user buttons */}
          {activeComponent === "User" && <User value={handleButtonClick} />}
          {activeComponent === "Progress" && <Progress />}
        </div>
      </div>
    </div>
  );
}

export default DynSideHeader;
