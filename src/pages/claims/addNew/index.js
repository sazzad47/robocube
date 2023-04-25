import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddNew = () => {
  document.title = "Add New Claims | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Claims" pageTitle="Claims" />
          <Row>
            <Col xxl={6}  className="d-flex justify-content-center" >
              <div style={{width: "100%", maxWidth: "620px"}}>
                <FormComponent />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddNew;