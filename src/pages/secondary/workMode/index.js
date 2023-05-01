import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import { useNavigate } from "react-router-dom";

const WorkMode = () => {
  document.title = "Work Mode | Robocube HR";

  const navigate = useNavigate();

  const addNew = () => {
    navigate("/secondary/add/work_mode");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Work Mode"
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

export default WorkMode;
