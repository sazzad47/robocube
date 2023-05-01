import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import FormComponent from "./FormComponent";

const AddEmployee = () => {
  document.title = "Add Employee | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Employee" />
          <FormComponent/>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddEmployee;
