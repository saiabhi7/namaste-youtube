import React from "react";

const Button = ({ item }) => {
  return (
    <button className="bg-gray-300 rounded-md text-center px-2 font-semibold text-sm">
      {item}
    </button>
  );
};

export default Button;
