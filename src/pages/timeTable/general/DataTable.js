import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../../Components/Common/TableContainer";
import { useMemo } from "react";
import DeleteModal from "../../../Components/Common/DeleteModal";

const tableData = [
  { no: 1, title: "Math", status: "Active", remark: "none" },
  { no: 2, title: "Science", status: "Active", remark: "none" },
  { no: 3, title: "History", status: "Inactive", remark: "none" },
  { no: 4, title: "English", status: "Active", remark: "none" },
  { no: 5, title: "Art", status: "Inactive", remark: "none" },
  { no: 6, title: "Music", status: "Active", remark: "none" },
  { no: 7, title: "Physical Education", status: "Active", remark: "none" },
  { no: 8, title: "Computer Science", status: "Inactive", remark: "none" },
  { no: 9, title: "Foreign Language", status: "Active", remark: "none" },
  { no: 10, title: "Social Studies", status: "Active", remark: "none" },
];

const DataTable = () => {
  const [deleteModal, setDeleteModal] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
        filterable: false,
      },
      {
        Header: "Title",
        accessor: "title",
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
                cell.value === "Inactive"
                  ? "badge badge-warning"
                  : "badge badge-success"
              }`}
            >
              {cell.value}
            </span>
          );
        },
      },
      {
        Header: "Remark",
        accessor: "remark",
        filterable: false,
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
      <div>
        <TableContainer
          columns={columns}
          data={tableData || []}
          isGlobalFilter={true}
          customPageSize={10}
          divClass="table-responsive mb-1"
          tableClass="mb-0 align-middle "
          theadClass="custom-table-head table-bordered text-muted"
          SearchPlaceholder="Type a keyword..."
        />
      </div>
    </React.Fragment>
  );
};

export default DataTable;
