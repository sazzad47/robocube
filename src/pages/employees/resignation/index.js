import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";

const Resignation = () => {
  document.title = "Resignation | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Resignation" />
          <Datatable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Resignation;
