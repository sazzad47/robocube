import React, { useState } from "react";
import {
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import TableContainer from "../../../Components/Common/TableContainer";
import { useMemo } from "react";
import DeleteModal from "../../../Components/Common/DeleteModal";
import SelectEmployee from "./SelectEmployee";
import { useCallback } from "react";

const tableData = [
  {
    no: 1,
    month: "January 2022",
    status: "Approved",
    total_basis: 5000,
    total_additions: 1000,
    total_gross_pay: 6000,
    total_deductoins: 1200,
    total_net_pay: 4800,
    hrdf_listing: "View Listing",
  },
  {
    no: 2,
    month: "February 2022",
    status: "Rejected",
    total_basis: 5500,
    total_additions: 800,
    total_gross_pay: 6300,
    total_deductoins: 1300,
    total_net_pay: 5000,
    hrdf_listing: "View Listing",
  },
  {
    no: 3,
    month: "March 2022",
    status: "Pending",
    total_basis: 6000,
    total_additions: 1200,
    total_gross_pay: 7200,
    total_deductoins: 1500,
    total_net_pay: 5700,
    hrdf_listing: "View Listing",
  },
  {
    no: 4,
    month: "April 2022",
    status: "Approved",
    total_basis: 5500,
    total_additions: 1000,
    total_gross_pay: 6500,
    total_deductoins: 1400,
    total_net_pay: 5100,
    hrdf_listing: "View Listing",
  },
  {
    no: 5,
    month: "May 2022",
    status: "Approved",
    total_basis: 6000,
    total_additions: 1500,
    total_gross_pay: 7500,
    total_deductoins: 1800,
    total_net_pay: 5700,
    hrdf_listing: "View Listing",
  }
];

const DataTable = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);
  
  const runPayroll = ()=> {
     setModal(true);
  }
  const ActionCell = () => (
    <div className="d-flex justify-content-center">
      <button className="btn link-primary">
      <i className='bx bx-link-external'></i>
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
        Header: "Month",
        accessor: "month",
        filterable: false,
        Cell: (cell) => {
          return (
            <Link to="/payroll">{cell.value}</Link>
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
        Header: "Total Basis (MYR)",
        accessor: "total_basis",
        filterable: false,
      },
      {
        Header: "Total Additions (MYR)",
        accessor: "total_additions",
        filterable: false,
      },
      {
        Header: "Total Gross Pay (MYR)",
        accessor: "total_gross_pay",
        filterable: false,
      },
      {
        Header: "Total Deductoins (MYR)",
        accessor: "total_deductoins",
        filterable: false,
      },
      {
        Header: "Total Net Pay (MYR)",
        accessor: "total_net_pay",
        filterable: false,
      },
      {
        Header: "HRDF Listing",
        accessor: "hrdf_listing",
        filterable: false,
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
      <SelectEmployee modal={modal} setModal={setModal} toggle={toggle} />
      <Card>
        <CardBody>
          <div id="table-search">
            <TableContainer
              columns={columns}
              data={tableData || []}
              isGlobalFilter={true}
              customPageSize={10}
              divClass="table-responsive mb-1"
              tableClass="mb-0 align-middle table-borderless"
              theadClass="table-light text-muted"
              isAddNew={true}
              addNewTitle="Add New"
              addNewFunction={runPayroll}
              SearchPlaceholder="Type a keyword..."
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
