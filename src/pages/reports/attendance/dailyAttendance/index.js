import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const DailyAttendance = () => {
  document.title = "Daily Attendance | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Daily Attendance" />
          <div className="container-fluid container-wrapper">
            <FormComponent/>
            <Datatable/>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DailyAttendance;
