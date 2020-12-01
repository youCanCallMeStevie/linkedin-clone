import React from "react";
import { Container, Form, Row, Col, Modal, Button } from "react-bootstrap";
import { postExperiences } from "../utils";

export class ExperienceModal extends React.Component {
  state = {
    validated: false,
    setValidated: false,
    experience: {
area: "London",
company: "Lou Taylor",
description: "jewellery",
endDate: "",
role: "Manager",
startDate: "2019-06-12",
    },
  };

  updateExp = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.setState({ validated: true });
    }
  };

  handleChange = e => {
    let newExperience = { ...this.state.experience };
    newExperience[e.target.name] = e.target.value;
    this.setState({ experience: newExperience });
    console.log(this.state.experience);
  };

  handleSubmit =  async (e) => {
    e.preventDefault(e)
  
  await postExperiences(this.props.userId, this.state.experience)
      console.log("button is working")


  }

  render() {
    const { toggleModal, showModal, userId } = this.props;

    return (
      <Modal
        show={showModal}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Experience</Modal.Title>
        </Modal.Header>
        <Container style={{ padding: "8rem" }}>
          <Form className="text-white mt-5" onSubmit={(e)=>this.handleSubmit(e)}>
            <Form.Group>
              <Form.Label>Title *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ex: Retail Sales Manager"
                name="role"
                value={this.state.experience.role}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Employment Type</Form.Label>
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
            <Form.Group>
              <Form.Label>Company *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ex: Microsoft"
                name="company"
                value={this.state.experience.company}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ex: London, United Kingdom"
                name="area"
                value={this.state.experience.area}

                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group >
              <Form.Check
                type="checkbox"
                label="I am currently working in this role"
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="dateTime">Start Date </Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={this.state.experience.startDate}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label htmlFor="dateTime">End Date </Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={this.state.experience.endDate}

                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group >
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                name="description"
                value={this.state.experience.description}

                as="textarea"
                rows={3}
              />
            </Form.Group>
            {/* <Form.File id="uploadFile">
              <Form.File.Label>Upload</Form.File.Label>
              <Form.File.Input />
            </Form.File> */}
                      <Button type="submit" variant="primary" >Submit</Button>

          </Form>
        </Container>
      </Modal>
    );
  }
}

export default ExperienceModal;
