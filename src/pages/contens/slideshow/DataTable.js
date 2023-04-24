import React from "react";
import { Grid, _ } from "gridjs-react";
import { Card, CardBody, CardHeader } from "reactstrap";

const usersData = [
  {
    date: "2022-04-23",
    name: "John Doe",
    email: "johndoe@example.com",
    position: "Manager",
  },
  {
    date: "2022-04-24",
    name: "Jane Smith",
    email: "janesmith@example.com",
    position: "Developer",
  },
  {
    date: "2022-04-25",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    position: "Designer",
  },
  {
    date: "2022-04-26",
    name: "Alice Lee",
    email: "alicelee@example.com",
    position: "Marketing",
  },
  {
    date: "2022-04-27",
    name: "Mike Brown",
    email: "mikebrown@example.com",
    position: "Manager",
  },
  {
    date: "2022-04-28",
    name: "Sarah Adams",
    email: "sarahadams@example.com",
    position: "Developer",
  },
  {
    date: "2022-04-29",
    name: "Tom Davis",
    email: "tomdavis@example.com",
    position: "Designer",
  },
  {
    date: "2022-04-30",
    name: "Kate Lee",
    email: "katelee@example.com",
    position: "Marketing",
  },
  {
    date: "2022-05-01",
    name: "Jake Smith",
    email: "jakesmith@example.com",
    position: "Developer",
  },
  {
    date: "2022-05-02",
    name: "Emily Taylor",
    email: "emilytaylor@example.com",
    position: "Manager",
  },
];

const DataTable = () => {
  const nameSearch = (cell, searchValue) => {
    return cell.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title mb-0">Search</h4>
        </CardHeader>
        <CardBody>
          <div id="table-search">
            <Grid
              data={usersData}
              columns={[
                {
                  name: "Date",
                  formatter: (cell) =>
                    _(<span className="fw-semibold">{cell}</span>),
                },
                {
                  name: "Name",
                  search: {
                    enabled: true,
                    method: nameSearch,
                  },
                },
                {
                  name: "Email",
                  formatter: (cell) => _(<a href="/#"> {cell} </a>),
                },
                "Position",
                {
                  name: "Action",
                  sort: false,
                  width: "120px",
                  formatter: (cell) =>
                    _(
                      <a
                        href="/#"
                        className="text-reset text-decoration-underline"
                      >
                        {" "}
                        Details{" "}
                      </a>
                    ),
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
