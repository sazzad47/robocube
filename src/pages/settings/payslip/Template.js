import React from "react";

const Template = () => {
  return (
    <React.Fragment>
      <div className="tab-content py-3">
        <div className="tab-pane fade show active">
          <div className="container">
            <div className="row">
              <input
                type="hidden"
                name="selected-receipt"
                value="166608014242"
              />
              <div
                className="col-md-4 mb-4"
                name="first-receipt"
                id="selected-receipt-166608014242"
              >
                <div className="card">
                  <img
                    alt=""
                    src="https://cdn.synorex.link/assets/images/blank/4x3.jpg"
                    className="border-bottom card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-text font-weight-bold mb-3">
                      {" "}
                      Advanced
                    </h6>
                    <div className="receipt-group">
                      <label className="btn btn-primary" id="166608014242">
                        <span>Activated</span>
                        <input
                          className="d-none"
                          type="radio"
                          value="166608014242"
                          name="receipt"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4" id="receipt-163092805598">
                <div className="card">
                  <img
                    alt=""
                    src="https://cdn2.synorexcloud.com/uploads/197b0836a0d96df35376796eca8546be.jpg"
                    className="border-bottom card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-text font-weight-bold mb-3">Lite</h6>
                    <div className="receipt-group">
                      <label className="btn btn-secondary" id="163092805598">
                        <span>Active</span>
                        <input
                          className="d-none"
                          type="radio"
                          value="163092805598"
                          name="receipt"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4" id="receipt-164337674172">
                <div className="card">
                  <img
                    alt=""
                    src="https://cdn2.synorexcloud.com/uploads/ff0942b4c171a56b304d04f614689c95.jpg"
                    className="border-bottom card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-text font-weight-bold mb-3">Default</h6>
                    <div className="receipt-group">
                      <label className="btn btn-secondary" id="164337674172">
                        <span>Active</span>
                        <input
                          className="d-none"
                          type="radio"
                          value="164337674172"
                          name="receipt"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-none" id="receipt-166608014242">
                <div className="card">
                  <img
                    alt=""
                    src="https://cdn.synorex.link/assets/images/blank/4x3.jpg"
                    className="border-bottom card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-text font-weight-bold mb-3">
                      {" "}
                      Advanced
                    </h6>
                    <div className="receipt-group">
                      <label className="btn btn-primary" id="166608014242">
                        <span>Activated</span>
                        <input
                          className="d-none"
                          type="radio"
                          value="166608014242"
                          name="receipt"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Template;
