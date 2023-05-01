import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const Migrate = () => {
  document.title = "Migrate | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Migrate" />
          <div className="container-fluid container-wrapper">
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="nav flex-column nav-pills">
                  <button className="btn text-left nav-link active">
                    Employees
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-1">
                    <form method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-md-3 text-danger">
                          File
                        </label>
                        <div className="col-md-9">
                          <input
                            type="file"
                            name="file"
                            className="form-control-file"
                            id="file"
                            required=""
                            accept=".xls, .xlsx"
                          />
                          <a
                            href="https://robocube.synorexcloud.com/hr/uploads/files/sample-import-employees.xlsx"
                            className="form-text btn-link small text-muted"
                          >
                            <i className="fa fa-fw fa-download"></i> Download
                            sample Excel file
                          </a>
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <div className="col-md-9 offset-md-3">
                          <button
                            type="submit"
                            name="import_employee"
                            className="btn btn-primary"
                          >
                            Import
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Migrate;
