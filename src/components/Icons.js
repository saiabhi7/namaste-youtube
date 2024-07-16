import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Icons = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="flex cursor-pointer">
        <img
          className="h-10 mr-2"
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
          alt="Menu"
          onClick={() => handleToggleMenu()}
        />
        <img
          className="h-10 ml-2 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/240_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          alt="Logo"
        />
      </div>
    </>
  );
};

export default Icons;
