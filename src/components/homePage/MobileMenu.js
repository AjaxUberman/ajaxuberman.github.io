import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavBar from "./NavBar";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  const menuHandler = () => {
    setActive(!active);
  };

  return (
    <div>
      <button className="text-siyah-text" onClick={menuHandler}>
        {!active ? (
          <div className="absolute right-6 top-6 text-2xl">
            <IoMenu />
          </div>
        ) : (
          <NavBar active={active} />
        )}
      </button>
    </div>
  );
};

export default MobileMenu;
