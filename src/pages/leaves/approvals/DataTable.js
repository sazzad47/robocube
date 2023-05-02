import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { useRef } from "react";
import Alert from "../../../Components/Common/Alert";

const DataTable = () => {
  const [alertUser, setAlertUser] = useState(false);

  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <React.Fragment>
      <Alert
        show={alertUser}
        type="warning"
        onConfirm={() => setAlertUser(false)}
        onCancel={() => setAlertUser(false)}
        confirmBtnText="Yes"
        cancelBtnText="No"
        message="Are you sure want to delete this request?"
      />
      <div className="container-fluid container-wrapper">
        <div className="row">
          <div className="col-sm-12">
            <table
              ref={tableRef}
              data-order='[[ 0, "desc" ]]'
              className="table-responsive table dataTable no-footer"
              id="DataTables_Table_0"
              role="grid"
              aria-describedby="DataTables_Table_0_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting_desc"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-sort="descending"
                    aria-label="Date / Time: activate to sort column ascending"
                  >
                    Date / Time
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Reason: activate to sort column ascending"
                  >
                    Reason
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="File: activate to sort column ascending"
                  >
                    File
                  </th>
                  <th
                    style={{ width: "20%" }}
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Employee: activate to sort column ascending"
                  >
                    Employee
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Leave Type: activate to sort column ascending"
                  >
                    Leave Type
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Date: activate to sort column ascending"
                  >
                    Date
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Day(s): activate to sort column ascending"
                  >
                    Day(s)
                  </th>
                  <th
                    style={{ width: "10%" }}
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Status: activate to sort column ascending"
                  >
                    Status
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label=": activate to sort column ascending"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd" role="row">
                  <td className="sorting_1">2022-12-15 14:48:28 </td>
                  <td>Bzy</td>
                  <td>-</td>
                  <td>
                    <Link to="/">Amirah </Link>
                  </td>
                  <td>Unpaid Leave</td>
                  <td>2022-12-16 - 2022-12-16</td>
                  <td>1</td>
                  <td>
                    <span className="badge badge-success">Approved</span>{" "}
                  </td>
                  <td className="text-right">
                    <form method="post">
                      <input type="hidden" name="id" value="167108690870" />
                      <div
                        onClick={() => setAlertUser(true)}
                        className="approval-delete text-danger"
                        style={{ cursor: "pointer" }}
                      >
                        <Tooltip anchorSelect=".approval-delete" place="top">
                          Delete
                        </Tooltip>
                        <i className="fa fa-fw fa-trash"></i>
                      </div>
                    </form>
                  </td>
                </tr>
                <tr className="even" role="row">
                  <td className="sorting_1">2022-12-15 14:47:36 </td>
                  <td>Headache</td>
                  <td>-</td>
                  <td>
                    <Link to="/">Amirah </Link>
                  </td>
                  <td>Sick Leave</td>
                  <td>2022-12-15 - 2022-12-15</td>
                  <td>0.5</td>
                  <td>
                    <span className="badge badge-danger">Rejected</span>{" "}
                  </td>
                  <td className="text-right">
                    <form method="post">
                      <input type="hidden" name="id" value="167108685667" />
                      <div
                        onClick={() => setAlertUser(true)}
                        className="approval-delete text-danger"
                        style={{ cursor: "pointer" }}
                      >
                        <Tooltip anchorSelect=".approval-delete" place="top">
                          Delete
                        </Tooltip>
                        <i className="fa fa-fw fa-trash"></i>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataTable;
