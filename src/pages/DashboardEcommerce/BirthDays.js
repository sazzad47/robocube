import React from "react";
import {
  Card,
  CardHeader,
} from "reactstrap";
import avatar1 from "../../assets/images/users/avatar-3.jpg";

const Birthdays = () => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">Birthdays</h4>
        </CardHeader>
        <div className="card-body">
          <div className="table-responsive table-card">
            <table className="table table-borderless table-nowrap align-middle mb-0">
              <thead className="table-white text-muted">
                <tr>
                  <th scope="col">Employee</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-flex">
                    <img
                      src={avatar1}
                      alt=""
                      className="avatar-xs rounded-3 me-2"
                    />
                    <div>
                      <h5 className="fs-13 mb-0">Sazzad Hossen</h5>
                      <p className="fs-12 mb-0 text-muted">
                        Software Developer
                      </p>
                    </div>
                  </td>
                  <td>
                    <h6 className="mb-0">1998-03-01</h6>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex">
                    <img
                      src={avatar1}
                      alt=""
                      className="avatar-xs rounded-3 me-2"
                    />
                    <div>
                      <h5 className="fs-13 mb-0">Zamil Borhan</h5>
                      <p className="fs-12 mb-0 text-muted">Data Scientist</p>
                    </div>
                  </td>
                  <td>
                    <h6 className="mb-0"> 1999-04-01 </h6>
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

export default Birthdays;
