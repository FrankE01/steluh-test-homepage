import React from "react";

const NavLink = ({ children }) => {
  return (
    <span className="font-medium cursor-pointer text-[#ffffff] hover:text-[#0cd2dc] transition-all ease-out duration-300">
      {children}
    </span>
  );
};

export default NavLink;
