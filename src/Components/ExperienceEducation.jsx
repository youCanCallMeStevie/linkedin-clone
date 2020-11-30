import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col, Media } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import {List, ListItem, ListItemText, Typography, Divider } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CreateIcon from '@material-ui/icons/Create';

import "../Styles/ExperienceEducation.css";

export default function Promoted() {
  return (
    <div>







      <Card className="experience-education-container">
        

        <Card.Body>
        <Col >
          <Row className="justify-content-between">
                <Col className="d-flex justify-content-start">
              <Card.Title
                classname="card-title-expereince d-flex justify-content-start"
              >
                 Experience
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
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">Job Position</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Company Name" secondary="Time at Position" />
              </Row>
              </Col>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <div>
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">Job Position</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Company Name" secondary="Time at Position" />
              </Row>
              </Col>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <div>
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">Job Position</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Company Name" secondary="Time at Position" />
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
          Show 3 more expereinces
 <KeyboardArrowDownIcon/>

        </ListItem>
        <Divider light />




        <Card.Body>
          <Col >
          <Row className="justify-content-between">
                <Col className="d-flex justify-content-start">
              <Card.Title
                classname="card-title-expereince d-flex justify-content-start"
              >
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
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">School</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Education Title" secondary="Length of Studies" />
              </Row>
              <Row>
              <ListItemText secondary="Scholarly Merits" />
              </Row>
              </Col>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <div>
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">School</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Education Title" secondary="Length of Studies" />
              </Row>
              <Row>
              <ListItemText secondary="Scholarly Merits" />
              </Row>
              </Col>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <div>
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">School</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Education Title" secondary="Length of Studies" />
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
          Show 3 more education
 <KeyboardArrowDownIcon/>

        </ListItem>
        <Divider light />





        <Card.Body>
        <Col >
          <Row className="justify-content-between">
                <Col className="d-flex justify-content-start">
              <Card.Title
                classname="card-title-expereince d-flex justify-content-start"
              >
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
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">Name of Award</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Earned from Where" secondary="Time of Issue" />
              </Row>
              </Col>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <div>
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">Name of Award</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Earned from Where" secondary="Time of Issue" />
              </Row>
              </Col>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <div>
                <Image src="https://via.placeholder.com/90x90" thumbnail className="experience-education-avatars mr-3"/>

              </div>
              <Col>
              <Row className="justify-content-between">
              <Typography variant="h5">Name of Award</Typography><span><CreateIcon/></span>
              </Row>
              <Row>
              <ListItemText primary="Earned from Where" secondary="Time of Issue" />
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
          Show more
 <KeyboardArrowDownIcon/>

        </ListItem>



      </Card>





    </div>
  );
}
