import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const Daily = () => {
  document.title = "Daily Attendance | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Daily Attendance" />
          <div className="container container-wrapper mb-4">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <form method="post">
                      <div className="form-group">
                        <label>Card ID</label>
                        <input
                          type="text"
                          name="rfid_cardid"
                          className="form-control"
                          placeholder="Scan the ID Card"
                          required=""
                          autoFocus=""
                        />
                      </div>

                      <div className="form-group text-right">
                        <button
                          type="submit"
                          name="save"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="DataTables_Table_0_wrapper"
              className="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div
                    className="dataTables_length"
                    id="DataTables_Table_0_length"
                  >
                    <label>
                      Show{" "}
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    id="DataTables_Table_0_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 table-responsive">
                  <table
                    className="table-responsive table dataTable no-footer"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabIndex="0"
                          aria-controls="DataTables_Table_0"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Date / Time: activate to sort column descending"
                        >
                          Date / Time
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="DataTables_Table_0"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="User: activate to sort column ascending"
                        >
                          User
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="DataTables_Table_0"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Type: activate to sort column ascending"
                        >
                          Type
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="DataTables_Table_0"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Temp: activate to sort column ascending"
                        >
                          Temp
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="DataTables_Table_0"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td
                          valign="top"
                          colSpan="5"
                          className="dataTables_empty"
                        >
                          No data available in table
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="DataTables_Table_0_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 0 to 0 of 0 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="DataTables_Table_0_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="DataTables_Table_0_previous"
                      >
                        <Link to="/" className="page-link">
                          Previous
                        </Link>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="DataTables_Table_0_next"
                      >
                        <Link to="/" className="page-link">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Daily;
