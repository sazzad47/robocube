import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { Tooltip } from "react-tooltip";
import Alert from "../../../Components/Common/Alert";

const tableData = [
  {
    serialNo: 1,
    status: "Active",
    author: "John Doe",
    createdOn: "2022-04-01",
    imageUrl:
      "https://cdn2.synorexcloud.com/uploads/806387f2b5daad3b95a32fee6b3d6ab4.jpg",
  },
  {
    serialNo: 2,
    status: "Inactive",
    author: "Jane Smith",
    createdOn: "2022-03-28",
    imageUrl:
      "https://cdn2.synorexcloud.com/uploads/bfb5ee64a72ed95709bb244ece7bfe3a.jpg",
  },
  {
    serialNo: 3,
    status: "Active",
    author: "Bob Johnson",
    createdOn: "2022-03-23",
    imageUrl:
      "https://cdn2.synorexcloud.com/uploads/0ee4c82655bcdab9196185200ef08b3b.jpg",
  },
];

const tableDataWithImage = tableData.map((item) => ({
  ...item,
  image: (
    <img
      alt=""
      src={item.imageUrl}
      className="mr-3 rounded border"
      style={{ width: "100px", objectFit: "cover" }}
    />
  ),
}));

const DataTable = () => {
  const tableRef = useRef();
  
  const [alertUser, setAlertUser] = useState(false); 

  useEffect(() => {
    // initialize DataTables
    $(tableRef.current).DataTable();
  }, []);

  return (
    <React.Fragment>
      <Alert 
       show={alertUser}
       type="warning"
       onConfirm={()=> setAlertUser(false)}
       onCancel={()=> setAlertUser(false)}
       confirmBtnText="Yes"
       cancelBtnText="No"
       message="Are you sure want to delete this slideshow?"
      />
      <div className="col-sm-12">
        <table
          ref={tableRef}
          className="DTable table dataTable no-footer"
          id="DataTables_Table_0"
          role="grid"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead>
            <tr role="row">
              <th
                style={{ width: "10%" }}
                className="sorting_asc"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="No: activate to sort column descending"
              >
                No
              </th>
              <th
                style={{ width: "20%" }}
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Image: activate to sort column ascending"
              >
                Image
              </th>
              <th
                style={{ width: "10%" }}
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Status: activate to sort column ascending"
              >
                Status
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Author: activate to sort column ascending"
              >
                Author
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label="Create On: activate to sort column ascending"
              >
                Create On
              </th>
              <th
                className="sorting"
                tabIndex="0"
                aria-controls="DataTables_Table_0"
                rowSpan="1"
                colSpan="1"
                aria-label=": activate to sort column ascending"
              ></th>
            </tr>
          </thead>
          <tbody>
            {tableDataWithImage.map((item, i) => (
              <tr role="row" key={i}>
                <td className="sorting_1">1</td>
                <td>{item.image}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" data-id="167108777559" />
                    <span className="slider round"></span>
                  </label>
                </td>{" "}
                <td>{item.author}</td>
                <td>{item.createdOn}</td>
                <td>
                  <div
                    className="btn btn-danger btn-sm deleteItem"
                    onClick={() => setAlertUser(true)}
                  >
                    <Tooltip anchorSelect=".deleteItem" place="top">
                      Delete
                    </Tooltip>
                    <i className="fa fa-fw fa-trash py-1"></i>
                  </div>
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default DataTable;
