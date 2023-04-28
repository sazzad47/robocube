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

export default DailyAttendance;
