import React, { useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import avatar1 from "../../../assets/images/users/avatar-3.jpg";
import { Tooltip } from "react-tooltip";
import ConfirmationModal from "../../../Components/Common/ConfirmationModal";

const tableData = [
  {
    no: 1,
    employee: {
      name: "John Doe",
      position: "Manager",
      general: "Full Time",
      salary_basis: "Monthly",
      salary_amount: "5000",
      public_holiday: "12",
      working_days: "22",
    },
    basic_salary: 5000,
    additions: 500,
    gross_pay: 5500,
    deductoins: 750,
    net_pay: 4750,
    hrdf: 100,
  },
  {
    no: 2,
    employee: {
      name: "Jane Smith",
      position: "Developer",
      general: "Full Time",
      salary_basis: "Monthly",
      salary_amount: "4000",
      public_holiday: "12",
      working_days: "22",
    },
    basic_salary: 4000,
    additions: 250,
    gross_pay: 4250,
    deductoins: 500,
    net_pay: 3750,
    hrdf: 80,
  },
  {
    no: 3,
    employee: {
      name: "Bob Johnson",
      position: "Designer",
      general: "Part Time",
      salary_basis: "Hourly",
      salary_amount: "50",
      public_holiday: "0",
      working_days: "12",
    },
    basic_salary: 2400,
    additions: 100,
    gross_pay: 2500,
    deductoins: 250,
    net_pay: 2250,
    hrdf: 40,
  },
];

const DataTable = () => {
  const navigate = useNavigate();

  const [confirmModal, setConfirmModal] = useState(false);

  const ActionCell = () => (
    <div className="d-flex flex-column justify-content-center">
      <button className="btn p-1 btn-info email">
      <i className='bx fs-19 bx-envelope'></i>
      <Tooltip anchorSelect=".email" place="top">Send Email</Tooltip>
      </button>
      <button className="btn p-1 btn-info whatsapp">
      <i className='bx fs-19 bxl-whatsapp'></i>
      <Tooltip anchorSelect=".whatsapp" place="top">Send Whatsapp</Tooltip>
      </button>
      <button className="btn p-1 btn-success download">
      <i className='bx fs-19 bxs-download'></i>
      <Tooltip anchorSelect=".download" place="top">Download</Tooltip>
      </button>
      <button className="btn p-1 btn-warning view">
      <i className="ri-eye-line fs-19"></i>
      <Tooltip anchorSelect=".view" place="top">View</Tooltip>
      </button>
    </div>
  );

  //Total
  const totalBasicSalary = tableData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.basic_salary,
    0
  );

  const totalAdditions = tableData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.additions,
    0
  );

  const totalGrossPay = tableData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.gross_pay,
    0
  );

  const totalDeductoins = tableData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.deductoins,
    0
  );

  const totalNetPay = tableData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.net_pay,
    0
  );

  const totalHRDF = tableData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.hrdf,
    0
  );

  return (
    <React.Fragment>
      <ConfirmationModal
        show={confirmModal}
        text="Are you sure you want to delete this payroll?"
        primaryCmd="No"
        secondaryCmd="Yes"
        onPrimaryCmd={() => setConfirmModal(false)}
        onSecondaryCmd={() => setConfirmModal(false)}
      />
      <Card>
        <CardBody>
          <div className="table-responsive">
            <Table className="table-nowrap mb-0 table-hover">
              <thead className="">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Employee</th>
                  <th scope="col">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bx bx-sync bx-sm link link-primary sync"></i>{" "}
                      <Tooltip anchorSelect=".sync" place="top">
                        Sync to basic salary
                      </Tooltip>
                      <div>Basic Salary (MYR)</div>
                    </div>
                  </th>
                  <th scope="col">Additions (MYR)</th>
                  <th scope="col">Gross Pay (MYR)</th>
                  <th scope="col">Deductoins (MYR)</th>
                  <th scope="col">Net Pay (MYR)</th>
                  <th scope="col">HRDF (MYR)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.no}</td>
                    <td>
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img
                              className="avatar-sm rounded-circle"
                              alt=""
                              src={avatar1}
                            />
                          </div>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="contact-name fs-13 mb-1">
                            <Link to="#" className="link text-primary">
                              {item.employee.name}
                            </Link>
                          </h5>
                          <div
                            style={{ fontSize: "0.8em" }}
                            className="text-muted mb-0"
                          >
                            <div className="text-nowrap">
                              Position: {item.employee.position}
                            </div>
                            <div className="text-nowrap">
                              Type: {item.employee.general}
                            </div>
                            <div className="text-nowrap">
                              HRDF:{" "}
                              <span className="text-success">Enabled</span>
                            </div>
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            className="employee_info badge bg-primary mt-3"
                          >
                            Info
                          </div>
                          <Tooltip
                            className="bg-white text-dark"
                            anchorSelect=".employee_info"
                            place="top"
                          >
                            <div className="text-nowrap">
                              Salary Basis: {item.employee.salary_basis}
                            </div>
                            <div className="text-nowrap">
                              Salary Amount: {item.employee.salary_amount}
                            </div>
                            <div className="text-nowrap">
                              Public Holiday: {item.employee.public_holiday}
                            </div>
                            <div className="text-nowrap">
                              Working Days: {item.employee.working_days}
                            </div>
                          </Tooltip>
                        </div>
                      </div>
                    </td>
                    <td>{item.basic_salary}</td>
                    <td>{item.additions}</td>
                    <td>{item.gross_pay}</td>
                    <td>{item.deductoins}</td>
                    <td>{item.net_pay}</td>
                    <td>{item.hrdf}</td>
                    <td>
                      <ActionCell />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="table-light">
                <tr>
                  <td colSpan="2">Grand Total {`(${tableData.length})`} </td>
                  <td>{totalBasicSalary.toFixed(2)}</td>
                  <td>{totalAdditions.toFixed(2)}</td>
                  <td>{totalGrossPay.toFixed(2)}</td>
                  <td>{totalDeductoins.toFixed(2)}</td>
                  <td>{totalNetPay.toFixed(2)}</td>
                  <td colSpan="2">{totalHRDF.toFixed(2)}</td>
                </tr>
              </tfoot>
            </Table>
          </div>
          <div className="w-100 d-flex justify-content-end gap-2 mt-4">
            <button onClick={()=> setConfirmModal(true)} className="btn btn-danger">Delete</button>
            <button
              onClick={() => navigate("/payroll/123/edit")}
              className="btn btn-primary"
            >
              Edit
            </button>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
