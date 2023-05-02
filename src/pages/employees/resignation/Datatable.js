import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Link } from "react-router-dom";

//Sample Data
const sampleData = [
  {
    no: 1,
    employee: { name: "John Doe", position: "Manager" },
    status: "Inactive",
    gender: "Male",
    phone: "+1 (555) 555-5555",
  },
  {
    no: 2,
    employee: { name: "Jane Smith", position: "Salesperson" },
    status: "Inactive",
    gender: "Female",
    phone: "+1 (555) 555-1234",
  },
  {
    no: 3,
    employee: { name: "Bob Johnson", position: "Technician" },
    status: "Inactive",
    gender: "Male",
    phone: "+1 (555) 555-6789",
  },
  {
    no: 4,
    employee: { name: "Sara Lee", position: "Designer" },
    status: "Inactive",
    gender: "Female",
    phone: "+1 (555) 555-9876",
  },
  {
    no: 5,
    employee: { name: "Tom Lee", position: "Developer" },
    status: "Inactive",
    gender: "Male",
    phone: "+1 (555) 555-4321",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <div className="container-fluid container-wrapper">
      <table className="table-responsive table table-hover dataTable no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th style={{ width: "7%" }}>No</th>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "10%" }}>Status</th>
            <th>Gender</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>
                <div className="d-flex gap-2 align-iteml-center">
                  <Link to="/employees/list">
                    <img
                      alt=""
                      src="https://cdn.synorex.link/assets/images/blank/4x3.jpg"
                      className="mr-2 rounded-circle border"
                      style={{
                        height: "65px",
                        width: "65px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <div className="media-body my-auto">
                    <Link to="/employees/list">{item.employee.name} </Link>
                    <span className="d-block small text-muted">
                      Position: {item.employee.position}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className={`badge ${
                    item.status === "Active"
                      ? "badge-success"
                      : "badge badge-dark"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
