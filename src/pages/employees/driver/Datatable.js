import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState([
    {
      name: "Cuttie",
      trips: [
        { area: "HK", rate: 60, meals: 500, subsidy: 100, car: 300 },
        { area: "Singapore", rate: 30, meals: 50, subsidy: 100, car: 300 },
        { area: "Johor Bahru", rate: 15, meals: 50, subsidy: 100, car: 300 },
      ],
    },
  ]);
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ width: "7%" }}>No</th>
            <th style={{ width: "20%" }}>Name</th>
            <th>Area of Trip</th>
            <th>Rate Per Trip</th>
            <th>EPF</th>
            <th>SOSCO</th>
            <th>EIS</th>
            <th>Meals Allowance</th>
            <th>Subsidy</th>
            <th>Car Allowance</th>
            <th>
              Public Holidays <span className="text-danger">(Double Pay)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <React.Fragment key={index}>
              {employee.trips.map((trip, tripIndex) => (
                <tr
                  key={tripIndex}
                  className={tripIndex % 2 === 0 ? "even" : "odd"}
                >
                  {tripIndex === 0 && (
                    <td rowSpan={employee.trips.length}>
                      {index + 1}
                      <br />
                      <Link to="/employees/driver" className="text-secondary">
                        <i className="fa fa-fw fa-cogs"></i>
                      </Link>
                    </td>
                  )}
                  {tripIndex === 0 && (
                    <td rowSpan={employee.trips.length}>
                      <Link to="/employees/driver">
                        <span className="d-block">{employee.name}</span>
                      </Link>
                      <span className="d-block small text-muted">Phone: -</span>
                      <span className="d-block small text-muted">
                        NRIC: 990401015867
                      </span>
                      <span className="d-block small text-muted">
                        Bank Details:
                        <br />
                        Alliance Bank
                        <br />
                        02370360421{" "}
                      </span>
                    </td>
                  )}
                  <td className="align-middle">{trip.area}</td>
                  <td className="align-middle">
                    <input
                      type="number"
                      className="form-control hock_rate"
                      value={trip.rate}
                      onChange={(e) => {
                        const newTrips = [...employee.trips];
                        newTrips[tripIndex].rate = e.target.value;
                        setData([{ ...employee, trips: newTrips }]);
                      }}
                    />
                  </td>
                  <td className="text-center align-middle">
                    <input
                      type="checkbox"
                      className="hock_epf"
                      style={{ height: "16px", width: "16px" }}
                    />
                  </td>
                  <td className="text-center align-middle">
                    <input
                      type="checkbox"
                      className="hock_socso"
                      style={{ height: "16px", width: "16px" }}
                    />
                  </td>
                  <td className="text-center align-middle">
                    <input
                      type="checkbox"
                      className="hock_eis"
                      style={{ height: "16px", width: "16px" }}
                    />
                  </td>
                  <td className="align-middle">
                    <input
                      type="number"
                      className="hock_meal form-control"
                      value={trip.meals}
                      onChange={(e) => {
                        const newTrips = [...employee.trips];
                        newTrips[tripIndex].meals = e.target.value;
                        setData([{ ...employee, trips: newTrips }]);
                      }}
                    />
                  </td>
                  <td className="align-middle">
                    <input
                      type="number"
                      className="hock_meal form-control"
                      value={trip.subsidy}
                      onChange={(e) => {
                        const newTrips = [...employee.trips];
                        newTrips[tripIndex].subsidy = e.target.value;
                        setData([{ ...employee, trips: newTrips }]);
                      }}
                    />
                  </td>
                  <td className="align-middle">
                    <input
                      type="number"
                      className="hock_meal form-control"
                      value={trip.car}
                      onChange={(e) => {
                        const newTrips = [...employee.trips];
                        newTrips[tripIndex].car = e.target.value;
                        setData([{ ...employee, trips: newTrips }]);
                      }}
                    />
                  </td>
                  <td className="text-center align-middle">
                    <input
                      type="checkbox"
                      className="hock_public_holidays"
                      style={{ height: "16px", width: "16px" }}
                    />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
