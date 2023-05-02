import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

//Sample Data
const sampleData = [
  {
    no: 1,
    employee: "John Doe",
    ot: "2 hrs 30 mins",
    otApproved: "2 hrs 0 mins",
  },
  {
    no: 2,
    employee: "Jane Doe",
    ot: "1 hrs 15 mins",
    otApproved: "1 hrs 30 mins",
  },
  {
    no: 3,
    employee: "Bob Smith",
    ot: "3 hrs 0 mins",
    otApproved: "3 hrs 15 mins",
  },
  {
    no: 4,
    employee: "Mary Johnson",
    ot: "0 hrs 45 mins",
    otApproved: "0 hrs 30 mins",
  },
  {
    no: 5,
    employee: "Tom Jones",
    ot: "1 hrs 0 mins",
    otApproved: "1 hrs 0 mins",
  },
];

const Datatable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  // Calculate total values of OT and OT(Approved)
  const totalOT = sampleData.reduce((acc, cur) => {
    const timeArray = cur.ot.split(" ");
    const hours = parseInt(timeArray[0]);
    const mins = parseInt(timeArray[2]);
    return acc + hours * 60 + mins;
  }, 0);
  const totalOTApproved = sampleData.reduce((acc, cur) => {
    const timeArray = cur.otApproved.split(" ");
    const hours = parseInt(timeArray[0]);
    const mins = parseInt(timeArray[2]);
    return acc + hours * 60 + mins;
  }, 0);

  return (
    <React.Fragment>
      <table
        className="table-responsive table table-bordered my-2 table-hover dataTable"
        ref={tableRef}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Employee</th>
            <th>OT</th>
            <th>OT (Approved)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <tr key={i}>
              <td>{item.no}</td>
              <td>{item.employee}</td>
              <td>{item.ot}</td>
              <td>{item.otApproved}</td>
              <td>
                <Link
                  to="/attendance-manually"
                  className="daily_overtime_detail btn btn-sm btn-secondary"
                >
                  <FontAwesomeIcon icon={faList} />
                  <Tooltip
                    className="fs-15"
                    anchorSelect=".daily_overtime_detail"
                    place="top"
                  >
                    Detail
                  </Tooltip>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th></th>
            <th>
              {Math.floor(totalOT / 60)} hrs {totalOT % 60} mins
            </th>
            <th>{Math.floor(totalOTApproved / 60)}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
};

export default Datatable;
