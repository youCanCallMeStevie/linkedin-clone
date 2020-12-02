import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import  withUser from "./withUser";
import "../Styles/Feeds.css";
import { fetchUser, fetchAllUsers, fetchExperiences } from "../utils";
import FeedsProfileCard from "./FeedsProfileCard";
import ProfileDetailsCard from "./ProfileDetailsCard";
import PostFeedModal from "./PostFeedModal"

class Feeds extends Component {
    state = {
        user: "",
        allUsers:[],
        showModal: false,
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




      //function to toggle the modal
  handleModalToggle = async () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
    render() {
      const { user, allUsers, showModal } = this.state;
    return (
      <Container className="feeds">
        <Row>
          <Col md={3}>
                    {/* here goes the profile card - Rita - */}
                    {user?.name}
                    <FeedsProfileCard user={user} users={allUsers}/>
                    <PostFeedModal toggleModal={this.handleModalToggle}
          showModal={showModal}/>
          </Col>
          <Col md={5}> {/* here goes all feeds + create new feed - */}</Col>
          <Col md={4}> {/* here goes the small list of recent feeds - */}</Col>
        </Row>
      </Container>
    );
  }
}

export default withUser(Feeds);
