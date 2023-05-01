import React from "react";
import { useEffect } from "react";
import { Modal } from "reactstrap";
import $ from "jquery";
import "select2";

export const AddNewModal = (props) => {
  const { modal, setModal } = props;

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <Modal isOpen={modal} id="event-modal" centered size="lg">
      <div
        className="modal fade show"
        id="modal-add"
        aria-modal="true"
        role="dialog"
        style={{ paddingRight: "5px", display: "block" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Claim
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span onClick={() => setModal(false)}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="alert alert-warning mt-2 d-none">
                Please select and enter the required fields!
              </div>

              <form method="post">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="text-danger">Claim Type</label>
                      <select
                        className="form-control select2"
                        name="claim_type"
                        data-required="true"
                        data-select2-id="7"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="9">
                          -
                        </option>
                        <option value="000000000000">Meals </option>
                        <option value="162843765297">Transport</option>
                        <option value="163022003487">Phone Calls</option>
                        <option value="163022019151">Entertainment</option>
                        <option value="163022021111">Office expenses</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="text-danger">Transaction Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date_transaction"
                        data-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <label className="text-danger">Amount ($)</label>
                      <input
                        type="number"
                        className="form-control"
                        name="claim_amount"
                        data-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <div
                        className="d-flex justify-content-between font-weight-bold p-3 rounded"
                        style={{ backgroundColor: "#F2F1F3" }}
                      >
                        <span>Claim Amount</span>
                        <span id="amount">$ 0.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="text-danger">Payment Method</label>
                      <select
                        className="form-control select2"
                        name="payment_method"
                        data-required="true"
                        data-select2-id="10"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="12">
                          -
                        </option>
                        <option value="163014489424">Cash</option>
                        <option value="163021277640">Online Transfer</option>
                        <option value="163021278353">Cheque</option>
                        <option value="167108539897">TNG</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Merchant</label>
                      <input
                        type="text"
                        placeholder="e.g. Starbucks, Uber"
                        className="form-control"
                        name="merchant"
                      />
                    </div>

                    <div className="form-group">
                      <label>Remark</label>
                      <textarea
                        className="form-control"
                        name="remark"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" name="add-new" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
