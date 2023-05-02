import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    status: "Approved",
    date: "2022-01-01",
    claimID: "ABC123",
    claimType: "Travel",
    paymentMethod: "Direct Deposit",
    createBy: "John Smith",
    amount: 500.0,
  },
  {
    status: "Pending",
    date: "2022-02-01",
    claimID: "DEF456",
    claimType: "Office Supplies",
    paymentMethod: "Check",
    createBy: "Jane Doe",
    amount: 75.0,
  },
  {
    status: "Denied",
    date: "2022-03-01",
    claimID: "GHI789",
    claimType: "Internet",
    paymentMethod: "PayPal",
    createBy: "Bob Johnson",
    amount: 100.0,
  },
  {
    status: "Approved",
    date: "2022-04-01",
    claimID: "JKL012",
    claimType: "Client Entertainment",
    paymentMethod: "Credit Card",
    createBy: "Sarah Lee",
    amount: 250.0,
  },
  {
    status: "Pending",
    date: "2022-05-01",
    claimID: "MNO345",
    claimType: "Miscellaneous",
    paymentMethod: "Direct Deposit",
    createBy: "Mike Brown",
    amount: 50.0,
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
            <th className="sorting">Status</th>
            <th className="sorting">Date</th>
            <th className="sorting">Claim ID</th>
            <th className="sorting">Claim Type</th>
            <th className="sorting">Payment Method</th>
            <th className="sorting">Create By</th>
            <th className="text-right sorting">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr key={i}>
              <td>
                <div className={`badge ${item.status==="Approved"? "badge-success": item.status==="Denied"? "badge-danger" : "badge-info"}`} >{item.status}</div>
                </td>
              <td>{item.date}</td>
              <td>{item.claimID}</td>
              <td>{item.claimType}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.createBy}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Datatable;
