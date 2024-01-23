import "../common/header/header.css";
import LastAccessTime from "./Duedate";
import { useDispatch, useSelector } from "react-redux";
import { markItemDone, selectCartItems } from "../redux/SliceComponent";
import { useEffect } from "react";

function User(props) {
  const dispatch = useDispatch();
  // storeing props function to use below on check progress of curent user.
  const func = props.value;
  // reciving data from redux store to render on display
  const data = useSelector(selectCartItems);

  // storing marke done card in localstorage as well as making a function while clicking send id of exact card to use in markdone button
  const handleMarkDone = (itemId) => {
    dispatch(markItemDone({ itemId }));
    localStorage.setItem(`data_${itemId}`, "done");
  };

  useEffect(() => {
    // Load mark as done status from local storage on component mount
    data.forEach((item) => {
      const isDone = localStorage.getItem(`cartItem_${item.id}`);
      if (isDone === "done") {
        // Using spread operator to create a new object with the isDone property
        item = { ...item, isDone: true };
      }
    });
  }, [data]);

  return (
    <>
      {/* if no item in dashboard then show not enrolled in any */}
      {data.length === 0 ? (
        <p className="not-enrolled">
          Not Enrolled in any course please enroll any.
        </p>
      ) : (
        // if any data is added then run this part
        <div className="user-block">
          {data.map((item) => (
            <>
              <div key={item.id} className="user-card">
                <div>
                  <img id="usr-1" src={item.courseImage} alt="pic" />
                </div>
                <div className="card-block-1">
                  {/* making image blur if press on markdone */}
                  <img
                    src={
                      item.isDone
                        ? "../../../public/images/headerlogo.svg"
                        : "../../../public/images/headerlogo.svg"
                    }
                    alt={item.isDone ? "Done" : "Not Done"}
                    style={{
                      width: "50px",
                      height: "50px",
                      filter: item.isDone ? "blur(3px)" : "none",
                    }}
                    id="usr-2"
                  />
                  <hr className="hr-dash" />
                  <div className="cal-lastvisit-block">
                    <div className="cal-block">
                      <img
                        style={{ width: "1.7rem" }}
                        src="../../../../public/images/reshot-icon-calendar-student-ZUHEPMA3XF.svg"
                      />
                      <div className="cal-side-text">
                        <p
                          style={{
                            textDecoration: item.isDone
                              ? "line-through"
                              : "none",
                          }}
                        >
                          Duration
                        </p>
                        {/* making text lingh hrough if mark done press */}
                        <span
                          style={{
                            textDecoration: item.isDone
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {item.duration}
                        </span>
                      </div>
                    </div>
                    <div className="last-visit">
                      <img
                        style={{ width: "1.7rem" }}
                        src={
                          "../../../../public/images/reshot-icon-calendar-student-ZUHEPMA3XF.svg"
                        }
                      />
                      {/* last access time of dashbord enrolled course */}
                      <LastAccessTime />
                    </div>
                  </div>
                </div>
                <div className="card-block-2">
                  {/* making text lingh hrough if mark done press */}
                  <h3
                    style={{
                      textDecoration: item.isDone ? "line-through" : "none",
                    }}
                  >
                    {item.coursesName}
                  </h3>
                  {/* button to check progressbar */}
                  <button
                    onClick={() => func("Progress")}
                    style={{ backgroundColor: "#40A2D8", color: "white" }}
                  >
                    Check Progress
                  </button>

                  {/* mark done button */}
                  {/* calling handlemard done to give knowlegde of exact id of card to markdone self card not all */}
                  <button
                    onClick={() => handleMarkDone(item.id)}
                    disabled={item.isDone}
                  >
                    Mark as Done
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default User;
