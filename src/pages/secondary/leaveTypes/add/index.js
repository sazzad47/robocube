import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddLeaveType = () => {
  document.title = "Add Position | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Position" />
          <div className="container-fluid container-wrapper">
            <FormComponent />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddLeaveType;
