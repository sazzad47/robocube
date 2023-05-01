import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddNew = () => {
  document.title = "Add Claims | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Claims" />
          <FormComponent />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddNew;
