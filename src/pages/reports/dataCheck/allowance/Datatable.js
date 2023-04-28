import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    employeeNo: 1,
    name: "John Smith",
    allowance: "Travel",
    description: "Airfare to conference",
    amount: 500,
  },
  {
    employeeNo: 2,
    name: "Jane Doe",
    allowance: "Meals",
    description: "Lunch with client",
    amount: 50,
  },
  {
    employeeNo: 3,
    name: "Bob Johnson",
    allowance: "Entertainment",
    description: "Tickets to show",
    amount: 100,
  },
  {
    employeeNo: 4,
    name: "Sarah Lee",
    allowance: "Travel",
    description: "Hotel for conference",
    amount: 1000,
  },
  {
    employeeNo: 5,
    name: "Mike Brown",
    allowance: "Meals",
    description: "Dinner with team",
    amount: 75,
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <div className="container">
      <table
        className="DTable table table-bordered my-2 dataTable no-footer"
        ref={tableRef}
      >
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="sorting">
              Employee No
            </th>
            <th style={{ width: "40%" }} className="sorting">
              Name
            </th>
            <th className="sorting">Allowance</th>
            <th className="sorting">Description</th>
            <th className="text-right sorting">Amount</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <tr key={index}>
              <td>{data.employeeNo}</td>
              <td>{data.name}</td>
              <td>{data.allowance}</td>
              <td>{data.description}</td>
              <td className="text-right">{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
