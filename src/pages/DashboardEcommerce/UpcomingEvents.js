import React from "react";
import {
  Card,
  CardHeader
} from "reactstrap";

const BirthDays = () => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">Events</h4>
        </CardHeader>
        <div className="card-body">
          <div className="table-responsive table-card">
            <table className="table table-borderless table-nowrap align-middle mb-0">
              <thead className="table-white text-muted">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-flex align-items-center">
                    <div className="flex-shrink-0 avatar-sm">
                      <span className="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
                        09
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Development planning</h6>
                    </div>
                  </td>
                  <td>
                    <h6 className="mb-0">
                      5 : <span className="text-muted"> 30 pm </span>
                    </h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default BirthDays;
