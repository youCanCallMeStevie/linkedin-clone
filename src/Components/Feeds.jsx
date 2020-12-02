import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Styles/Feeds.css";
import { fetchUser, fetchAllUsers, fetchExperiences } from "../utils";
import ProfileDetailsCard from "./ProfileDetailsCard";

export default class Feeds extends Component {
  render() {
    return (
      <Container className="feeds">
        <Row>
          <Col md={3}>{/* here goes the profile card - Rita - */}</Col>
          <Col md={5}> {/* here goes all feeds + create new feed - */}</Col>
          <Col md={4}> {/* here goes the small list of recent feeds - */}</Col>
        </Row>
      </Container>
    );
  }
}
