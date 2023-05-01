import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const LeaveByDepartment = () => {
  document.title = "Leave by Department | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Leave by Department" />
          <div className="container-fluid container-wrapper">
            <FormComponent/>
            <Datatable/>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default LeaveByDepartment;
