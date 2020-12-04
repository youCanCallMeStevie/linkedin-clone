import React from "react";
import { Container, Form, Row, Col, Modal, Button } from "react-bootstrap";
import {
  postExperiences,
  editExperience,
  deleteExperience,
  postExperienceImage,
} from "../utils";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import AddIcon from "@material-ui/icons/Add";

export class ExperienceModal extends React.Component {
  state = {
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
  };

  componentDidUpdate = (prevProp) => {
    if (prevProp.selectedExprience !== this.props.selectedExprience) {
      this.setState({ experience: this.props.selectedExprience });
    }
  };

  updateExp = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.setState({ validated: true });
    }
  };
  handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    this.setState({ image: e.target.files[0] });
  };
  handleChange = (e) => {
    let newExperience = { ...this.state.experience };
    newExperience[e.target.name] = e.target.value;
    this.setState({ experience: newExperience });
    console.log(this.state.experience);
  };

  handleSubmit = async (e) => {
    e.preventDefault(e);
    let res = "";
    let message="There was an error with your submission"
    if (this.props.selectedExprience === "") {
      res = await postExperiences(this.props.userId, this.state.experience);
      message="New Experience created"
    } else {
      console.log(this.props.selectedExprience);
      res = await editExperience(
        this.props.userId,
        this.state.experience._id,
        this.state.experience
      );
      message = "Your Experience has been edited";
    }
    if (res !== undefined) {
      if (res.ok) {
        let exp = await res.json();
        let expId = exp._id;
        if (this.state.image !== "") {
          let postImage = await postExperienceImage(
            this.props.userId,
            expId,
            this.state.image
          );

          if (postImage == !undefined && postImage.ok) console.log("all good with image");
        }
      }
      alert(message);
      this.setState({image:""})
      this.props.toggleModal();
    }
  }

  handleDelete = async () => {
    console.log("clicke");
    try {
      const res = await deleteExperience(
        this.props.userId,
        this.state.experience._id
      );
      console.log("deleted");
      if (res.ok) {
        alert("experience deleted");
        this.props.toggleModal("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { toggleModal, showModal, userId, selectedExprience } = this.props;

    return (
      <Modal
        show={showModal}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={(e) => this.handleSubmit(e)}>
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
                value={this.state.experience.role}
                onChange={(e) => {
                  this.handleChange(e);
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
                value={this.state.experience.company}
                onChange={(e) => {
                  this.handleChange(e);
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
                value={this.state.experience.area}
                onChange={(e) => {
                  this.handleChange(e);
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
                      this.state.experience.startDate &&
                      this.state.experience.startDate.toString().slice(0, 10)
                    }
                    onChange={(e) => {
                      this.handleChange(e);
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
                      this.state.experience.endDate &&
                      this.state.experience.endDate.toString().slice(0, 10)
                    }
                    onChange={(e) => {
                      this.handleChange(e);
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
                value={this.state.experience.description}
                as="textarea"
                rows={3}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </Form.Group>
            <Row>
              <AddIcon style={{ color: "blue" }} />{" "}
              <label for="image-post">
                <PhotoSizeSelectActualOutlinedIcon style={{ color: "grey" }} />{" "}
              </label>
              <input
                id="image-post"
                type="file"
                className="d-none"
                onChange={(e) => this.handleChangeImage(e)}
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
                  onClick={() => this.handleDelete()}
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
  }
}

export default ExperienceModal;
