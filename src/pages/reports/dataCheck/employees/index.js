import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";

const Employees = () => {
  document.title = "Employees | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Employees" />
          <Row className="mt-3">
            <Datatable/>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Employees;