import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import  withUser from "./withUser";
import "../Styles/Feeds.css";
import { fetchUser, fetchAllUsers, fetchExperiences } from "../utils";
import FeedsProfileCard from "./FeedsProfileCard";
import ProfileDetailsCard from "./ProfileDetailsCard";

class Feeds extends Component {
    state = {
        user: "",
        allUsers:[]
    }
  componentDidMount = () => {
    console.log(this.props);
  };

    componentDidUpdate = (prevProp) => {
        if (prevProp.curretUser !== this.props.curretUser) {
            this.setState({ user: this.props.curretUser });
        }
        if (prevProp.allUsers !== this.props.allUsers) {
              this.setState({ allUsers: this.props.allUsers });
            }

    }
    render() {
      const { user, allUsers } = this.state;
    return (
      <Container className="feeds">
        <Row>
          <Col md={3}>
                    {/* here goes the profile card - Rita - */}
                    <FeedsProfileCard user={user} users={allUsers}/>
          </Col>
          <Col md={5}> {/* here goes all feeds + create new feed - */}</Col>
          <Col md={4}> {/* here goes the small list of recent feeds - */}</Col>
        </Row>
      </Container>
    );
  }
}

export default withUser(Feeds);
