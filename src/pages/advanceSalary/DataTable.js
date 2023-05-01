import React from "react";
import { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { useRef } from "react";

const DataTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid container-wrapper">
        <div className="row">
          <div className="col-sm-12">
            <table
              ref={tableRef}
              data-order='[[ 0, "desc" ]]'
              className="DTable table dataTable no-footer"
              id="DataTables_Table_0"
              role="grid"
              aria-describedby="DataTables_Table_0_info"
            >
              <thead>
                <tr role="row">
                  <th
                    style={{ width: "10%" }}
                    className="sorting_asc"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-sort="ascending"
                    aria-label="No: activate to sort column descending"
                  >
                    No
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Subject: activate to sort column ascending"
                  >
                    Subject
                  </th>
                  <th
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
                    aria-label="Remark: activate to sort column ascending"
                  >
                    Remark
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Application Date: activate to sort column ascending"
                  >
                    Application Date
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Deduction Month: activate to sort column ascending"
                  >
                    Deduction Month
                  </th>
                  <th
                    className="text-right sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Total ($): activate to sort column ascending"
                  >
                    Total ($)
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
                <tr role="row" className="odd">
                  <td className="sorting_1">1</td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/advance/edit/168014473918">
                      窮了 借點錢用{" "}
                    </a>
                  </td>
                  <td>
                    <span className="badge badge-success">Approved</span>{" "}
                  </td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/employees/edit/166804835212">
                      Amirah
                    </a>
                  </td>
                  <td>-</td>
                  <td>2023-03-30</td>
                  <td>2025-01</td>
                  <td className="text-right">1,000.00</td>
                  <td>
                    <a
                      href="https://robocube.synorexcloud.com/hr/export/advance_salary/168014473918"
                      className="btn btn-success btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-fw fa-print"></i>
                    </a>
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
