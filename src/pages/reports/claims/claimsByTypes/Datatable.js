import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    title: "Lorem ipsum dolor sit amet",
    totalAmount: 500.0,
  },
  {
    no: 2,
    title: "Consectetur adipiscing elit",
    totalAmount: 75.0,
  },
  {
    no: 3,
    title: "Sed do eiusmod tempor incididunt",
    totalAmount: 100.0,
  },
  {
    no: 4,
    title: "Ut enim ad minim veniam",
    totalAmount: 250.0,
  },
  {
    no: 5,
    title: "Duis aute irure dolor in reprehenderit",
    totalAmount: 50.0,
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
      <table className="Dtable table datatable my-2 no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th style={{width: "10%"}} className="sorting">No</th>
            <th style={{width: "70%"}} className="sorting">Title</th>
            <th className="sorting">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr key={i}>
              <td>{item.no}</td>
              <td>{item.title}</td>
              <td>{item.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
