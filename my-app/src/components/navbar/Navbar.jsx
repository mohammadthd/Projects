import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {

  const [showMenue, SetShowMenue] = useState(false);
  const closeSideBar = () => {
    showMenue(false)
  }

  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(position > window.pageYOffset);
      setPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";



  return (
    <header>
      <nav className={cls} >
        <div className="left-nav">
          <Link spy={true} to="Intro" smooth={true}>
            <h1>Mo</h1>
          </Link>
          <p>{date.toLocaleTimeString()}</p>
        </div>

        <div className="responsive">
          <button className="nav-btn" onClick={() => SetShowMenue(!showMenue)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg></button>
        </div>

        <div className="right-nav">
          <div className="menue" id={showMenue ? "hiddenmenue" : ""}>
            <ul>
              <Link spy={true} to="Intro" smooth={true} activeClass="activeClass">
                <li> Intro</li>
              </Link>
              <Link spy={true} to="About" smooth={true}>
                <li> About</li>
              </Link>
              <Link spy={true} to="Products" smooth={true}>
                <li> Products</li>
              </Link>
              <Link spy={true} to="Contact" smooth={true}>
                <li> Contact</li>
              </Link>
              <button className="nav-close-btn" onClick={closeSideBar}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg></button>

            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}
