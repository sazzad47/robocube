import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import FormComponent from "./FormComponent";

const MonthlyAttendanceEmployees = () => {
  document.title = "Monthly Attendance (Employees) | Robocube HR";

  const [data, setData] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Monthly Attendance (Employees)" />
          <Row className="mt-3">
            <FormComponent setData={setData} />
          </Row>
          <Row>
            {!data ? (
              <div className="alert alert-warning">
                Please select an employee
              </div>
            ) : (
              <Datatable />
            )}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MonthlyAttendanceEmployees;
