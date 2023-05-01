import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Links from "./Links";

const Reports = () => {
  document.title = "Reports | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Reports" />
              <Links />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Reports;
