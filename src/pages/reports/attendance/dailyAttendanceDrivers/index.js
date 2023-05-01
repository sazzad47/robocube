import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const MonthlyAttendanceDrivers = () => {
  document.title = "Daily Attendance (Drivers) | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Daily Attendance (Drivers)" />
          <div className="container-fluid container-wrapper">
            <FormComponent/>
            <Datatable/>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MonthlyAttendanceDrivers;
