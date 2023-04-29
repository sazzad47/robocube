import React from "react";

const WhatsApp = () => {
  return (
    <React.Fragment>
        <div className="container tab-content py-3">
          <form method="post">
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-info">
                  Remark:
                  <br />
                  %NAME% : Name
                  <br />
                  %MONTH% : Month
                  <br />
                  %LINK% : Payslip PDF Link
                  <br />
                </div>

                <div className="form-group row">
                  <label className="col-form-label col-md-3">WhatsApp</label>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="4"
                      name="send_msg_whatsapp"
                      maxLength="200"
                      onKeyUp="limit_text('send_msg_whatsapp', 'count')"
                    >
                      Hi *%NAME%*, your *%MONTH%* payslip has been generated,
                      click the link to view download/print your payslip: %LINK%
                    </textarea>
                    <span className="form-text text-muted d-block small">
                      Limit <span data-label="count">114</span>/200 characters
                    </span>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-form-label col-md-3">SMS</label>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="4"
                      name="send_msg_sms"
                      maxLength="50"
                      onKeyUp="limit_text('send_msg_sms', 'count2')"
                    ></textarea>
                    <span className="form-text text-muted d-block small">
                      Limit <span data-label="count2">0</span>/50 characters
                    </span>
                  </div>
                </div>

                <div className="form-group text-end">
                  <button className="btn btn-primary" name="save_msg">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </React.Fragment>
  );
};

export default WhatsApp;
