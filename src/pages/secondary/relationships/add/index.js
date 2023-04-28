import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddRelationship = () => {
  document.title = "Add Relationship | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Relationship" />
          <Row className="mt-3">
          <FormComponent/>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddRelationship;
