import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Components from "./Components";

const General = () => {
  document.title = "Timetable | Driver | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Driver"
          />
          <Row>
            <Col xxl={6}>
              <Components/>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default General;
