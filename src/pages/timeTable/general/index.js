import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";

const General = () => {
  document.title = "Timetable | General | Robocube HR";

  const naviage = useNavigate();

  const addNew = () => {
    naviage("/timetable/add");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="All Timetable"
            isAddNew={true}
            addNewTitle="Add New"
            addNewFunction={addNew}
          />
          <DataTable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default General;
