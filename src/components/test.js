import React, { Component } from "react";
import { useEffect, useState } from "react";

function Hello() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    isActive ? setActive(false) : setActive(true);
  };

  return (
    <div className={isActive ? "Toggle" : "notToggle"}>
      <p onClick={toggleClass}>hello</p>
    </div>
  );
}
export default Hello;
