import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid pt-3 border-top">
        2023 © Robocube HR. All right reserved. Powered by{" "}
        <a href="https://synorexcloud.com/" target="_blank" rel="noreferrer">
          Synorex
        </a>
      </div>
    </React.Fragment>
  );
};

export default Footer;
