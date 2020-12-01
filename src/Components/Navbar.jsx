import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Linkedin from "../Assets/LinkedIn-Logos/linkedin.png";
import "../Assets/navbar.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import  {Avatar}  from '@material-ui/core';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Container>

            <Navbar.Brand href="#home" className="top-sticky logo">

            <img alt="icon" src={Linkedin} className="logo" />
            </Navbar.Brand>
            <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root:"inputRoot",
                input:" inputInput",
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <div className="navbar-item">
                  <Nav.Link href="#home">
                    <HomeOutlinedIcon className="icons" />
                    Home
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#network">
                    <PeopleAltOutlinedIcon className="icons" />
                    My Network
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#jobs">
                    <WorkOutlineOutlinedIcon className="icons" />
                    Jobs
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#messages">
                    <QuestionAnswerOutlinedIcon className="icons" />
                    Messaging
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#notif">
                    <NotificationsNoneOutlinedIcon className="icons" />
                    Notifications
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <NavDropdown title="Me" id="basic-nav-dropdown" className="avatar-dd">
                    <NavDropdown.Item href="#action/3.2">
                      View profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      ACCOUNT
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Settings & Privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Language
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      MANAGE
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Posts & Activity
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Job Posting Account
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Sign out
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#work">
                    <AppsOutlinedIcon className="icons" />
                    Work
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#learning">Linkedin Learning</Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
