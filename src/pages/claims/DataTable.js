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
              className="table-responsive table dataTable no-footer"
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
                    aria-label="Date: activate to sort column ascending"
                  >
                    Date
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
                    style={{ width: "25%" }}
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
                    className="text-right sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Total ($): activate to sort column ascending"
                  >
                    Total ($)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">1</td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/claims/edit/167299638230">
                      Claim{" "}
                    </a>
                  </td>
                  <td>2023-01-06</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/employees/edit/166804835212">
                      Amirah
                    </a>
                  </td>
                  <td>-</td>
                  <td className="text-right">30.00</td>
                </tr>
                <tr role="row" className="even">
                  <td className="sorting_1">2</td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/claims/edit/168244605661">
                      testing{" "}
                    </a>
                  </td>
                  <td>2023-04-27</td>
                  <td>
                    <span className="badge badge-success">Approved</span>{" "}
                  </td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/employees/edit/166804835212">
                      Amirah
                    </a>
                  </td>
                  <td>testing</td>
                  <td className="text-right">0.04</td>
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
