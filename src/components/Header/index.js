import React from "react";
import * as I from "../../icons";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <I.HambugIcon />
      <div>New chat</div>
      <I.PlusIcon />
    </div>
  );
};

export default Header;
