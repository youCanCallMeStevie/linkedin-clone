import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col, Media } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CreateIcon from "@material-ui/icons/Create";
import "../Styles/ExperienceEducation.css";

export default function ExperienceEducation({ toggleModal, experiences }) {
  console.log(experiences)
  return (
    <div className="mt-3">
      <Card className="experience-education-container">
        <Card.Body>
          <Col>
            <Row className="justify-content-between">
              <Col className="d-flex justify-content-start">
                <Card.Title classname="card-title-expereince d-flex justify-content-start">
                  Experience
                </Card.Title>
              </Col>

              <Col className="d-flex justify-content-end">
                <AddIcon onClick={() => toggleModal()} />
              </Col>
            </Row>
          </Col>

          <List>
            {experiences &&
              experiences.map((experience) => (
                <>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <div>
                      <Image
                        src="https://via.placeholder.com/90x90"
                        thumbnail
                        className="experience-education-avatars mr-3"
                      />
                    </div>
                    <Col>
                      <Row className="justify-content-between">
                        <Typography variant="h5">{experience.role}</Typography>
                        <span>
                          <CreateIcon onClick={ ()=>toggleModal(experience)}/>
                        </span>
                      </Row>
                      <Row>
                        <ListItemText
                          primary={experience.company}
                          secondary={`${experience.startDate} - ${experience.endDate}`}
                        />
                      </Row>
                    </Col>
                  </ListItem>
                </>
              ))}
          </List>
        </Card.Body>
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-start"
        />
          Show 3 more expereinces
          <KeyboardArrowDownIcon />
        </ListItem>
        <Divider light />


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
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Container>
          <Form className="text-white mt-5" onSubmit={(e)=>this.handleSubmit(e)}>
            <Form.Group>
            <Form.Text className="text-muted">
            Title *
            </Form.Text>
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
            </Form.Group>
            <Form.Group>
            <Form.Text className="text-muted">
            Employment Type
            </Form.Text>
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
            <Form.Text className="text-muted">
            Company *
            </Form.Text>
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
            </Form.Group>
            <Form.Group>
            <Form.Text className="text-muted">
            Location
            </Form.Text>
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
                <Form.Text className="text-muted" htmlFor="dateTime">
            Start Date
            </Form.Text>
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
                <Form.Text className="text-muted" htmlFor="dateTime">
            End Date
            </Form.Text>
                <Form.Group>
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
            <Form.Text className="text-muted">
            Description
            </Form.Text>
            <Form.Group >
              <Form.Control
                required
                name="description"
                value={this.state.experience.description}
                onChange={e => {
                  this.handleChange(e);
                }}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            {/* <Form.File id="uploadFile">
              <Form.File.Label>Upload</Form.File.Label>
              <Form.File.Input />
            </Form.File> */}
                    
          </Form>
        </Container>
        <Modal.Header>
          <Modal.Title><Button type="submit" variant="primary" >Submit</Button></Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }
}

export default ExperienceModal;