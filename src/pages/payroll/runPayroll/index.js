import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import Steps from "./Steps";

const Payroll = () => {
  document.title = "Edit Payroll | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Edit Payroll" pageTitle="Payroll" />
          <Row>
            <Col xxl={6}>
              <Steps/>
              <DataTable/>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payroll;
