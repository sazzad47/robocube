import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const AllowanceReport = () => {
  document.title = "Allowance Report | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Allowance Report" />
          <Row className="mt-3">
            <FormComponent/>
          </Row>
          <Row >
            <Datatable/>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllowanceReport;
