import React, { Component } from "react";
import { Container, Col,Row } from "react-bootstrap";
import {fetchUser, fetchAllUsers} from '../utils'
import ProfileDetailsCard from "./ProfileDetailsCard";
import '../Styles/Profile.css'

import ELearning from "./ELearning";
import PeopleSideCards from "./PeopleSideCards";
import ExperienceEducation from "./ExperienceEducation";
import Promoted from "./Promoted";

export default class Profile extends Component {
  state = {
    user: {},
    users:{}
  }

  componentDidMount = async () => {
    const user = await fetchUser()
    const users = await fetchAllUsers()
    this.setState({ user, users });
    console.log(this.state)

  }
  render() {
    const {user,users} = this.state
    return (
      <Container className="profile">
        <Row>
          <Col md={8}>
            <ProfileDetailsCard user={user} users={users} />
            <ExperienceEducation />
            <ELearning/>
          </Col>
          <Col md={4}>
          <PeopleSideCards/>
          <Promoted className ="mt-3"/>
          </Col>
        </Row>
      </Container>
    );
  }
}
