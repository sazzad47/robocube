import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddMaritalStatus = () => {
  document.title = "Add Marital Status | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Marital Status" />
          <div className="container-fluid container-wrapper">
            <FormComponent />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddMaritalStatus;
