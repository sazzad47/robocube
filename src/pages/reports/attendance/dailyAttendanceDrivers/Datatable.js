import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  { date: "2023-05-01", arrival: "09:00 AM" },
  { date: "2023-05-02", arrival: "08:30 AM" },
  { date: "2023-05-03", arrival: "09:15 AM" },
  { date: "2023-05-04", arrival: "09:30 AM" },
  { date: "2023-05-05", arrival: "08:45 AM" },
  { date: "2023-05-06", arrival: "09:10 AM" },
  { date: "2023-05-07", arrival: "09:05 AM" },
  { date: "2023-05-08", arrival: "08:55 AM" },
  { date: "2023-05-09", arrival: "09:20 AM" },
  { date: "2023-05-10", arrival: "08:40 AM" },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable({
      columns: [{ data: "date" }, { data: "arrival" }],
    });
  }, []);

  return (
      <table className="table table-bordered datatable my-2 no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th className="sorting">Date</th>
            <th className="sorting">Arrival</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Datatable;
