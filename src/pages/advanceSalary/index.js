import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";

const AdvanceSalary = () => {
  document.title = "Advance Salary | Robocube HR";

  const navigate = useNavigate();

  const addNew = () => {
    navigate("/advance/add");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Advance Salary"
            isAddNew={true}
            addNewFunction={addNew}
          />
          <DataTable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AdvanceSalary;
