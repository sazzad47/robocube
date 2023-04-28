import React from "react";

//Sample Data
const sampleData = [
  {
    no: 1,
    employee: "John Doe",
    leaveType: "Annual Leave 2",
    totalLeaveDays: 5,
    usedLeaveDays: 2,
    leaveBalance: 3,
  },
  {
    no: 2,
    employee: "Jane Smith",
    leaveType: "Sick Leave",
    totalLeaveDays: 10,
    usedLeaveDays: 1,
    leaveBalance: 9,
  },
  {
    no: 3,
    employee: "Bob Johnson",
    leaveType: "Annual Leave",
    totalLeaveDays: 6,
    usedLeaveDays: 3,
    leaveBalance: 3,
  },
  {
    no: 4,
    employee: "Sarah Lee",
    leaveType: "Unpaid Leave",
    totalLeaveDays: 10,
    usedLeaveDays: 2,
    leaveBalance: 8,
  },
  {
    no: 5,
    employee: "Mike Brown",
    leaveType: "Paid Leave",
    totalLeaveDays: 15,
    usedLeaveDays: 10,
    leaveBalance: 5,
  },
];

const Datatable = () => {

  return (
    <div className="container">
      <table className="DTableA table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>No</th>
            <th>Employee</th>
            <th>Leave</th>
            <th>Total</th>
            <th>Used</th>
            <th>Leave</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <tr key={index}>
              <td>{data.no}</td>
              <td>{data.employee}</td>
              <td>{data.leaveType}</td>
              <td>{data.totalLeaveDays}</td>
              <td>{data.usedLeaveDays}</td>
              <td>{data.leaveBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
