import React from "react";
import { Grid, _ } from "gridjs-react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { Link } from "react-router-dom";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";

const data = [
  { date: "2022-01-01", details: "New Year's Day" },
  { date: "2022-04-15", details: "Tax Day" },
  { date: "2022-05-30", details: "Memorial Day" },
];

const DataTable = () => {
  return (
    <React.Fragment>
      <Card>
        <PreviewCardHeader title="Data" />
        <CardBody>
          <div className="live-preview">
            <div className="table-responsive">
              <Table className="table-borderless align-middle table-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Details</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td className="fw-medium"> {item.date} </td>
                      <td> {item.details} </td>
                      <td>
                        <div className="hstack gap-3 fs-15">
                          <Link to="#" className="link-primary">
                            <i className="bx bxs-cog"></i>
                          </Link>
                          <Link to="#" className="link-danger">
                            <i className="bx bx-trash"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default DataTable;
