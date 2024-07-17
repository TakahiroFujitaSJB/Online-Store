import "./navbar.scss";
import Logo from "../../assets/img/Logo.png";
import menuIcon from "../../assets/img/menu.png";
import React, { useState, useEffect } from "react";

function Navbar() {
  // Initialize log state from localStorage or default to false
  const [log, setLog] = useState(
    localStorage.getItem("loggedIn") === "true" ? true : false
  );
  const [open, setOpen] = useState(false);

  // Effect to sync log state with localStorage
  useEffect(() => {
    localStorage.setItem("loggedIn", log);
  }, [log]);

  const handleSignIn = () => {
    setLog(!log);
  };

  const handleLogout = () => {
    setLog(!log);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
          <span> Online Store </span>
        </a>
        <a href="/"> Home </a>
        <a href="/list"> Explore </a>
      </div>
      <div className="right">
        {/* Conditional rendering based on log state */}
        {!log ? (
            <a href="/" className="register" onClick={handleLogout}>
                {" "}
                Logout{" "}
            </a>
        ) : (
          <>
            <a href="/login" onClick={handleSignIn}>
                {" "}
                Sign In{" "}
            </a>
            <a href="/signup" className="register">
              {" "}
              Sign Up{" "}
            </a>
           </>
        )}

        <div className="menuIcon">
          <img src={menuIcon} alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/"> Home </a>
          <a href="/list"> Explore </a>
          {!log ? (
            <a href="/login"> Sign In </a>
          ) : (
            <>
              <a href="/" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </a>
              <a href="/signup"> Sign Up </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
