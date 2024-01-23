import "../common/header/header.css";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/SliceComponent";

function Progress() {
  const data = useSelector(selectCartItems);
  // console.log("line 7 in progress", data);
  return (
    <>
      {/* if not enrolled in course then run this */}
      {data.length === 0 ? (
        <p className="not-enrolled">
          Not Enrolled in any course please enroll any.
        </p>
      ) : (
        // if user addded in any coursein dashboard then run this part
        <div className="progress-block">
          {data.map((item) => (
            <>
              {/* progress static imagess */}
              <div>
                <img id="pr-1" src={item.progressImage2} alt="pic" />
              </div>
              <div>
                <img id="pr-2" src={item.progressImage1} alt="pic" />
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default Progress;
