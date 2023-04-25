import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import ScanID from "./ScanID";
import DataTable from "./DataTable";

const Daily = () => {
  document.title = "Attendance-Daily | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Daily" pageTitle="Attendance" />
          <Row>
            <Col>
              <div className="h-100">
                <Row>
                  <Col xxl={6}>
                    <ScanID />
                  </Col>
                </Row>
                <Row>
                  <Col xxl={6}>
                    <DataTable />
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

export default Daily;
