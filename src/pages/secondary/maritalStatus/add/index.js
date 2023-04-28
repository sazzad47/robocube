import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddMaritalStatus = () => {
  document.title = "Add Marital Status | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Marital Status" />
          <Row className="mt-3">
          <FormComponent/>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddMaritalStatus;
