import React from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Container } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

const Create = () => {
  document.title = "Create Announcement | Robocube HR";

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Announcement" />
        <div className="container-fluid container-wrapper">
          <form method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-form-label col-md-3 text-danger">
                    Title
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group mb-4">
                  <div className="custom-control custom-checkbox mt-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-active"
                      name="active"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkbox-active"
                    >
                      Active
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-form-label col-md-3">Content</label>
                  <div className="col-md-9">
                    <CKEditor
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                    />
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
                    <Link
                      to="/content/list/announcement"
                      className="btn btn-link text-muted"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Create;
