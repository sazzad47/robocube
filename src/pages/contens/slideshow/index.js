import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";

const Slideshow = () => {
  document.title = "Contents-Slideshow | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Slideshow" pageTitle="Contents" />
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

export default Slideshow;
