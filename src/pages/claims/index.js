import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";

const Claims = () => {
  document.title = "Claims | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Claims" />
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

export default Claims;
