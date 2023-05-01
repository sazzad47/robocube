import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";

const Asli = () => {
  document.title = "Asli | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Asli" />
            <Datatable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Asli;
