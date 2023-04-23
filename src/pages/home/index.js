import React from "react";
import { Col, Container, Row } from "reactstrap";
import Widget from "./Widgets";
import Upgrades from "./Upgrades";
import Section from "./Section";
import UpcomingEvents from "./UpcomingEvents";
import Birthdays from "./BirthDays";
import CalculateDeductions from "./CalculateDeductions";
import Blocks from "./Blocks";

const Home = () => {
  document.title = "Home | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
                <Section />
                <Row>
                  <Widget />
                </Row>
                <Row>
                  <Col xl={6}>
                    <Row>
                      <Blocks />
                    </Row>
                    <Upgrades />
                  </Col>
                  <Col xl={6}>
                    <UpcomingEvents />
                    <Birthdays />
                    <CalculateDeductions />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
