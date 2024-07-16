import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showMenu = useSelector((store) => store.app.showMenu);
  return (
    showMenu && (
      <ul className="shadow-lg p-2">
        <Link to="/">
          <li className="p-1 cursor-pointer">Home</li>
        </Link>
        <li className="p-1 cursor-pointer">Shorts</li>
        <li className="p-1 cursor-pointer">Videos</li>
        <li className="p-1 cursor-pointer">Subscriptions</li>
      </ul>
    )
  );
};

export default Sidebar;
