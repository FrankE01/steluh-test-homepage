import React from "react";

const Button = ({ children }) => {
  return (
    <button className="w-fit py-2 px-10 bg-[#0cd2dc] hover:bg-[#08838a] text-white text-md border-none rounded-lg cursor-pointer transition-all ease-out duration-300">
      {children}
    </button>
  );
};

export default Button;
