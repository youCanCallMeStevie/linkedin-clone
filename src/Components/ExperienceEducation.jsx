import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col, Media } from "react-bootstrap";
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
import moment from "moment";

export default function ExperienceEducation({ toggleModal, experiences }) {
  console.log(experiences);
  // const [show, setShow] = useState(false);
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
              experiences.map(experience => (
                <>
                  <Divider variant="inset" component="li" />
                  <ListItem >
                    <div>
                      <Image
                        src={experience.image}
                        thumbnail
                        className="experience-education-avatars mr-3"
                      />
                    </div>
                    <Col >
                      <Row
                        className="justify-content-between edit-info-icon"
                        
                      >
                        <Typography variant="h5">{experience.role}</Typography>
                        <span>
                          
                            <CreateIcon
                              onClick={() => toggleModal(experience)}
                            />
                      
                        </span>
                      </Row>
                      <Row>
                        <ListItemText
                          primary={experience.company}
                          secondary={`${moment(experience.startDate).format(
                            "MM/DD/YYYY"
                          )} - ${moment(experience.endDate).format(
                            "MM/DD/YYYY"
                          )}`}
                        />
                      </Row>
                    </Col>
                  </ListItem>
                </>
              ))}
          </List>
        </Card.Body>
        <Divider light />
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-start"
        >
          Show 3 more expereinces ▾
        </ListItem>
        <Divider light />

        <Card.Body>
          <Col>
            <Row className="justify-content-between">
              <Col className="d-flex justify-content-start">
                <Card.Title classname="card-title-expereince d-flex justify-content-start">
                  Education
                </Card.Title>
              </Col>

              <Col className="d-flex justify-content-end">
                <AddIcon />
              </Col>
            </Row>
          </Col>

          <List>
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
                  <Typography variant="h5">School</Typography>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                  <ListItemText
                    primary="Education Title"
                    secondary="Length of Studies"
                  />
                </Row>
                <Row>
                  <ListItemText secondary="Scholarly Merits" />
                </Row>
              </Col>
            </ListItem>
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
                  <Typography variant="h5">School</Typography>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                  <ListItemText
                    primary="Education Title"
                    secondary="Length of Studies"
                  />
                </Row>
                <Row>
                  <ListItemText secondary="Scholarly Merits" />
                </Row>
              </Col>
            </ListItem>
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
                  <Typography variant="h5">School</Typography>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                  <ListItemText
                    primary="Education Title"
                    secondary="Length of Studies"
                  />
                </Row>
                <Row>
                  <ListItemText secondary="Scholarly Merits" />
                </Row>
              </Col>
            </ListItem>
          </List>
        </Card.Body>
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-start"
        >
          Show 3 more expereinces ▾
        </ListItem>
        <Divider light />

        <Card.Body>
          <Col>
            <Row className="justify-content-between">
              <Col className="d-flex justify-content-start">
                <Card.Title classname="card-title-expereince d-flex justify-content-start">
                  Licenses & Certifications
                </Card.Title>
              </Col>

              <Col className="d-flex justify-content-end">
                <AddIcon />
              </Col>
            </Row>
          </Col>

          <List>
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
                  <Typography variant="h5">Name of Award</Typography>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                  <ListItemText
                    primary="Earned from Where"
                    secondary="Time of Issue"
                  />
                </Row>
              </Col>
            </ListItem>
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
                  <Typography variant="h5">Name of Award</Typography>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                  <ListItemText
                    primary="Earned from Where"
                    secondary="Time of Issue"
                  />
                </Row>
              </Col>
            </ListItem>
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
                  <Typography variant="h5">Name of Award</Typography>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                  <ListItemText
                    primary="Earned from Where"
                    secondary="Time of Issue"
                  />
                </Row>
              </Col>
            </ListItem>
          </List>
        </Card.Body>
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-start"
        >
          Show 3 more expereinces ▾
        </ListItem>
      </Card>
    </div>
  );
}
