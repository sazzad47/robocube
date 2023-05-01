import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";

//Sample Data
const sampleData = [
  {
    no: 1,
    title: "Title 1",
    status: "Active",
    remark: "Lorem ipsum dolor sit amet.",
  },
  {
    no: 2,
    title: "Title 2",
    status: "Inactive",
    remark: "Consectetur adipiscing elit.",
  },
  {
    no: 3,
    title: "Title 3",
    status: "Active",
    remark: "Sed do eiusmod tempor.",
  },
  {
    no: 4,
    title: "Title 4",
    status: "Inactive",
    remark: "Ut enim ad minim veniam.",
  },
  {
    no: 5,
    title: "Title 5",
    status: "Active",
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
    <table className="Dtable datatable table my-2" ref={tableRef}>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>No</th>
          <th style={{ width: "35%" }}>Title</th>
          <th style={{ width: "10%" }}>Status</th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((item) => (
          <tr key={item.no}>
            <td>{item.no}</td>
            <td>{item.title}</td>
            <td>
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={item.status === "Active"}
                />
                <span className="slider round"></span>
              </label>
            </td>
            <td>{item.remark}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
