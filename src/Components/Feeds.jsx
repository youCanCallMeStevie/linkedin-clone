import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import withUser from "./withUser";
import "../Styles/Feeds.css";
import { fetchPosts } from "../utils";
import FeedsProfileCard from "./FeedsProfileCard";
import ProfileDetailsCard from "./ProfileDetailsCard";
import Post from "./Post";
import ExperienceModal from "./ExperienceModal";
import PostFeedModal from "./PostFeedModal";

class Feeds extends Component {
  state = {
    user: "",
    allUsers: [],
    posts: [],
      showModal: false
  };

  componentDidMount = async () => {
    const posts = await fetchPosts();
    this.setState({ posts });
  };
  componentDidUpdate = (prevProp) => {
    if (prevProp.curretUser !== this.props.curretUser) {
      this.setState({ user: this.props.curretUser });
    }
    if (prevProp.allUsers !== this.props.allUsers) {
      this.setState({ allUsers: this.props.allUsers });
    }
  };

  handleModalToggle = async (experience = "") => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { user, allUsers, posts, showModal } = this.state;
    return (
      <Container className="feeds">
        <Row>
          <Col md={2}>
            {/* here goes the profile card - Rita - */}
            <FeedsProfileCard user={user} users={allUsers} />
          </Col>
          <Col md={7} className="mx-3">
            {" "}
            {/* here goes all feeds + create new feed - */}
            <Button onClick={()=>this.handleModalToggle()} />
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </Col>
          <Col md={3}> {/* here goes the small list of recent feeds - */}</Col>
        </Row>
        <PostFeedModal showModal={showModal} toggleModal={this.handleModalToggle} />
      </Container>
    );
  }
}

export default withUser(Feeds);
