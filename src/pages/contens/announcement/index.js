import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";

const Announcement = () => {
  document.title = "Contents-Announcement | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Announcement" pageTitle="Contents" />
          <Row>
            <Col xxl={6}>
              <DataTable/>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Announcement;
