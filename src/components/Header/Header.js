import React from "react";
import "./Header.css";

const Header = () => (
   <header className="header hero flex-center">
      <div className="hero-message">
         <h1 className="hero-title">Clicky Game!</h1>
         <h2 className="hero-sub-title">Click on a bird to earn points, but don't click on any more than once!</h2>
      </div>
   </header>
);
export default Header;