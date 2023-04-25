import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";
import DeleteModal from "../../Components/Common/DeleteModal";
import { useNavigate } from "react-router-dom";

const tableData = [
  {
    serial_no: 1,
    subject: "Vacation Request",
    date: "2022-04-10",
    status: "Approved",
    employee: "John Doe",
    remark: "Approved with conditions",
    total: 5000,
  },
  {
    serial_no: 2,
    subject: "Sick Leave Request",
    date: "2022-05-15",
    status: "Rejected",
    employee: "Jane Smith",
    remark: "Insufficient documentation",
    total: 10000,
  },
  {
    serial_no: 3,
    subject: "Maternity Leave Request",
    date: "2022-06-20",
    status: "Pending",
    employee: "Alice Lee",
    remark: "N/A",
    total: 8000,
  },
  {
    serial_no: 4,
    subject: "Business Trip Request",
    date: "2022-07-25",
    status: "Approved",
    employee: "Bob Chen",
    remark: "Approved without conditions",
    total: 12000,
  },
];

const DataTable = () => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);

  const AddNew = () => {
    navigate("/claims/add");
  };

  const ActionCell = () => (
    <div className="d-flex justify-content-end">
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
        Header: "Date",
        accessor: "date",
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
