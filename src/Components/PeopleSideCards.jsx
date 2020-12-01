import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "../Styles/PeopleSideCards.css";

export default function Promoted({ users }) {
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
            {users &&
              users.slice(0, 4).map((user) => (
                <div>
                  <ListItem>
                    <Image
                      src="https://via.placeholder.com/75x75"
                      roundedCircle
                      className="mr-3"
                    />
                    </ListItem>


             <ListItemText
                      primary={`${user.name} ${user.surname}`}
                      secondary={user.title}
                    />
                    <ListItemAvatar>
                       <PersonAddIcon /> 
                       </ListItemAvatar>
          
            <Divider variant="inset" component="li" />
            </div>
           
              ))}

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
  );
}
