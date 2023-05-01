import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    employee: "John Doe",
    workingDay: 22,
    annualLeave2: 5,
    sickLeave: 3,
    annualLeave: 4,
    unpaidLeave: 2,
    paidLeave: 8,
  },
  {
    no: 2,
    employee: "Jane Smith",
    workingDay: 20,
    annualLeave2: 6,
    sickLeave: 1,
    annualLeave: 3,
    unpaidLeave: 0,
    paidLeave: 10,
  },
  {
    no: 3,
    employee: "Bob Johnson",
    workingDay: 21,
    annualLeave2: 4,
    sickLeave: 2,
    annualLeave: 5,
    unpaidLeave: 1,
    paidLeave: 9,
  },
  {
    no: 4,
    employee: "Sarah Lee",
    workingDay: 23,
    annualLeave2: 7,
    sickLeave: 0,
    annualLeave: 2,
    unpaidLeave: 2,
    paidLeave: 12,
  },
  {
    no: 5,
    employee: "Mike Brown",
    workingDay: 19,
    annualLeave2: 3,
    sickLeave: 4,
    annualLeave: 6,
    unpaidLeave: 0,
    paidLeave: 8,
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
          <th style={{ width: "10%" }} className="sorting">
            No
          </th>
          <th className="sorting">Employee</th>
          <th className="sorting">Working Day</th>
          <th className="sorting">Annual Leave 2</th>
          <th className="sorting">Sick Leave</th>
          <th className="sorting">Annual Leave</th>
          <th className="sorting">Unpaid Leave</th>
          <th className="sorting">Paid Leave</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((item, i) => (
          <tr key={i}>
            <td>{item.no}</td>
            <td>{item.employee}</td>
            <td>{item.workingDay}</td>
            <td>{item.annualLeave2}</td>
            <td>{item.sickLeave}</td>
            <td>{item.annualLeave}</td>
            <td>{item.unpaidLeave}</td>
            <td>{item.paidLeave}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
