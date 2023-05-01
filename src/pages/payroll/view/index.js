import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import Minitables from "./Minitables";

const Payroll = () => {
  document.title = "Edit Payroll | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Edit Payroll" />
          <div className="container-fluid container-wrapper">
            <ul id="progressbar">
              <li className="active_after" id="payroll_1">
                <span className="font-weight-bold">Select a Month</span>
              </li>
              <li className="active_after" id="payroll_2">
                <span className="font-weight-bold">Review &amp; Confirm</span>
              </li>
              <li className="active" id="payroll_3">
                <span className="font-weight-bold">Payment &amp; Submission</span>
              </li>
            </ul>
            <form >
              <Minitables/>
              <DataTable/>
            </form>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payroll;
