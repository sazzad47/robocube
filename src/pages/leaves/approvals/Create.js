import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Row,
  Label,
  FormFeedback,
  Form,
  Input,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const Create = () => {
  document.title = "Create Announcement | Robocube HR";
  const history = useNavigate();

  const [selectedVisibility, setselectedVisibility] = useState(null);

  function handleSelectVisibility(selectedVisibility) {
    setselectedVisibility(selectedVisibility);
  }

  const contentStatus = [
    {
      options: [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    },
  ];

  const contentVisibility = [
    {
      options: [
        { label: "Hidden", value: "Hidden" },
        { label: "Public", value: "Public" },
      ],
    },
  ];

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      title: "",
      content: "",
      visibility: "",
      publishedDate: "",
      status: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter a Title"),
      content: Yup.string().required("Please Enter Your Content"),
      status: Yup.string().required("Please Enter a status"),
    }),
    onSubmit: (values) => {
      const newAnnouncent = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        title: values.title,
        content: values.content,
        visibility: values.visibility,
        publishedDate: new Date(),
        status: values.status,
      };
      console.log(newAnnouncent);
      history("/contents-announcement");
      validation.resetForm();
    },
  });
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Announcement" pageTitle="Announcement" />

        <Row>
          <Col lg={8}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="content-title-input">
                      Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="content-title-input"
                      placeholder="Enter content title"
                      name="name"
                      value={validation.values.name || ""}
                      onBlur={validation.handleBlur}
                      onChange={validation.handleChange}
                      invalid={
                        validation.errors.name && validation.touched.name
                          ? true
                          : false
                      }
                    />
                    {validation.errors.name && validation.touched.name ? (
                      <FormFeedback type="invalid">
                        {validation.errors.name}
                      </FormFeedback>
                    ) : null}
                  </div>
                  <div>
                    <Label> Description</Label>

                    <CKEditor
                      editor={ClassicEditor}
                      
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm">
                  Submit
                </button>
              </div>
            </Form>
          </Col>

          <Col lg={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Publish</h5>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    Status
                  </Label>
                  <Input
                    name="status"
                    type="select"
                    className="form-select"
                    id="choices-publish-status-input"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.status || ""}
                  >
                    {contentStatus.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.options.map((item, key) => (
                          <option value={item.value} key={key}>
                            {item.label}
                          </option>
                        ))}
                      </React.Fragment>
                    ))}
                  </Input>
                  {validation.touched.status && validation.errors.status ? (
                    <FormFeedback type="invalid">
                      {validation.errors.status}
                    </FormFeedback>
                  ) : null}
                </div>

                <div>
                  <Label
                    htmlFor="choices-publish-visibility-input"
                    className="form-label"
                  >
                    Visibility
                  </Label>

                  <Select
                    value={selectedVisibility}
                    onChange={() => {
                      handleSelectVisibility();
                    }}
                    options={contentVisibility}
                    name="choices-publish-visibility-input"
                    classNamePrefix="select2-selection form-select"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Create;
