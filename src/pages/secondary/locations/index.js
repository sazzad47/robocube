import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import { useNavigate } from "react-router-dom";

const Locations = () => {
  document.title = "Locations | Robocube HR";

  const navigate = useNavigate();

  const addNew = () => {
    navigate("/secondary/add/location");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Locations"
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

export default Locations;
