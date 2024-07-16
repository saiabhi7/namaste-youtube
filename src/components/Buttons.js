import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Sports",
  "Movies",
  "Songs",
  "Cricket",
  "Football",
  "News",
  "Educational",
  "Kids",
];

const Buttons = () => {
  return (
    <div className="flex justify-between">
      {list.map((item, index) => (
        <Button key={index} item={item} />
      ))}
    </div>
  );
};

export default Buttons;
