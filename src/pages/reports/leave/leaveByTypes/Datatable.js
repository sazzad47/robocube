import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    leaveType: "No Leave Type",
    totalLeaveDays: 0,
  },
  {
    no: 2,
    leaveType: "No Leave Type",
    totalLeaveDays: 0,
  },
  {
    no: 3,
    leaveType: "No Leave Type",
    totalLeaveDays: 0,
  },
  {
    no: 4,
    leaveType: "No Leave Type",
    totalLeaveDays: 0,
  },
  {
    no: 5,
    leaveType: "No Leave Type",
    totalLeaveDays: 0,
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
      <table className="table table-bordered my-2 no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th className="sorting">No</th>
            <th className="sorting">Leave Type</th>
            <th className="sorting">Total Leave Day(s)</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr key={i}>
              <td>{item.no}</td>
              <td>{item.leaveType}</td>
              <td>{item.totalLeaveDays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
