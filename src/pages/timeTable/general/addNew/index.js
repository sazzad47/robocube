import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddNew = () => {
  document.title = "Add Timetable | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Timetable" />
          <Row>
            <Col xxl={6}>
              <FormComponent />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddNew;
