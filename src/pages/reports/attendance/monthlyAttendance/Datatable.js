import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const sampleData = [
  {
    date: "2023-04-01",
    total: "8 hrs and 23 mins and 15 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
  {
    date: "2023-04-02",
    total: "7 hrs and 43 mins and 5 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
  {
    date: "2023-04-03",
    total: "9 hrs and 13 mins and 52 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
  {
    date: "2023-04-04",
    total: "8 hrs and 53 mins and 20 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
  {
    date: "2023-04-05",
    total: "8 hrs and 30 mins and 37 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
  {
    date: "2023-04-06",
    total: "7 hrs and 56 mins and 8 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
  {
    date: "2023-04-07",
    total: "8 hrs and 12 mins and 45 sec",
    late: "0 hrs and 0 mins and 0 sec",
    leaveEarly: "0 hrs and 0 mins and 0 sec",
    ot: "0 hrs and 0 mins and 0 sec",
    otApproved: "0 hrs and 0 mins and 0 sec",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  let totalHours = 0;
  let totalLate = 0;
  let totalLeaveEarly = 0;
  let totalOvertime = 0;
  let totalOvertimeApproved = 0;

  for (const entry of sampleData) {
    const totalParts = entry.total.split(" ");
    totalHours += parseFloat(totalParts[0]);
    totalLate += parseFloat(entry.late.split(" ")[0]);
    totalLeaveEarly += parseFloat(entry.leaveEarly.split(" ")[0]);
    totalOvertime += parseFloat(entry.ot.split(" ")[0]);
    totalOvertimeApproved += parseFloat(entry.otApproved.split(" ")[0]);
  }

  return (
    <React.Fragment>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Total Working Day(s)</th>
            <th>Total Attendance Day(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <table
        ref={tableRef}
        className="table-responsive table table-bordered my-2 table-hover dataTable"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead>
          <tr role="row">
            <th
              style={{ width: "20%" }}
              className="sorting_asc"
              rowSpan="1"
              colSpan="1"
            >
              Date
            </th>
            <th className="sorting" rowSpan="1" colSpan="1">
              Total
            </th>
            <th className="sorting" rowSpan="1" colSpan="1">
              Late
            </th>
            <th className="sorting" rowSpan="1" colSpan="1">
              Leave Early
            </th>
            <th className="sorting" rowSpan="1" colSpan="1">
              OT
            </th>
            <th className="sorting" rowSpan="1" colSpan="1">
              OT (Approved)
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr role="row" key={i}>
              <td>
                <Link> {item.date} </Link>
                <div className="w-100 text-end">
                  <span className="recheck link link-primary">
                    <i className="fa fa-fw fa-sync"></i>
                    <Tooltip anchorSelect=".recheck" place="top">
                      Recheck
                    </Tooltip>
                  </span>
                </div>
              </td>
              <td> {item.total} </td>
              <td> {item.late} </td>
              <td> {item.leaveEarly} </td>
              <td> {item.ot} </td>
              <td> {item.otApproved} </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-weight-bold">
            <td rowSpan="1" colSpan="1">
              Total
            </td>
            <td rowSpan="1" colSpan="1">
              {totalHours}
            </td>
            <td rowSpan="1" colSpan="1">
              {totalLate}
            </td>
            <td rowSpan="1" colSpan="1">
              {totalLeaveEarly}
            </td>
            <td rowSpan="1" colSpan="1">
              {totalOvertime}
            </td>
            <td rowSpan="1" colSpan="1">
              {totalOvertimeApproved}
            </td>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
};

export default Datatable;
