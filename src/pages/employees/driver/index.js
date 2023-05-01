import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";

const Driver = () => {
  document.title = "Driver | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Driver" />
          <Datatable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Driver;
