import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Link } from "react-router-dom";

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
                    style={{ width: "35%" }}
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
                    <Link className="btn-link" to="/">Working Hours </Link>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                  <td>-</td>
                </tr>
                <tr role="row" className="even">
                  <td className="sorting_1">2</td>
                  <td>
                    <Link className="btn-link" to="/">Morning </Link>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                  <td>-</td>
                </tr>
                <tr role="row" className="odd">
                  <td className="sorting_1">3</td>
                  <td>
                    <Link className="btn-link" to="/">Noon </Link>
                  </td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
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
