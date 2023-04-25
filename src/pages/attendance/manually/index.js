import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import CheckStatus from "./ChechStatus";
import DataTable from "./DataTable";

const Daily = () => {
  document.title = "Attendance-Manually | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Manually" pageTitle="Attendance" />
          <Row>
            <Col>
              <div className="h-100">
                <Row>
                  <Col sm={12} md={7}>
                    <DataTable />
                  </Col>
                  <Col sm={12} md={5}>
                    <CheckStatus />
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
