import React from "react";
import { Link } from "react-router-dom";

const Datatable = () => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ width: "7%" }}>No</th>
            <th>Name</th>
            <th>IC No</th>
            <th>Half Day</th>
            <th>Full Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to="/employees/asli">Gorilia </Link>
            </td>
            <td>990819013462</td>
            <td className="text-center align-middle">
              <input
                type="number"
                className="hock_half_day form-control"
                data-user="167783056568"
                step="0.01"
                value=""
              />
            </td>
            <td className="text-center align-middle">
              <input
                type="number"
                className="hock_full_day form-control"
                data-user="167783056568"
                step="0.01"
                value=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
