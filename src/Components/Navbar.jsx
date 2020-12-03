import React, { Component } from "react";
import {withRouter,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Linkedin from "../Assets/LinkedIn-Logos/linkedin.png";
import "../Styles/navbar.css";
import {
  Navbar,
  Row,
  Col,  
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import { Avatar } from '@material-ui/core';
import withUser from "./withUser";


function NavBar({currentUser,history }) {
  // state = {
  //   user:{}
  // }
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.currentUser !== this.props.currentUser) {
  //     console.log(this.props)
  //     this.setState({ user: this.props.currentUser })
  //     console.log(this.state.user)
  //   }
  // }


  return (
      <div>
        <Navbar expand="lg" className=" mynavbar">
          <Container>
            <Navbar.Brand href="/feeds" className=" position-sticky logo">
              <img alt="icon" src={Linkedin} className="logo" />
            </Navbar.Brand>
            <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: "inputRoot",
                  input: " inputInput",
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <div className="navbar-item">
                  <Nav.Link href="/feeds">
                    <HomeIcon className="icons" />
                    Home
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#network">
                    <PeopleAltIcon className="icons" />
                    My Network
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#jobs">
                    <WorkIcon className="icons" />
                    Jobs
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#messages">
                    <ChatBubbleIcon className="icons" />
                    Messaging
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#notif">
                    <NotificationsIcon className="icons" />
                    Notifications
                  </Nav.Link>
                </div>
                <div className="navbar-itemMe">
                  <Avatar
                    className="navbar-avatar"
                    alt={currentUser?.image}
                    src={currentUser?.image}
                  />

                  <NavDropdown
                    title="Me"
                    id="basic-nav-dropdown"
                    className="avatar-dd"
                  >
                    <Row>
                      <Col lg={2}>
                        <Avatar
                          className="navbar-avatar"
                          alt={currentUser?.image}
                          src={currentUser?.image}
                        />
                      </Col>
                      <Col lg={10}>
                        <p className="name-title">
                          <strong>
                            {currentUser?.name} {currentUser?.surname}
                          </strong>
                        </p>
                        <p className="name-title">{currentUser.title}</p>
                      </Col>
                    </Row>
                    <button className="button-profile" onClick={()=>history.push('/profile/me')}>View profile</button>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      <p>
                        <strong>Account</strong>
                      </p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Settings & Privacy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Language
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      className="dropdown-item-strong"
                      href="#action/3.4"
                    >
                      <p>
                        <strong>Manage</strong>
                      </p>
                    </NavDropdown.Item>
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
                <div className="navbar-item navbar-item-work ">
                  <Nav.Link href="#work">
                    <AppsOutlinedIcon className="icons" />
                    Work
                  </Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#learning"><MenuBookIcon className="icons"/>Linkedin Learning</Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}

export default withUser(withRouter(NavBar));
