import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const DailyOvertime = () => {
  document.title = "Daily Overtime | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Daily Overtime" />
          <div className="container-fluid container-wrapper">
            <FormComponent/>
            <Datatable/>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DailyOvertime;
