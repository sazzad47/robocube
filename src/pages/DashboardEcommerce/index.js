import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Widget from "./Widgets";
import BestSellingProducts from "./BestSellingProducts";
import Section from "./Section";
import UpcomingEvents from "./UpcomingEvents";
import Birthdays from "./BirthDays";
import CalculateDeductions from "./CalculateDeductions";
import Blocks from "./Blocks";

const DashboardEcommerce = () => {
  document.title = "Dashboard | Robocube HR";

  const [rightColumn, setRightColumn] = useState(false);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
                <Section rightClickBtn={toggleRightColumn} />
                <Row>
                  <Widget />
                </Row>
                <Row>
                  <Col xl={6}>
                    <Row>
                      <Blocks />
                    </Row>
                    <BestSellingProducts />
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

export default DashboardEcommerce;
