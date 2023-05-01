import React, { useRef, useEffect } from "react";
import $ from "jquery";
import 'datatables.net-bs4';

//Sample Data
const sampleData = [
  { no: 1, employee: 'John Doe', arrival: '09:00 AM', leave: '05:00 PM' },
  { no: 2, employee: 'Jane Doe', arrival: '08:30 AM', leave: '05:30 PM' },
  { no: 3, employee: 'Bob Smith', arrival: '09:15 AM', leave: '06:00 PM' },
  { no: 4, employee: 'Alice Johnson', arrival: '09:30 AM', leave: '06:30 PM' },
  { no: 5, employee: 'Tom Williams', arrival: '08:45 AM', leave: '05:45 PM' },
  { no: 6, employee: 'Sara Lee', arrival: '09:10 AM', leave: '06:15 PM' },
  { no: 7, employee: 'David Brown', arrival: '09:05 AM', leave: '05:15 PM' },
  { no: 8, employee: 'Mary Davis', arrival: '08:55 AM', leave: '05:45 PM' },
  { no: 9, employee: 'Mike Wilson', arrival: '09:20 AM', leave: '06:15 PM' },
  { no: 10, employee: 'Karen Lee', arrival: '08:40 AM', leave: '05:30 PM' },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
      <table className="table table-bordered datatable my-2 no-footer" ref={tableRef}>
        <thead>
          <tr>
            <th className="sorting">No</th>
            <th className="sorting">Employee</th>
            <th className="sorting">Arrival</th>
            <th className="sorting">Leave</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i)=> (
            <tr key={i}>
              <td>{item.no}</td>
              <td>{item.employee}</td>
              <td>{item.arrival}</td>
              <td>{item.leave}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Datatable;
