import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    claimNo: "ABC123",
    customer: "John Smith",
    claimAmount: 500.0,
    dateSubmission: "2022-01-01",
  },
  {
    no: 2,
    claimNo: "DEF456",
    customer: "Jane Doe",
    claimAmount: 75.0,
    dateSubmission: "2022-02-01",
  },
  {
    no: 3,
    claimNo: "GHI789",
    customer: "Bob Johnson",
    claimAmount: 100.0,
    dateSubmission: "2022-03-01",
  },
  {
    no: 4,
    claimNo: "JKL012",
    customer: "Sarah Lee",
    claimAmount: 250.0,
    dateSubmission: "2022-04-01",
  },
  {
    no: 5,
    claimNo: "MNO345",
    customer: "Mike Brown",
    claimAmount: 50.0,
    dateSubmission: "2022-05-01",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
      <table className="table-responsive table datatable my-2 no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th>No</th>
            <th>Claim No</th>
            <th>Customer</th>
            <th>Claim Amount ($)</th>
            <th>Date Submission</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data) => (
            <tr key={data.no}>
              <td>{data.no}</td>
              <td>{data.claimNo}</td>
              <td>{data.customer}</td>
              <td>{data.claimAmount.toFixed(2)}</td>
              <td>{data.dateSubmission}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Datatable;
