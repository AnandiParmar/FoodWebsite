import { assets } from "../../assets/assets";
import { useState } from "react";
import "./navbar.css";
export default function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isclicked, setIsclicked] = useState(false);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
    setIsclicked(!isclicked);
  };
  return (
    <div className="navbar-light navbar navbar-expand-lg">
      <img src={assets.logo} alt="" className="logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        onClick={handleNavCollapse}
      >
        <span
          className={`${
            !isclicked ? "navbar-toggler-icon" : `${assets.cross_icon}`
          }`}
        ></span>
      </button>
      < div
        className={`${isNavCollapsed ? "collapse" : ""}  navbar-collapse `}
        id="navbarsExample09"
      >
        <div className="d-flex navbar-nav main">
          <ul className="list navbar-nav">
            <li>Home</li>
            <li>About</li>
            <li>Contact-us</li>
            <li>Services</li>
          </ul>
          <div className="icon">
            <img src={assets.search_icon} alt="" />
            <div>
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button className="btn btn-outline-secondary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
