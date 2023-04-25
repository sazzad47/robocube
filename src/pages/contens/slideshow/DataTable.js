import React, { useState } from "react";
import { Grid, _ } from "gridjs-react";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import DeleteModal from "../../../Components/Common/DeleteModal";
import AddNew from "./AddNew";

const tableData = [
  {
    serialNo: 1,
    status: "Active",
    author: "John Doe",
    createdOn: "2022-04-01",
    imageUrl: "https://via.placeholder.com/50x50/0000FF/FFFFFF?text=1",
  },
  {
    serialNo: 2,
    status: "Inactive",
    author: "Jane Smith",
    createdOn: "2022-03-28",
    imageUrl: "https://via.placeholder.com/50x50/FF0000/FFFFFF?text=2",
  },
  {
    serialNo: 3,
    status: "Active",
    author: "Bob Johnson",
    createdOn: "2022-03-23",
    imageUrl: "https://via.placeholder.com/50x50/00FF00/FFFFFF?text=3",
  },
  {
    serialNo: 4,
    status: "Inactive",
    author: "Sarah Lee",
    createdOn: "2022-03-17",
    imageUrl: "https://via.placeholder.com/50x50/FFFF00/000000?text=4",
  },
];

const tableDataWithImage = tableData.map((item) => ({
  ...item,
  image: (
    <img
      src={item.imageUrl}
      alt="Sample"
      className="img-fluid"
    />
  ),
}));


const DataTable = () => {

  const [deleteModal, setDeleteModal] = useState(false);

  const nameSearch = (cell, searchValue) => {
    return cell.toLowerCase().includes(searchValue.toLowerCase());
  };

  const ActionCell = () => (
    <div className="d-flex justify-content-end">
      <button className="btn link-primary me-2">
      <i className='bx bx-sm bx-edit'></i>
      </button>
      <button onClick={()=> setDeleteModal(true)} className="btn link-danger">
      <i className='bx bx-sm bx-trash'></i>
      </button>
    </div>
  );

  return (
    <React.Fragment>
      <Card>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => setDeleteModal(false)}
        onCloseClick={() => setDeleteModal(false)}
      />
        <CardHeader>
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h4 className="card-title mb-0">Slideshow</h4>
            <AddNew/>
          </div>
        </CardHeader>
        <CardBody>
          <div id="table-search">
            <Grid
              data={tableDataWithImage}
              columns={[
                {
                  name: "Serial No",
                  formatter: (cell) =>
                    _(<span className="fw-semibold">{cell}</span>),
                },
                {
                  name: "Image",
                  formatter: (cell) => _(cell),
                },
                {
                  name: "Status",
                  formatter: (cell) => _(
                    <div className="form-check form-switch form-switch-md">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`SwitchCheck${cell}`}
                        defaultChecked={cell === "Active"}
                      />
                    </div>
                  ),
                },
                
                {
                  name: "Author",
                  formatter: (cell) => _(<a href="/#"> {cell} </a>),
                  search: {
                    enabled: true,
                    method: nameSearch,
                  },
                },
                {
                  name: "Created On",
                },
                {
                  name: "Actions",
                  formatter: (cell, row) => _(<ActionCell id={row.serialNo} />),
                },
              ]}
              search={true}
              sort={true}
              pagination={{ enabled: true, limit: 5 }}
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
