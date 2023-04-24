import React from "react";
import { Grid, _ } from "gridjs-react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const tableData = [
  [1, "The Great Gatsby", "Active", "F. Scott Fitzgerald", "1925-04-10"],
  [2, "To Kill a Mockingbird", "Inactive", "Harper Lee", "1960-07-11"],
  [3, "Pride and Prejudice", "Active", "Jane Austen", "1813-01-28"],
  [4, "1984", "Inactive", "George Orwell", "1949-06-08"],
  [5, "The Catcher in the Rye", "Active", "J.D. Salinger", "1951-07-16"],
  [6, "The Hobbit", "Inactive", "J.R.R. Tolkien", "1937-09-21"],
  [7, "The Lord of the Rings", "Active", "J.R.R. Tolkien", "1954-07-29"],
  [8, "The Hitchhiker's Guide to the Galaxy", "Inactive", "Douglas Adams", "1979-10-12"],
  [9, "The Da Vinci Code", "Active", "Dan Brown", "2003-03-18"],
  [10, "Harry Potter and the Philosopher's Stone", "Inactive", "J.K. Rowling", "1997-06-26"]
];


const DataTable = () => {
  const nameSearch = (cell, searchValue) => {
    return cell.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h4 className="card-title mb-0">Announcements</h4>
            <Link to="/contents-announcement-add">
            <button
              type="button"
              className="btn btn-success add-btn"
              id="create-btn"
            >
              <div className="d-flex align-items-center gap-2">
                <i className="bx bx-plus-circle"></i> <span>Add New</span>
              </div>
            </button>
            </Link>
          </div>
        </CardHeader>
        <CardBody>
          <div id="table-search">
            <Grid
              data={tableData}
              columns={[
                {
                  name: "Serial No",
                  formatter: (cell) =>
                    _(<span className="fw-semibold">{cell}</span>),
                },
                {
                  name: "Title",
                  search: {
                    enabled: true,
                    method: nameSearch,
                  },
                },
                {
                  name: "Status",
                  formatter: (cell) => _(
                    <span className={`${cell.toLowerCase() === 'inactive' ? 'badge badge-soft-danger' : 'badge badge-soft-success'}`}>
                      {cell}
                    </span>
                  ),
                },
                {
                  name: "Author",
                  formatter: (cell) => _(<a href="/#"> {cell} </a>),
                },
                {
                  name: "Created On",
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
