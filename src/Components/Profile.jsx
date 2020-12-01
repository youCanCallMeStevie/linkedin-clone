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


export default class Profile extends Component {
  state = {
    user: {},
    users: [],
    experiences: [],
    showTopBar:false
  };

  componentDidMount = async () => {
    try {
      const user = await fetchUser();
      
         const users = await fetchAllUsers();
       this.setState({ user, users });
       console.log(this.state);
    } catch (err) {
      
    }
    this.handleScroll()
  
  
  };

  handlePostExperience = () => {
    
  }
  handleScroll = () => {
     if (typeof window !== "undefined") {
       window.onscroll = () => {
         let currentScrollPos = window.pageYOffset;
         let maxScroll = document.body.scrollHeight - window.innerHeight;
         // console.log(maxScroll)
         if (currentScrollPos > 350 && currentScrollPos < maxScroll) {
           this.setState({ showTopBar:true });
         } else {
           this.setState({ showTopBar: false });
         }
       };
     }
  }
  render() {
    const { user, users,showTopBar } = this.state;
    return (
      <Container className="profile">

        <ProfileTopBar show={showTopBar} user={user}/>
          <Row>
            <Col md={8}>
              <ProfileDetailsCard user={user} users={users} />
              <ExperienceEducation />
              <ELearning />
            </Col>
            <Col md={4}>
              <PeopleSideCards users={users} />
              <Promoted />
            </Col>
          </Row>

      </Container>
    );
  }
}
