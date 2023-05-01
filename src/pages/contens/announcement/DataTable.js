import React from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { useRef } from "react";
import { useEffect } from "react";


const DataTable = () => {
  const tableRef = useRef();

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
                    style={{ width: "20%" }}
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Title: activate to sort column ascending"
                  >
                    Title
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
                    aria-label="Author: activate to sort column ascending"
                  >
                    Author
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="DataTables_Table_0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Create On: activate to sort column ascending"
                  >
                    Create On
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">1</td>
                  <td>
                    <a href="https:">聖誕派對！！ </a>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>{" "}
                  <td>YuQing</td>
                  <td>2022-12-15 14:57:55</td>
                </tr>
                <tr role="row" className="even">
                  <td className="sorting_1">2</td>
                  <td>
                    <a href="https://robocube.synorexcloud.com/hr/content/edit/167401279895">
                      好好睡{" "}
                    </a>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>{" "}
                  <td>YuQing</td>
                  <td>2023-01-18 11:33:18</td>
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
