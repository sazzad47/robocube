import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const PointoAPI = () => {
  document.title = "PointoAPI | Robocube HR";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="PointoAPI" />
          <div className="container-fluid container-wrapper">
            <div className="alert alert-info" role="alert">
              PointoAPI will control your WhatsApp Notify, Email Notify, Upload
              Storage and other features. Launch{" "}
              <a
                href="https://pointoapi.synorexcloud.com/certs?pg=list"
                target="_blank"
                rel="noreferrer"
              >
                PointoAPI{" "}
                <i className="fa fa-fw fa-external-link-square-alt"></i>
              </a>
            </div>

            <div className="alert alert-warning">
              Some charges may be applied due to the usage of this function
            </div>

            <form method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">API Key</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="pointoapi_key"
                          value="08e58384ce723f02870f25698be72e8e"
                          onChange="check_pointoapi(this.value)"
                          onKeyUp="$('.btn-primary').attr('disabled', true)"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-secondary" type="button">
                            Check
                          </button>
                        </div>
                      </div>
                      <span
                        className="small form-text text-muted d-none"
                        id="status-check"
                      >
                        Loading...
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-md-9 offset-md-3">
                      <button
                        type="submit"
                        name="save"
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PointoAPI;
