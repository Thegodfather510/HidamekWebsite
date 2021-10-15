import React from "react";

const DotItem = ({ isActive }) => {
  return (
    <div
      className={`w-2 h-2 mx-2 ${
        isActive ? "bg-red-600" : "bg-gray-300"
      } rounded-full cursor-pointer`}
    ></div>
  );
};

export default DotItem;
