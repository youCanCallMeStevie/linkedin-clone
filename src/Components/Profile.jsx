import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { fetchUser, fetchAllUsers, fetchExperiences } from "../utils";
import ProfileDetailsCard from "./ProfileDetailsCard";

import "../Styles/Profile.css";

import ELearning from "./ELearning";
import PeopleSideCards from "./PeopleSideCards";
import ExperienceEducation from "./ExperienceEducation";
import Promoted from "./Promoted";
import ProfileTopBar from "./ProfileTopBar";
import ExperienceModal from "./ExperienceModal";

export default class Profile extends Component {
  state = {
    user: {},
    users: [],
    experiences: [],
    showTopBar: false,
    showModal: false,
    selectedExprience: "",
  };

  componentDidMount = async () => {
    try {
      const user = await fetchUser();
      const experiences = await fetchExperiences(user._id);
      console.log(experiences);
      const users = await fetchAllUsers();

      this.setState({ user, users, experiences });
      console.log(this.state);
    } catch (err) {}
    this.handleScroll();
  };

  

  handleModalToggle = async (experience = "") => {
    this.setState({
      showModal: !this.state.showModal,
      selectedExprience: experience,
    });
    try {
      const experiences = await fetchExperiences(this.state.user._id);
      this.setState({experiences });
    } catch (err) {
      console.log(err)
    }
    
  };
  

  handleScroll = () => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos > 350 && currentScrollPos < maxScroll) {
          this.setState({ showTopBar: true });
        } else {
          this.setState({ showTopBar: false });
        }
      };
    }
  };
  render() {
    const {
      user,
      users,
      showTopBar,
      showModal,
      experiences,
      selectedExprience,
    } = this.state;
    return (
      <Container className="profile">
        <ProfileTopBar show={showTopBar} user={user} />
        <Row>
          <Col md={8}>
            <ProfileDetailsCard user={user} users={users} />
            <ExperienceEducation
              toggleModal={this.handleModalToggle}
              experiences={experiences}
            />
            <ELearning />
          </Col>
          <Col md={4}>
            <PeopleSideCards users={users} />
            <Promoted />
          </Col>
        </Row>
        <ExperienceModal
          toggleModal={this.handleModalToggle}
          showModal={showModal}
          userId={user._id}
          toggleModal={this.handleModalToggle}
          selectedExprience={selectedExprience}
        />
      </Container>
    );
  }
}
