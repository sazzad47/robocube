import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Input } from "reactstrap";

//Sample Data
const sampleData = [
  {
    no: 1,
    title: "Title 1",
    status: "Active",
    city: "New York",
    branchName: "Branch A",
    remark: "Lorem ipsum dolor sit amet.",
  },
  {
    no: 2,
    title: "Title 2",
    status: "Inactive",
    city: "Los Angeles",
    branchName: "Branch B",
    remark: "Consectetur adipiscing elit.",
  },
  {
    no: 3,
    title: "Title 3",
    status: "Active",
    city: "Chicago",
    branchName: "Branch C",
    remark: "Sed do eiusmod tempor.",
  },
  {
    no: 4,
    title: "Title 4",
    status: "Inactive",
    city: "Houston",
    branchName: "Branch D",
    remark: "Ut enim ad minim veniam.",
  },
  {
    no: 5,
    title: "Title 5",
    status: "Active",
    city: "Philadelphia",
    branchName: "Branch E",
    remark: "Quis nostrud exercitation.",
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
      <table className="table table-bordered my-2" ref={tableRef}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>No</th>
            <th style={{ width: "35%" }}>Title</th>
            <th style={{ width: "10%" }}>Status</th>
            <th>City</th>
            <th>Branch Name</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.title}</td>
              <td>
                <div className="form-check form-switch form-switch-md">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={`SwitchCheck${item.no}`}
                    defaultChecked={item.status === "Active"}
                  />
                </div>
              </td>
              <td>{item.city}</td>
              <td>{item.branchName}</td>
              <td>{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
