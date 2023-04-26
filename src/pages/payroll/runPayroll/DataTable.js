import React, { useState } from "react";
import { Card, CardBody, Table } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteModal from "../../../Components/Common/DeleteModal";
import SelectEmployee from "./SelectEmployee";
import { useCallback } from "react";

import avatar1 from "../../../assets/images/users/avatar-3.jpg";
import { Tooltip } from "react-tooltip";

const tableData = [
  {
    employee: {
      name: "John Doe",
      position: "Manager",
      general: "Full-time",
      salary_basis: "Monthly",
      salary_amount: 5000,
      public_holiday: 12,
      working_days: 22,
    },
    basic_salary: 5000,
    additions: 1000,
    gross_pay: 6000,
    deductoins: 500,
    net_pay: 5500,
  },
  {
    employee: {
      name: "Jane Smith",
      position: "Sales Executive",
      general: "Part-time",
      salary_basis: "Hourly",
      salary_amount: 20,
      public_holiday: 5,
      working_days: 18,
    },
    basic_salary: 1440,
    additions: 200,
    gross_pay: 1640,
    deductoins: 50,
    net_pay: 1590,
  },
  // Add more objects to represent additional rows
];

const DataTable = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const runPayroll = () => {
    setModal(true);
  };

  const ActionCell = () => (
    <div className="d-flex justify-content-center">
      <button className="btn link-danger">
        <i className="bx bx-x-circle bx-sm"></i>
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

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => setDeleteModal(false)}
        onCloseClick={() => setDeleteModal(false)}
      />
      <SelectEmployee modal={modal} setModal={setModal} toggle={toggle} />
      <Card>
        <CardBody>
          <div className="w-100 d-flex justify-content-end mb-3">
            <button onClick={runPayroll} className="btn btn-success">
              <i className="ri-add-line align-bottom me-1"></i>
              Add New
            </button>
          </div>
          <div className="table-responsive">
            <Table className="table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="cardtableCheck03"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cardtableCheck03"
                      ></label>
                    </div>
                  </th>
                  <th scope="col">Employee</th>
                  <th scope="col">Basic Salary (MYR)</th>
                  <th scope="col">Additions (MYR)</th>
                  <th scope="col">Gross Pay (MYR)</th>
                  <th scope="col">Deductoins (MYR)</th>
                  <th scope="col">Net Pay (MYR)</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="cardtableCheck03"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="cardtableCheck03"
                        ></label>
                      </div>
                    </td>
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
                  <td colSpan="2">{totalNetPay.toFixed(2)}</td>
                </tr>
              </tfoot>
            </Table>
          </div>
          <div className="w-100 d-flex justify-content-end gap-2 mt-4">
            <button className="btn btn-danger">Save as Draft</button>
            <button className="btn btn-primary">Confirm</button>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
