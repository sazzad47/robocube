import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Link } from "react-router-dom";

//Sample Data
const sampleData = [
  {
    no: 1,
    title: "Printer A",
    status: "Active",
    type: "Printer",
    lastOnline: "2022-05-01 09:00:00",
  },
  {
    no: 2,
    title: "Scanner B",
    status: "Active",
    type: "Scanner",
    lastOnline: "2022-05-01 10:00:00",
  },
  {
    no: 3,
    title: "Laptop C",
    status: "Inactive",
    type: "Laptop",
    lastOnline: "2022-05-01 11:00:00",
  },
  {
    no: 4,
    title: "Tablet D",
    status: "Active",
    type: "Tablet",
    lastOnline: "2022-05-01 12:00:00",
  },
  {
    no: 5,
    title: "Smartphone E",
    status: "Active",
    type: "Smartphone",
    lastOnline: "2022-05-01 13:00:00",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <table className="Dtable table datatable my-2" ref={tableRef}>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>No</th>
          <th style={{ width: "35%" }}>Title</th>
          <th style={{ width: "10%" }}>Status</th>
          <th>Type</th>
          <th>Last Online</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((item) => (
          <tr key={item.no}>
            <td>{item.no}</td>
            <td>
              <Link>{item.title}</Link>
            </td>
            <td>
              <div
                className={`badge ${
                  item.status === "Active"
                    ? "badge-success"
                    : "badge-warning text-dark"
                }`}
              >
                {item.status}
              </div>
            </td>
            <td>{item.type}</td>
            <td>{item.lastOnline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
