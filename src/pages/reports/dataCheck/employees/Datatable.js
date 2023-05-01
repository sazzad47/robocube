import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    employee: "John Smith",
    phone: "555-1234",
    email: "john.smith@example.com",
    address: "123 Main St, Anytown USA",
    department: "Sales",
    position: "Sales Representative",
    portalAccess: "Enabled",
  },
  {
    no: 2,
    employee: "Jane Doe",
    phone: "555-5678",
    email: "jane.doe@example.com",
    address: "456 Elm St, Anytown USA",
    department: "Marketing",
    position: "Marketing Manager",
    portalAccess: "Disabled",
  },
  {
    no: 3,
    employee: "Bob Johnson",
    phone: "555-9876",
    email: "bob.johnson@example.com",
    address: "789 Oak St, Anytown USA",
    department: "IT",
    position: "Software Engineer",
    portalAccess: "Enabled",
  },
  {
    no: 4,
    employee: "Sarah Lee",
    phone: "555-4321",
    email: "sarah.lee@example.com",
    address: "321 Maple St, Anytown USA",
    department: "HR",
    position: "HR Manager",
    portalAccess: "Disabled",
  },
  {
    no: 5,
    employee: "Mike Brown",
    phone: "555-8765",
    email: "mike.brown@example.com",
    address: "654 Pine St, Anytown USA",
    department: "Finance",
    position: "Financial Analyst",
    portalAccess: "Enabled",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
      <table className="Dtable table datatable my-2 no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>No</th>
            <th style={{ width: "25%" }}>Employee</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Department</th>
            <th>Position</th>
            <th>Portal Access</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, i) => (
            <tr key={i}>
              <td>{data.no}</td>
              <td>{data.employee}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>{data.department}</td>
              <td>{data.position}</td>
              <td>{data.portalAccess}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Datatable;
