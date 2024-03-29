import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    employeeNo: "EMP001",
    name: "John Smith",
    icNo: "123456-01-2345",
    payableAmount: 1000,
    employer: "ABC Company",
  },
  {
    no: 2,
    employeeNo: "EMP002",
    name: "Jane Doe",
    icNo: "123456-02-3456",
    payableAmount: 2000,
    employer: "XYZ Inc.",
  },
  {
    no: 3,
    employeeNo: "EMP003",
    name: "Bob Johnson",
    icNo: "123456-03-4567",
    payableAmount: 1500,
    employer: "ACME Corp.",
  },
  {
    no: 4,
    employeeNo: "EMP004",
    name: "Sarah Lee",
    icNo: "123456-04-5678",
    payableAmount: 2500,
    employer: "123 Holdings",
  },
  {
    no: 5,
    employeeNo: "EMP005",
    name: "Mike Brown",
    icNo: "123456-05-6789",
    payableAmount: 1800,
    employer: "Big Co.",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <table className="table-responsive table datatable my-2" ref={tableRef}>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>No</th>
          <th style={{ width: "20%" }}>Employee No.</th>
          <th style={{ width: "25%" }}>Name</th>
          <th style={{ width: "20%" }}>I/C No.</th>
          <th style={{ width: "15%" }} className="text-right">
            Payable Amount
          </th>
          <th style={{ width: "10%" }} className="text-right">
            Employer
          </th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((data, i) => (
          <tr key={i}>
            <td>{data.no}</td>
            <td>{data.employeeNo}</td>
            <td>{data.name}</td>
            <td>{data.icNo}</td>
            <td className="text-right">{data.payableAmount}</td>
            <td className="text-right">{data.employer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
