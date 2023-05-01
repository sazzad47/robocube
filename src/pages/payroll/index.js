import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import SelectMonth from "./SelectMonth";
import { useState } from "react";

const Payroll = () => {
  document.title = "Payroll History | Robocube HR";

  const [modal, setModal] = useState(false);

  const runPayroll = () => {
    setModal(true);
  };

  return (
    <React.Fragment>
      <SelectMonth modal={modal} setModal={setModal} />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Payroll History"
            isAddNew={true}
            addNewTitle="Run Payroll"
            addNewFunction={runPayroll}
          />
          <DataTable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payroll;
