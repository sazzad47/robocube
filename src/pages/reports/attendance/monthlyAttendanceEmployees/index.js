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
          <div className="container-fluid container-wrapper">
            <FormComponent setData={setData} />
            {!data ? (
              <div className="alert alert-warning">
                Please select an employee
              </div>
            ) : (
              <Datatable />
            )}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MonthlyAttendanceEmployees;
