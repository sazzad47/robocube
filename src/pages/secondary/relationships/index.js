import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import { useNavigate } from "react-router-dom";

const Relationships = () => {
  document.title = "Relationships | Robocube HR";

  const navigate = useNavigate();

  const addNew = () => {
    navigate("/secondary/add/relationship");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Relationships" isAddNew={true} addNewFunction={addNew} />
          <Row className="mt-3">
            <Datatable />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Relationships;
