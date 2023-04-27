import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";

const Trip = () => {
  document.title = "Timetable | General | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Timetable" />
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

export default Trip;
