import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../../Components/Common/Alert";

//Sample Data
const tableData = [
  {
    no: 1,
    name: "John Doe",
    status: "Approved",
    permissions: "View, Edit",
    "joined date": "2022-01-01",
  },
  {
    no: 2,
    name: "Jane Smith",
    status: "Pending",
    permissions: "View",
    "joined date": "2022-02-15",
  },
  {
    no: 3,
    name: "Bob Johnson",
    status: "Approved",
    permissions: "View, Edit, Delete",
    "joined date": "2021-12-01",
  },
  {
    no: 4,
    name: "Sara Lee",
    status: "Approved",
    permissions: "View",
    "joined date": "2022-03-10",
  },
  {
    no: 5,
    name: "Tom Lee",
    status: "Pending",
    permissions: "View, Edit",
    "joined date": "2022-01-05",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  const [alertUser, setAlertUser] = useState(false);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <React.Fragment>
      <table className="Dtable table datatable my-2" ref={tableRef}>
        <Alert
          show={alertUser}
          type="warning"
          onConfirm={() => setAlertUser(false)}
          onCancel={() => setAlertUser(false)}
          confirmBtnText="Yes"
          cancelBtnText="No"
          message="Are you sure you want to remove this admin"
        />
        <thead>
          <tr>
            <th style={{ width: "10%" }}>No</th>
            <th style={{ width: "35%" }}> Name</th>
            <th>Status</th>
            <th>Permission(s)</th>
            <th>Joined Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>
                <Link to="#">{item.name}</Link>
              </td>
              <td>
                <div
                  className={`badge ${
                    item.status === "Approved"
                      ? "badge-success"
                      : "badge-warning text-dark"
                  }`}
                >
                  {item.status}
                </div>
              </td>
              <td>{item.permissions}</td>
              <td>{item["joined date"]}</td>
              <td>
                <button
                  onClick={() => setAlertUser(true)}
                  className="remove_admin btn btn-sm btn-danger"
                >
                  <i className="fa fa-fw fa-times py-1"></i>
                  <Tooltip
                    style={{ fontSize: "1.2em" }}
                    anchorSelect=".remove_admin"
                    place="top"
                  >
                    Remove
                  </Tooltip>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Datatable;
