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
    no: 1,
    employee: "John Smith",
    status: "Pending",
    location: "New York",
    start_date: "2023-05-01",
    start_time: "08:00 AM",
    end_date: "2023-05-05",
    end_time: "05:00 PM",
    Remark: "Client Meeting",
  },
  {
    no: 2,
    employee: "Jane Doe",
    status: "Approved",
    location: "Los Angeles",
    start_date: "2023-05-10",
    start_time: "09:00 AM",
    end_date: "2023-05-12",
    end_time: "02:00 PM",
    Remark: "Conference",
  },
  {
    no: 3,
    employee: "Bob Johnson",
    status: "Rejected",
    location: "Chicago",
    start_date: "2023-05-15",
    start_time: "10:00 AM",
    end_date: "2023-05-16",
    end_time: "03:00 PM",
    Remark: "Training",
  },
  {
    no: 4,
    employee: "Alice Lee",
    status: "Pending",
    location: "San Francisco",
    start_date: "2023-05-20",
    start_time: "11:00 AM",
    end_date: "2023-05-22",
    end_time: "04:00 PM",
    Remark: "Sales Visit",
  },
  {
    no: 5,
    employee: "Tom Wilson",
    status: "Approved",
    location: "Seattle",
    start_date: "2023-05-25",
    start_time: "12:00 PM",
    end_date: "2023-05-27",
    end_time: "01:00 PM",
    Remark: "Product Demo",
  },
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
        Header: "No",
        accessor: "no",
        filterable: false,
      },
      {
        Header: "Employee",
        accessor: "employee",
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
        Header: "Location",
        accessor: "location",
        filterable: false,
      },
      {
        Header: "Start Date",
        accessor: "start_date",
        filterable: false,
      },
      {
        Header: "Start Time",
        accessor: "start_time",
        filterable: false,
      },
      {
        Header: "End Date",
        accessor: "end_date",
        filterable: false,
      },
      {
        Header: "End Time",
        accessor: "end_time",
        filterable: false,
      },
      {
        Header: "Remark",
        accessor: "Remark",
        filterable: false,
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
              isAddNew={true}
              SearchPlaceholder="Type a keyword..."
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
