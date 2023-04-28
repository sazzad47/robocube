import React, { useRef, useEffect } from "react";
import $ from "jquery";
import 'datatables.net-bs4';

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
            <th className="sorting">Date</th>
            <th className="sorting">Arrival</th>
            <th className="sorting">Leave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022-05-01</td>
            <td>10:00 AM</td>
            <td>6:00 PM</td>
          </tr>
          <tr>
            <td>2022-05-02</td>
            <td>9:30 AM</td>
            <td>5:30 PM</td>
          </tr>
          <tr>
            <td>2022-05-03</td>
            <td>10:30 AM</td>
            <td>7:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
