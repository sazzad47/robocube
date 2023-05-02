import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  { date: "2023-05-01", arrival: "09:00 AM", leave: "05:00 PM" },
  { date: "2023-05-02", arrival: "08:30 AM", leave: "04:30 PM" },
  { date: "2023-05-03", arrival: "09:15 AM", leave: "05:15 PM" },
  { date: "2023-05-04", arrival: "09:30 AM", leave: "05:30 PM" },
  { date: "2023-05-05", arrival: "08:45 AM", leave: "04:45 PM" },
  { date: "2023-05-06", arrival: "09:10 AM", leave: "05:10 PM" },
  { date: "2023-05-07", arrival: "09:05 AM", leave: "05:05 PM" },
  { date: "2023-05-08", arrival: "08:55 AM", leave: "04:55 PM" },
  { date: "2023-05-09", arrival: "09:20 AM", leave: "05:20 PM" },
  { date: "2023-05-10", arrival: "08:40 AM", leave: "04:40 PM" },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
      <table className="table-responsive table table-bordered my-2 dataTable no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th className="sorting">Date</th>
            <th className="sorting">Arrival</th>
            <th className="sorting">Leave</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.arrival}</td>
              <td>{item.leave}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Datatable;
