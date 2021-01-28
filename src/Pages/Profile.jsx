import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  fetchUser,
  fetchAllUsers,
  fetchExperiences,
  toBase64,
  postUserImage,
} from "../utils";
import ProfileDetailsCard from "../Components/ProfileDetailsCard";
import "../Styles/Profile.css";
import AboutCard from "../Components/AboutCard";
import ELearning from "../Components/ELearning";
import PeopleSideCards from "../Components/PeopleSideCards";
import ExperienceEducation from "../Components/ExperienceEducation";
import Promoted from "../Components/Promoted";
import ProfileTopBar from "../Components/ProfileTopBar";
import ExperienceModal from "../Components/ExperienceModal";
import PostFeedModal from "../Components/PostFeedModal";
import Dashboard from "../Components/Dashboard";
import Activitycard from "../Components/Activity";
import AppContext from "../Context/app-context";
import { getCurrentProfile } from "../Lib/fetches/users";

const Profile = ({ match }) => {
  const [state, setState] = useState({
    user: {},
    users: [],
    experiences: [],
    showModal: false,
    selectedExprience: "",
  });

  const { appState, updateCurrentUser } = useContext(AppContext);
  //called when components receive a new prop (for example a new user id)
  useEffect(() => {
    setUpUser();
  }, [match.params.user]);

  //called once when component mounts
  useEffect(() => {
    setUpUser();
    handleScroll();
    console.log(appState.currentUser.currentUser);
  }, []);

  //function to set up the userand experiences when component load or when routing to new user
  const setUpUser = async () => {
    let param = match.params.user;
    // use later: param = param.split(".");
    try {
      const users = await fetchAllUsers();
      if (param === "me") {
        await updateCurrentUser();
        setState({ ...state, user: appState.currentUser.currentUser });
        console.log("user", appState.currentUser.currentUser)
      } else {
        const user = await getCurrentProfile(param);
        {
          setState({ ...state, user: user.user });
        }
      }
    } catch (err) {
console.log(err);
    }
  };

  //function to toggle the modal
  const handleModalToggle = async (experience = "") => {
    setState({
      showModal: !state.showModal,
      selectedExprience: experience,
    });
    if (!state.showModal) {
      try {
        const experiences = await fetchExperiences(state.user._id);
        setState({ experiences });
      } catch (err) {
        console.log(err);
      }
    }
  };

  //function to make the top bar appear when scrolling
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let topbar = document.querySelector(".profileTopBar");
        if (typeof topbar !== "null") {
          if (currentScrollPos > 350 && currentScrollPos <= maxScroll) {
            topbar?.classList.add("d-lg-flex");
            // topbar?.classList.remove("d-md-none");
          } else {
            // topbar?.classList.add("d-md-none");
            topbar?.classList.remove("d-lg-flex");
          }
        }
      };
    }
  };

  const handleChangeImage = async (e) => {
    let formData = new FormData();
    formData.append("profile", e.target.files[0]);
    if (formData) {
      let res = await postUserImage(state.user._id, formData);
      setUpUser();
    }
  };

  const {
    user,
    users,
    showTopBar,
    showModal,
    experiences,
    selectedExprience,
    education,
    skills,
  } = state;

  return (
    <Container className="profile">
      <ProfileTopBar show={showTopBar} user={user} />
      <Row>
        <Col md={8}>
          <ProfileDetailsCard
            user={user}
            users={users}
            handleChangeImage={handleChangeImage}
          />

          <AboutCard bio={user.bio} />
          <Dashboard />
          <Activitycard />
          <ExperienceEducation
            toggleModal={handleModalToggle}
            experiences={user.experiences}
            education={user.education}
            skills={user.skills}
          />
          <ELearning />
        </Col>
        <Col md={4}>
          <PeopleSideCards users={users} />
          <Promoted />
        </Col>
      </Row>
      <ExperienceModal
        toggleModal={handleModalToggle}
        showModal={showModal}
        userId={user._id}
        toggleModal={handleModalToggle}
        selectedExprience={selectedExprience}
      />
    </Container>
  );
};
export default Profile;
