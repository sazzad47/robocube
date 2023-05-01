import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Components from "./Components";

const General = () => {
  document.title = "Timetable | Driver | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Driver" />
          <Components />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default General;
