import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";

const Trip = () => {
  document.title = "All Trip | Robocube HR";
  
  const navigate = useNavigate();

  const addNew = () => {
    navigate("/trip/add");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="All Trip" isAddNew={true} addNewFunction={addNew} />
          <DataTable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Trip;
