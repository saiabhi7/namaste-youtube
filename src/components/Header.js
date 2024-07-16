import React from "react";
import Icons from "./Icons";
import Search from "./Search";
import User from "./User";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg">
      <Icons />
      <Search />
      <User />
    </div>
  );
};

export default Header;
