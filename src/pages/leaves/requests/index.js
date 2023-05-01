import React, { useEffect } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Calendar from "./Calendar";
import NewRequest from "./NewRequest";
import $ from "jquery";
import "select2";

const Requests = () => {
  document.title = "Request | Robocube HR";

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Request" />
          <div className="container-fluid container-wrapper">
            <div className="row">
              <div className="col-md-9">
                <div className="card mb-4">
                  <div className="card-body font-weight-bold pb-0">Summary</div>
                  <div className="card-body">
                    <div className="row px-5">
                      <div className="col-md p-1 text-center ">
                        <div
                          className="mx-auto mb-3 d-flex flex-column justify-content-center align-items-center rounded-circle text-white mb-3"
                          style={{
                            height: "100px",
                            width: "100px",
                            backgroundColor: "#01BE92",
                          }}
                        >
                          <h5 className="m-0">0</h5>
                          <label className="m-0">total</label>
                        </div>
                        <span>Sick</span>
                      </div>
                      <div className="col-md p-1 text-center ">
                        <div
                          className="mx-auto mb-3 d-flex flex-column justify-content-center align-items-center rounded-circle text-white mb-3"
                          style={{
                            height: "100px",
                            width: "100px",
                            backgroundColor: "#766CFF",
                          }}
                        >
                          <h5 className="m-0">0</h5>
                          <label className="m-0">total</label>
                        </div>
                        <span>Annual</span>
                      </div>
                      <div className="col-md p-1 text-center ">
                        <div
                          className="mx-auto mb-3 d-flex flex-column justify-content-center align-items-center rounded-circle text-white mb-3"
                          style={{
                            height: "100px",
                            width: "100px",
                            backgroundColor: "#5D42F7",
                          }}
                        >
                          <h5 className="m-0">0</h5>
                          <label className="m-0">total</label>
                        </div>
                        <span>Unpaid</span>
                      </div>
                      <div className="col-md p-1 text-center ">
                        <div
                          className="mx-auto mb-3 d-flex flex-column justify-content-center align-items-center rounded-circle text-white mb-3"
                          style={{
                            height: "100px",
                            width: "100px",
                            backgroundColor: "#FF0069",
                          }}
                        >
                          <h5 className="m-0">0</h5>
                          <label className="m-0">total</label>
                        </div>
                        <span>Paid</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body font-weight-bold pb-0">
                    Calendar
                  </div>
                  <div className="card-body">
                    <Calendar />
                  </div>
                </div>
              </div>
              <NewRequest />
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Requests;
