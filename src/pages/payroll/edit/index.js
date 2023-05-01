import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";

const Payroll = () => {
  document.title = "Edit Payroll | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Edit Payroll" pageTitle="Payroll" />
          <div className="container-fluid container-wrapper">
            <ul id="progressbar">
              <li className="active_after" id="payroll_1">
                <span className="font-weight-bold">Select a Month</span>
              </li>
              <li className="active" id="payroll_2">
                <span className="font-weight-bold">Review &amp; Confirm</span>
              </li>
              <li id="payroll_3">
                <span className="font-weight-bold">Payment &amp; Submission</span>
              </li>
            </ul>
            <div className="alert alert-warning">
              <p className="mb-1">
                You are viewing the payroll of <b>May, 2023</b>
              </p>
              <ul className="mb-0">
                <li>Make sure the employeers has active and joined</li>
              </ul>
            </div>
            <DataTable/>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payroll;
