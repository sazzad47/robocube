import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const AllowanceReport = () => {
  document.title = "Allowance Report | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Allowance Report" />
          <div className="container-fluid container-wrapper">
            <FormComponent />
            <Datatable />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllowanceReport;
