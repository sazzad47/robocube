import React, { useState } from "react";
import {
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";
import DeleteModal from "../../Components/Common/DeleteModal";

const tableData = [
  {
    employee: "John Doe",
    duration: "2 days",
    type: "Sick Leave",
    days: "2022-03-15 to 2022-03-16",
    reason: "Fever and cold",
    file: "file.pdf",
    status: "Approved",
  },
  {
    employee: "Jane Doe",
    duration: "1 day",
    type: "Casual Leave",
    days: "2022-04-05",
    reason: "Personal",
    file: "",
    status: "Pending",
  },
  {
    employee: "Bob Smith",
    duration: "3 days",
    type: "Paid Leave",
    days: "2022-05-10 to 2022-05-12",
    reason: "Vacation",
    file: "",
    status: "Rejected",
  },

  // Add more data as needed
];

const DataTable = () => {

  const [deleteModal, setDeleteModal] = useState(false);

  const ActionCell = () => (
    <div className="d-flex justify-content-end">
      <button onClick={()=> setDeleteModal(true)} className="btn link-danger">
      <i className='bx bx-xs bx-trash'></i>
      </button>
    </div>
  );

  const columns = useMemo(
    () => [
      {
        Header: "Employee",
        accessor: "employee",
        filterable: false,
      },
      {
        Header: "Duration",
        accessor: "duration",
        filterable: false,
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: false,
      },
      {
        Header: "Days",
        accessor: "days",
        filterable: false,
      },
      {
        Header: "Reason",
        accessor: "reason",
        filterable: false,
      },
      {
        Header: "File",
        accessor: "file",
        filterable: false,
        Cell: () => {
          return (
            <Link to="#">
              <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
            </Link>
          );
        },
      },
      {
        Header: "Status",
        accessor: "status",
        filterable: false,
        Cell: (cell) => {
          return (
            <span
              className={`${
                cell.value === "Rejected"
                  ? "badge badge-soft-danger": cell.value === "Pending"? "badge badge-soft-info"
                  : "badge badge-soft-success"
              }`}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "Action",
        Cell: (cell) => {
          return (
            <ActionCell id={cell.row.original._id} />
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
       <DeleteModal
        show={deleteModal}
        onDeleteClick={() => setDeleteModal(false)}
        onCloseClick={() => setDeleteModal(false)}
      />
      <Card>
        <CardBody>
          <div id="table-search">
            <TableContainer
              columns={columns}
              data={tableData || []}
              isGlobalFilter={true}
              customPageSize={10}
              divClass="table-responsive mb-1"
              tableClass="mb-0 align-middle table-bordered"
              theadClass="table-light text-muted"
              isAddNew={false}
              SearchPlaceholder="Type a keyword..."
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
