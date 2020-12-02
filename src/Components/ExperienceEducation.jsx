import React from "react";
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
        <Divider light />
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-start"
        >
          Show 3 more expereinces
          ▾
        </ListItem>
        </Card>
        </div>
                );
};
