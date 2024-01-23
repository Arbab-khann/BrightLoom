import React, { useContext } from "react";
import { Store } from "../../Dumydata";

const Awrapper = () => {
  const [data] = useContext(Store);
  return (
    <>
      <section className="awrapper">
        <div className="container awarapper-main grid">
          {data
            .filter((item) => item.type === "awrapper")
            .map((val, index) => {
              return (
                <div className="box flex" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h1>{val.data}</h1>
                    <h3>{val.title}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
