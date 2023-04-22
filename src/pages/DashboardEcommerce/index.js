import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Widget from "./Widgets";
import BestSellingProducts from "./BestSellingProducts";
import RecentOrders from "./RecentOrders";
import Section from "./Section";
import StoreVisits from "./StoreVisits";
import TopSellers from "./TopSellers";

const DashboardEcommerce = () => {
  document.title ="Dashboard | Robocube HR";

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
                  <BestSellingProducts />
                  <TopSellers />
                </Row>
                <Row>
                  <StoreVisits />
                  <RecentOrders />
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
