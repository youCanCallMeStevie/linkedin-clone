import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  fetchUser,
  fetchAllUsers,
  fetchExperiences,
  toBase64,
  postUserImage,
} from "../utils";
import ProfileDetailsCard from "./ProfileDetailsCard";
import "../Styles/Profile.css";
import AboutCard from "./AboutCard";

import ELearning from "./ELearning";
import PeopleSideCards from "./PeopleSideCards";
import ExperienceEducation from "./ExperienceEducation";
import Promoted from "./Promoted";
import ProfileTopBar from "./ProfileTopBar";
import ExperienceModal from "./ExperienceModal";
import PostFeedModal from "./PostFeedModal";
import Dashboard from "./Dashboard";
import Activitycard from './Activity'

export default class Profile extends Component {
  state = {
    user: {},
    users: [],
    experiences: [],
    showModal: false,
    selectedExprience: "",
  };
  //called when components receive a new prop (for example a new user id)
  componentDidUpdate = async (prevProp, prevState) => {
    if (prevProp.match.params.user != this.props.match.params.user) {
      this.setUpUser();
    }
  };

  //called once when component mounts
  componentDidMount = async () => {
    this.setUpUser();

    console.log(this.state);

    this.handleScroll();
  };

  //function to set up the userand experiences when component load or when routing to new user
  setUpUser = async () => {
    let param = this.props.match.params.user;
    // use later: param = param.split(".");
    try {
      const users = await fetchAllUsers();
      const user =
        param === "me"
          ? await fetchUser()
          : users.find((user) => user.username === param);
      console.log(user);

      const experiences = await fetchExperiences(user._id);
      console.log(experiences);

      this.setState({ user, users, experiences });
    } catch (err) { }
  };

  //function to toggle the modal
  handleModalToggle = async (experience = "") => {
    this.setState({
      showModal: !this.state.showModal,
      selectedExprience: experience,
    });
    if (!this.state.showModal) {
      try {
        const experiences = await fetchExperiences(this.state.user._id);
        this.setState({ experiences });
      } catch (err) {
        console.log(err);
      }
    }
  };

  //function to make the top bar appear when scrolling
  handleScroll = () => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let topbar = document.querySelector(".profileTopBar");
        if (typeof topbar !== "null") {
          if (currentScrollPos > 350 && currentScrollPos <= maxScroll) {
            topbar?.classList.add("d-flex");
            topbar?.classList.remove("d-none");
          } else {
            topbar?.classList.add("d-none");
            topbar?.classList.remove("d-flex");
          }
        }
      };
    }
  };

  handleChangeImage = async (e) => {
    let formData = new FormData();
    formData.append("profile", e.target.files[0]);
    if (formData) {
      let res = await postUserImage(this.state.user._id, formData);
      this.setUpUser();
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
            <ProfileDetailsCard
              user={user}
              users={users}
              handleChangeImage={this.handleChangeImage}
            />

            <AboutCard bio={user.bio} />
            <Dashboard />
            <Activitycard />
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
