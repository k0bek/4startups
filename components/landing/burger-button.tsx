import React from "react";

const BurgerButton = () => {
  return (
    <aside className="flex flex-col justify-between h-[17px] focus:outline-none px-5">
      <span className="block w-6 h-[3px] bg-border transition-transform duration-300 rounded-md"></span>
      <span className="block w-6 h-[3px] bg-border transition-transform duration-300 rounded-md"></span>
      <span className="block w-6 h-[3px] bg-border transition-transform duration-300 rounded-md"></span>
    </aside>
  );
};

export default BurgerButton;
