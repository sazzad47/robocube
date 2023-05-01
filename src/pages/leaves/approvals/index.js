import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";

const Approvals = () => {
  document.title = "Approvals | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Approvals" />
              <DataTable/>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Approvals;
