import React from "react";
import DonateButton from "./DonateButton";
import NavLink from "./NavLink";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div id="nav" className="py-4 mx-8 flex justify-between">
      <a href="/">
        <div className="flex items-center gap-2">
          <img src={logo} width={20} alt="logo" />
          <span
            className="text-3xl font-semibold text-[#ffffff]"
            style={{ fontFamily: "Arial" }}
          >
            steluh
          </span>
        </div>
      </a>
      <div className="flex gap-10 items-center">
        <DonateButton />
        <a href="/about-us">
          <NavLink>About Us</NavLink>
        </a>
        <NavLink>Mentor</NavLink>
        <NavLink>Advisor</NavLink>
        <NavLink>FAQs</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
