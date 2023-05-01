import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import { useNavigate } from "react-router-dom";

const Banks = () => {
  document.title = "Banks | Robocube HR";

  const navigate = useNavigate();

  const addNew = () => {
    navigate("/secondary/add/bank");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Banks" isAddNew={true} addNewFunction={addNew} />
          <div className="container-fluid container-wrapper">
            <Datatable />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Banks;
