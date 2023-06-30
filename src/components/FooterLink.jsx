import React from "react";

const FooterLink = ({ children }) => {
  return (
    <span className="font-medium cursor-pointer text-[#aaaaaa] hover:text-[#0cd2dc] transition-all ease-out duration-300">
      {children}
    </span>
  );
};

export default FooterLink;
