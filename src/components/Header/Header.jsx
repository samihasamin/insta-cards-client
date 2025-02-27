import React from "react";
import "./Header.scss";
import InstaCard from "../../assets/images/icons/Instacard - LOGO.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={InstaCard} alt="InstaCards" className="logo" />
    </header>
  );
};

export default Header;
