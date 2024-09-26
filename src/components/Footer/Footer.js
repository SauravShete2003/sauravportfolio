import React from "react";
import Tooltip from "../MediaLink/MediaLink";
import './Footer.css';
function Footer() {

  return (
    <div className="footer">
      <span className="copy-right">
        Portfolio 2024 &copy; Copyright
      </span>
      <div className="toolTip">
        <Tooltip />
      </div>
    </div>
  );
}

export default Footer;
