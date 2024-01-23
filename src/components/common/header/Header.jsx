import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const navi = useNavigate();
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB hed-block">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navi("/dashboard")}
              className="button"
            >
              Dashboard
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
