import React, { useEffect } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import $ from "jquery";
import "select2";
import { Link } from "react-router-dom";

const Manually = () => {
  document.title = "Manually Attendance | Robocube HR";

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Manually Attendance" />
          <div className="container-fluid container-wrapper">
            <div className="row">
              <div className="col-md-8 mb-4">
                <table className="table table-smA table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style={{width:"20%"}}>Date / Time</th>
                      <th>Details</th>
                      <th style={{width:"15%"}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center" colSpan="6">
                        No result found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-4 mb-4">
                <form method="get">
                  <div className="alert alert-warning">
                    Please select a employee
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Employee</label>
                    <div className="col-md-9">
                      <select
                        className="form-control select2"
                        name="user"
                        required=""
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="3">
                          -
                        </option>
                        <optgroup label="Employee">
                          <option value="166804835212"> Amirah </option>
                          <option value="167108877793"> Cuttie </option>
                          <option value="167108913646">傑基 Jacky </option>
                          <option value="167763914983"> Lafar </option>
                          <option value="167783056568"> Gorilia </option>
                          <option value="167783091726"> Lilly </option>
                          <option value="167990984395">
                            Imp_student Imp_student{" "}
                          </option>
                          <option value="167991003789"> a kao </option>
                          <option value="167991105435"> ah kau </option>
                        </optgroup>
                      </select>
                    
                      <Link className="btn-link" to="/">
                        <small className="form-text text-mutedA">
                          View employee profile{" "}
                          <i className="fa fa-fw fa-external-link-square-alt"></i>
                        </small>
                      </Link>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Date</label>
                    <div className="col-md-9">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value="2023-05-01"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="offset-md-3 col-md-9">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        name="save"
                      >
                        Search
                      </button>
                    </div>
                  </div>

                  <div className="pt-5"></div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Manually;
