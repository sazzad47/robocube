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
                    aria-label="Employee: activate to sort column ascending"
                  >
                    Employee
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
                    aria-label="Location: activate to sort column ascending"
                  >
                    Location
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Start Date: activate to sort column ascending"
                  >
                    Start Date
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Start Time: activate to sort column ascending"
                  >
                    Start Time
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="End Date: activate to sort column ascending"
                  >
                    End Date
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="End Time: activate to sort column ascending"
                  >
                    End Time
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
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">1</td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/trip/edit/168014525137">
                      Cuttie{" "}
                    </a>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                  <td>Singapore</td>
                  <td>2023-03-31</td>
                  <td>11:00:00</td>
                  <td>2023-04-06</td>
                  <td>23:00:00</td>
                  <td>-</td>
                </tr>
                <tr role="row" className="even">
                  <td className="sorting_1">2</td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/trip/edit/168014565958">
                      Cuttie{" "}
                    </a>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                  <td>HK</td>
                  <td>2023-03-31</td>
                  <td>11:00:00</td>
                  <td>2023-04-01</td>
                  <td>23:00:00</td>
                  <td>-</td>
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
