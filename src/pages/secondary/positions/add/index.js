import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddPosition = () => {
  document.title = "Add Position | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Position" />
          <Row className="mt-3">
          <FormComponent/>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddPosition;