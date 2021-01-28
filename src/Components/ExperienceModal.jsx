import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Modal, Button } from "react-bootstrap";
import { postNewExp, editExp, deleteExp } from "../Lib/fetches/experiences";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import AddIcon from "@material-ui/icons/Add";

const ExperienceModal = ({
  toggleModal,
  showModal,
  userId,
  selectedExprience,
}) => {
  const [state, setState] = useState({
    validated: false,
    setValidated: false,
    experience: {
      area: "",
      company: "",
      description: "",
      endDate: "",
      role: "",
      startDate: "",
    },
    selectedExprience: "",
    image: "",
  });

  useEffect(() => {
    console.log(selectedExprience);
    if (selectedExprience || selectedExprience !== []) {
      delete selectedExprience.__v;
      setState({ experience: selectedExprience });
    }
  }, [selectedExprience]);

  const updateExp = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setState({ validated: true });
    }
  };
  const handleChangeImage = e => {
    console.log(e.target.files[0]);
    setState({ image: e.target.files[0] });
  };
  const handleChange = e => {
    let newExperience = { ...state.experience };
    newExperience[e.target.name] = e.target.value;
    setState({ experience: newExperience });
    console.log(state.experience);
  };

  const handleSubmit = async e => {
    e.preventDefault(e);
    let res = "";
    let message = "There was an error with your submission";
    if (selectedExprience === "") {
      res = await postNewExp(state.experience);
      message = "New Experience created";
    } else {
      res = await editExp(state.experience._id, state.experience);
      message = "Your Experience has been edited";
    }
    alert(message);
    setState({ image: "" });
    toggleModal();
  };
  // if (res) {
  // if (res.ok) {
  //   let exp = await res.json();
  //   let expId = exp._id;
  //   if (state.image !== "") {
  //     let postImage = await postExperienceImage(userId, expId, state.image);

  //     if (postImage == !undefined && postImage.ok)
  //       console.log("all good with image");
  //   }
  // }
  // alert(message);
  // setState({ image: "" });
  // toggleModal();
  // }

  const handleDelete = async () => {
    console.log("clicke");
    try {
      const res = await deleteExp(state.experience._id);
      console.log("deleted");
      if (res.ok) {
        alert("Experience deleted");
        toggleModal("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={toggleModal}
      backdrop="static"
      keyboard={false}
    >
      <Form onSubmit={e => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedExprience !== "" ? "Edit Experience" : "Add Experience"}
          </Modal.Title>
        </Modal.Header>
        <Container className="text-body mt-5">
          <Form.Text className="text-muted">Title *</Form.Text>
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Ex: Retail Sales Manager"
              name="role"
              value={state.experience && state.experience.role}
              onChange={e => {
                handleChange(e);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Text className="text-muted employmentTitle">
            Employment Type
          </Form.Text>
          <Form.Group>
            <Form.Control
              as="select"
              name="EmploymentType"
              EmploymentType="EmploymentType"
              custom
            >
              <option value="0">Full-Time</option>
              <option value="1">Part-Time</option>
              <option value="2">Self Employed</option>
              <option value="3">Freelance</option>
              <option value="4">Contract</option>
              <option value="5">Internship</option>
              <option value="6">Apprenticeship</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Country-specific employment types
            </Form.Text>
          </Form.Group>
          <Form.Text className="text-muted">Company *</Form.Text>
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Ex: Microsoft"
              name="company"
              value={state.experience && state.experience.company}
              onChange={e => {
                handleChange(e);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Text className="text-muted">Location</Form.Text>
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Ex: London, United Kingdom"
              name="area"
              value={state.experience && state.experience.area}
              onChange={e => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="I am currently working in this role"
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Text className="text-muted">Start Date</Form.Text>

              <Form.Group>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={
                    state.experience &&
                    state.experience.startDate &&
                    state.experience.startDate.toString().slice(0, 10)
                  }
                  onChange={e => {
                    handleChange(e);
                  }}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Text className="text-muted">End Date</Form.Text>

              <Form.Group>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={
                    state.experience &&
                    state.experience.endDate &&
                    state.experience.endDate.toString().slice(0, 10)
                  }
                  onChange={e => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Text className="text-muted">Description</Form.Text>
          <Form.Group>
            <Form.Control
              required
              type="text"
              name="description"
              value={state.experience && state.experience.description}
              as="textarea"
              rows={3}
              onChange={e => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Row>
            <AddIcon className="ml-3" style={{ color: "blue" }} />{" "}
            <label for="image-post">
              <PhotoSizeSelectActualOutlinedIcon style={{ color: "grey" }} />{" "}
            </label>
            <input
              id="image-post"
              type="file"
              className="d-none"
              onChange={e => handleChangeImage(e)}
            />
          </Row>
          {/* <Form.File id="uploadFile">
              <Form.File.Label>Upload</Form.File.Label>
              <Form.File.Input />
            </Form.File> */}
        </Container>
        <Modal.Header>
          <div className="w-100 d-flex justify-content-end">
            {selectedExprience !== "" && (
              <Button
                className="mr-3"
                variant="danger"
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            )}
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Modal.Header>
      </Form>
    </Modal>
  );
};

export default ExperienceModal;
