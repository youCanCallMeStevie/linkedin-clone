import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "../Styles/Recommendations.css";

export default function Recommendations({ users }) {
users && users.map(user=>console.log(user))
  return (
    <div>
      <Card className="people-card-container">
        <Card.Body>
          <Row>
            <Col className="d-flex justify-content-start">
              <Card.Title classname="card-title">
                People you may know
              </Card.Title>
            </Col>
          </Row>
          <List>
            
                  <ListItem>
                    <Row>
                    <Col md={2}>
                    <Image
                      src="https://via.placeholder.com/75x75"
                      roundedCircle
                      className="mr-3"
                    />
                    </Col>
                    <Col md={3}>

                    <ListItemText
                      primary="First and Surname"
                      secondary="Current position and where"
                    />
                    </Col>
                    <Col md={7}>

                    <ListItemText
                      primary="First and Surname"
                      secondary="Current position and where"
                    />
                    </Col>
                  </Row>
                  </ListItem>

                  <Divider variant="inset" component="li" />
             
    
          </List>
        </Card.Body>
        <Divider light />
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-center"
        >
          Show More <KeyboardArrowDownIcon />
        </ListItem>
      </Card>
    </div>