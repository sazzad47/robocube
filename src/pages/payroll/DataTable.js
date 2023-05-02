import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net-bs4";

const tableData = [
  {
    id: 1,
    month: "January",
    status: "Completed",
    total_basis: 1000,
    total_additions: 500,
    total_gross_pay: 1500,
    total_deductions: 200,
    total_net_pay: 1300,
    hrdf_listing: "Yes",
  },
  {
    id: 2,
    month: "February",
    status: "Draft",
    total_basis: 1200,
    total_additions: 600,
    total_gross_pay: 1800,
    total_deductions: 250,
    total_net_pay: 1550,
    hrdf_listing: "No",
  },
  {
    id: 3,
    month: "March",
    status: "Completed",
    total_basis: 1100,
    total_additions: 550,
    total_gross_pay: 1650,
    total_deductions: 225,
    total_net_pay: 1425,
    hrdf_listing: "Yes",
  },
  {
    id: 4,
    month: "April",
    status: "Draft",
    total_basis: 1050,
    total_additions: 525,
    total_gross_pay: 1575,
    total_deductions: 210,
    total_net_pay: 1365,
    hrdf_listing: "No",
  },
  {
    id: 5,
    month: "May",
    status: "Completed",
    total_basis: 1300,
    total_additions: 650,
    total_gross_pay: 1950,
    total_deductions: 275,
    total_net_pay: 1675,
    hrdf_listing: "Yes",
  },
];

const DataTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid container-wrapper">
        <table
          className="table-responsive table table-hover dataTable no-footer"
          ref={tableRef}
        >
          <thead>
            <tr role="row">
              <th
                className="text-left sorting_asc"
                style={{ width: "10%" }}
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
                className="text-left sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Month: activate to sort column ascending"
              >
                Month
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
                aria-label="Total Basis (MYR): activate to sort column ascending"
              >
                Total Basis (MYR)
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Total Additions (MYR): activate to sort column ascending"
              >
                Total Additions (MYR)
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Total Gross Pay (MYR): activate to sort column ascending"
              >
                Total Gross Pay (MYR)
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Total Deductions (MYR): activate to sort column ascending"
              >
                Total Deductions (MYR)
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Total Net Pay (MYR): activate to sort column ascending"
              >
                Total Net Pay (MYR)
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="HRDF Listing: activate to sort column ascending"
              >
                HRDF Listing
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id} role="row" className="odd">
                <td className="text-left sorting_1"> {item.id} </td>
                <td className="text-left">
                  <Link to="/">{item.month}</Link>
                </td>
                <td>
                  <span
                    className={`badge ${
                      item.status === "Completed"
                        ? "badge-success"
                        : "badge-secondary"
                    }`}
                  >
                    {" "}
                    {item.status}{" "}
                  </span>
                </td>
                <td>{item.total_basis}</td>
                <td> {item.total_additions} </td>
                <td> {item.total_gross_pay} </td>
                <td> {item.total_deductions} </td>
                <td> {item.total_net_pay} </td>
                <td>
                  <Link to="/">
                    <i className="fa fa-fw fa-external-link-square-alt"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default DataTable;
