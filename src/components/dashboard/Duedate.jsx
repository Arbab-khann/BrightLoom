import React, { useState, useEffect } from "react";

const LastAccessTime = () => {
  const [lastAccessTime, setLastAccessTime] = useState(null);

  // storing new time in localstorage
  useEffect(() => {
    const storedLastAccessTime = localStorage.getItem("lastAccessTime");

    if (storedLastAccessTime) {
      setLastAccessTime(new Date(storedLastAccessTime));
    } else {
      setLastAccessTime(new Date());
    }
  }, []);
  // taking day mint year values
  const formatDateString = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(2);

    return `${dd}-${mm}-${yy}`;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>LastVisit</p>
      {/* if any last acces time store in localstorege then show else then show not visit */}
      <span>
        {lastAccessTime ? formatDateString(lastAccessTime) : "No visit"}
      </span>
    </div>
  );
};

export default LastAccessTime;
