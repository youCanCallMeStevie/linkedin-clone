import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import ProfileTopBar from "./ProfileTopBar";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../Styles/connections.css";

class Connections extends Component {
  state = {
    allUsers: [],
  };

  fetchAllUsers = async () => {
    const {
      REACT_APP_PROFILE,
      REACT_APP_TOKEN,
      REACT_APP_PROFILELIST,
    } = process.env;
    console.log(REACT_APP_PROFILE);
    try {
      const res = await fetch(REACT_APP_PROFILELIST, {
        headers: {
          Authorization: "Bearer " + REACT_APP_TOKEN,
        },
      });
      if (res.ok) {
        let users = await res.json();
        this.setState({ allUsers: users });
        console.log(users);
      } else {
        console.log("there is an error");
      }
    } catch (err) {
      console.log("there is an error");
    }
  };
  componentDidMount() {
    this.fetchAllUsers();
    this.handleScroll();
  }
  handleScroll = () => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        let topbar = document.querySelector(".profileTopBar");
        if (currentScrollPos > 350 && currentScrollPos <= maxScroll) {
          topbar.classList.add("d-none");
        } else {
          topbar.classList.add("d-none");
        }
      };
    }
  };
  render() {
    return (
      <Container className="container-conn mb-5">
        <ListGroup className="connections-list mb-5">
          <ListGroup.Item>
            <p className="text-muted results">
              {this.state.allUsers.length} results
            </p>
          </ListGroup.Item>
          {this.state.allUsers.map((user) => (
            <ListGroup.Item className="connections-item">
              <Row className="conn-row d-flex align-items-center">
                <Col md={2} lg={1} className="avatar-col">
                  <Avatar alt={user.image} src={user.image} />
                </Col>
                <Col md={3} lg={3} className="info-col">
                  <Row className="name-col">
                    {user.name} {user.surname}
                  </Row>
                  <Row className="title-col">{user.title}</Row>
                  <Row className="area-col text-muted"> {user.area}</Row>
                </Col>

                <Link
                  to={`/profile/${user.username}`}
                  className="message-btn btn-trasparent-grey text-center"
                >
                  Profile
                </Link>
                <Link />
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <ProfileTopBar />
      </Container>
    );
  }
}

export default Connections;
