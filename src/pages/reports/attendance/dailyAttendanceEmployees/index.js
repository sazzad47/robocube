import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const DailyAttendanceEmployees = () => {
  document.title = "Daily Attendance (Employees) | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Daily Attendance (Employees)" />
          <Row className="mt-3">
            <FormComponent/>
          </Row>
          <Row>
            <Datatable/>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DailyAttendanceEmployees;
