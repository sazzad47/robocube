import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import 'select2';

const FormComponent = () => {
  
  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid container-wrapper">
        <form method="post" encType="multipart/form-data">
          <div className="row">
            <div className="col-md-6 d-flex flex-column gap-3">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Full Name
                </label>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="fullname_en"
                        placeholder="English"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <input
                        type="text"
                        className="form-control"
                        name="fullname_cn"
                        placeholder="中文 (Optional)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-md-3">Nickname</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="nickname" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-md-3">NRIC</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="nric" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-md-3">Birthday</label>
                <div className="col-md-9">
                  <input type="date" className="form-control" name="birthday" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-md-3">Avatar</label>
                <div className="col-md-9">
                  <img
                    alt=""
                    src="https://cdn.synorex.link/assets/images/blank/4x3.jpg"
                    className="mb-3 rounded-circle border"
                    style={{
                      height: "85px",
                      width: "85px",
                      objectFit: "cover",
                    }}
                  />
                  <input type="file" className="form-control-file" name="image" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-4 mt-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-active"
                  />
                  <label className="form-check-label" htmlFor="checkbox-active">
                    Active
                  </label>
                </div>
              </div>
              <div className="form-group row mb-3 pb-1">
                <label className="col-md-3 col-form-label">Gender</label>
                <div className="col-md-9 d-flex my-auto">
                  <div className="form-check mr-2">
                    <input
                      type="radio"
                      id="radio-gender-male"
                      name="gender"
                      className="form-check-input"
                      value="male"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-gender-male"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="radio-gender-female"
                      name="gender"
                      className="form-check-input"
                      value="female"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-gender-female"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row section-portal">
                <label className="col-form-label col-md-3" id="username-text">
                  Username
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    readOnly=""
                  />
                  <span
                    id="check_username"
                    className="d-none form-text font-weight-bold small text-danger"
                  >
                    Username has been taken
                  </span>
                </div>
              </div>

              <div className="form-group row mt-0 mt-md-3 section-portal">
                <label className="col-form-label col-md-3" id="password-text">
                  Password
                </label>
                <div className="col-md-9">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    readOnly=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-4">
                <div className="form-check mt-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox-portal"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-portal"
                  >
                    Allow app access for this employee
                  </label>
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Phone</label>
                <div className="col-md-9">
                  <input type="tel" className="form-control" name="phone" />
                  <input
                    type="tel"
                    className="form-control mt-2"
                    name="phone2"
                  />
                  <input
                    type="tel"
                    className="form-control mt-2"
                    name="phone3"
                  />
                </div>
              </div>

              <div className="form-group row mt-0 mt-md-3">
                <label className="col-form-label col-md-3">Email</label>
                <div className="col-md-9">
                  <input type="email" className="form-control" name="email" />
                  <input
                    type="email"
                    className="form-control mt-2"
                    name="email2"
                  />
                  <input
                    type="email"
                    className="form-control mt-2"
                    name="email3"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Address</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" name="address" />
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="address2"
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="address3"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row">
            <div className="col-md-6 d-flex flex-column gap-2">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Race</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="race"
                    data-select2-id="1"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="3">
                      -
                    </option>
                    <option value="164335504052">Chinese</option>
                    <option value="164335504687">Malay</option>
                    <option value="164335505148">Indian</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Religion</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="religion"
                    data-select2-id="4"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="6">
                      -
                    </option>
                    <option value="167108506567">Christians</option>
                    <option value="164335514596">Hinduism</option>
                    <option value="164335511428">Islam</option>
                    <option value="164335508963">Buddhism</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Nationality</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="nationality"
                    data-select2-id="7"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="9">
                      -
                    </option>
                    <option value="164335524635">Malaysian</option>
                    <option value="164335525357">Singaporean</option>
                    <option value="164335525771">Taiwanese</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">
                  Marital Status
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="marital_status"
                    data-select2-id="10"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="12">
                      -
                    </option>
                    <option value="164335526518">Single</option>
                    <option value="164335526880">Married</option>
                    <option value="164335530124">Divorced</option>
                    <option value="164335530629">Widowed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column gap-2">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Work Mode</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="work_mode"
                    data-select2-id="13"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="15">
                      -
                    </option>
                    <option value="164335515990">Full-time</option>
                    <option value="164335516234">Part-time</option>
                    <option value="164335517856">Intern</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">
                  Highest Education Level
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="highest_education_level"
                    data-select2-id="16"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="18">
                      -
                    </option>
                    <option value="167763898322">SPM</option>
                    <option value="164335532014">Foundation</option>
                    <option value="164335532316">A Level</option>
                    <option value="164335532922">Diploma</option>
                    <option value="164335533488">Bachelor Degree</option>
                    <option value="164335533852">Master</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row">
            <div className="col-md-6 d-flex flex-column gap-2">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Department</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="department"
                    data-select2-id="19"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="21">
                      -
                    </option>
                    ';
                    <option value="163014487275">Admin</option>
                    <option value="162843764446">Information Technology</option>
                    <option value="163021241574">Human Resource</option>
                    <option value="163021243082">Accounts Department</option>
                    <option value="163021260372">Marketing Department</option>
                    <option value="163021350983">Sales Department</option>{" "}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Position</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="position"
                    data-select2-id="22"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="24">
                      -
                    </option>
                    ';
                    <option value="163021304491">Office Assistant</option>
                    <option value="163021306089">Office Clerk</option>
                    <option value="163021297778">Account Manager</option>
                    <option value="163021318091">Cleaning Staff</option>
                    <option value="163021315082">CEO</option>
                    <option value="163021314252">Staff</option>
                    <option value="163021324214">CMO</option>{" "}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Card ID</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="rfid_cardid"
                    name="rfid_cardid"
                  />
                  <span
                    id="check_cardid"
                    className="d-none form-text font-weight-bold small text-danger"
                  >
                    Card ID has been taken
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Remark</label>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    name="remark"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column gap-2">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Join Date
                </label>
                <div className="col-md-9">
                  <input
                    type="date"
                    className="form-control"
                    name="date_join"
                    required=""
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Confirm Date</label>
                <div className="col-md-9">
                  <input
                    type="date"
                    className="form-control"
                    name="date_confirm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-6">
              <div className="form-group row">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" name="save" className="btn btn-primary">
                    Save
                  </button>
                  <Link
                    to="/employees/list"
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
    </React.Fragment>
  );
};

export default FormComponent;
