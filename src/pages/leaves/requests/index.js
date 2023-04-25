import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Summary from "./Summary";
import Calendar from "./Calendar";
import NewRequest from "./NewRequest";

const Requests = () => {
  document.title = "Leaves-Requests | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Requests" pageTitle="Leaves" />
          <Row>
            <Col xl={7}>
              <Summary />
              <Calendar />
            </Col>
            <Col xl={5}>
              <NewRequest/>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Requests;
