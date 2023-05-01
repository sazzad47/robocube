import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import { useNavigate } from "react-router-dom";

const MaritalStatus = () => {
  document.title = "Marital Status | Robocube HR";

  const navigate = useNavigate();

  const addNew = () => {
    navigate("/secondary/add/marital_status");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Marital Status"
            isAddNew={true}
            addNewFunction={addNew}
          />
          <div className="container-fluid container-wrapper">
            <Datatable />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MaritalStatus;
