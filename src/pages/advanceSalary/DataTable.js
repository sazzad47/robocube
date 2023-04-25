import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";
import DeleteModal from "../../Components/Common/DeleteModal";

const tableData = [
  {
    "serial_no": 1,
    "subject": "Advance Salary for May 2023",
    "status": "Approved",
    "employee": "John Doe",
    "remark": "Approved by HR",
    "application_date": "2023-04-20",
    "deduction_date": "2023-05-01",
    "total": 1500
  },
  {
    "serial_no": 2,
    "subject": "Advance Salary for June 2023",
    "status": "Rejected",
    "employee": "Jane Smith",
    "remark": "Not eligible for advance",
    "application_date": "2023-05-20",
    "deduction_date": "2023-06-01",
    "total": 0
  },
  {
    "serial_no": 3,
    "subject": "Advance Salary for July 2023",
    "status": "Pending",
    "employee": "Bob Johnson",
    "remark": "Pending approval from HR",
    "application_date": "2023-06-20",
    "deduction_date": "2023-07-01",
    "total": 2000
  },
  // Add more rows as needed
];


const DataTable = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  
  const AddNew = () => {
    navigate("/advance_salary/add");
  };

  const ActionCell = () => (
    <div className="d-flex align-items-center justify-content-end">
      <Link to="#">
        <i className="bx bxs-printer fs-17 lh-1"></i>
      </Link>
      <button onClick={() => setDeleteModal(true)} className="btn link-danger">
        <i className="bx bx-xs bx-trash"></i>
      </button>
    </div>
  );

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "serial_no",
        filterable: false,
      },
      {
        Header: "Subject",
        accessor: "subject",
        filterable: false,
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
                  ? "badge badge-soft-danger"
                  : cell.value === "Pending"
                  ? "badge badge-soft-info"
                  : "badge badge-soft-success"
              }`}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "Employee",
        accessor: "employee",
        filterable: false,
      },
      {
        Header: "Remark",
        accessor: "remark",
        filterable: false,
      },
      {
        Header: "Application Date",
        accessor: "application_date",
        filterable: false,
      },
      {
        Header: "Deduction Date",
        accessor: "deduction_date",
        filterable: false,
      },
      {
        Header: "Total ($)",
        accessor: "total",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cell) => {
          return <ActionCell id={cell.row.original._id} />;
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
              isAddNew={true}
              addNewFunction={AddNew}
              SearchPlaceholder="Type a keyword..."
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
