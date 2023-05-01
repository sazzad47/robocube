import React, { useState, useCallback } from "react";
import {
  Modal,
  ModalHeader,
  Form,
  ModalBody,
  Col,
  Row,
  Card,
} from "reactstrap";

const AddNew = (props) => {
  const { modal, setModal } = props;
  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} centered>
        <form
          method="post"
          className="modal fade show"
          id="modal-add"
          aria-modal="true"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Slideshow
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setModal(false)}
                >
                  <span>×</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>Image</label>
                  <img
                    alt=""
                    src="https://cdn.synorex.link/assets/images/blank/4x3.jpg"
                    className="mb-3 d-block rounded border"
                    style={{ height: "100px" }}
                  />
                  <input name="image" type="file" className="form-control-file" id="exampleFormControlFile1" />
                  <small
                    id="slideshowHelpBlock"
                    className="form-text text-muted"
                  >
                    Image size of 920px x 200px is highly recommended.
                  </small>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  name="add-slideshow"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default AddNew;
