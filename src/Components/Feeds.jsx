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
import Postbox from "./Postbox";
import LinkedNews from "./LinkedNews";
import AddFeed from "./AddFeed";

class Feeds extends Component {
  state = {
    user: "",
    allUsers: [],
    posts: [],
    showModal: false,
    selectedPost: "",
  };

  componentDidMount = async () => {
    this.fetchAllPosts();
  };
  componentDidUpdate = (prevProp) => {
    if (prevProp.curretUser !== this.props.curretUser) {
      this.setState({ user: this.props.curretUser });
    }
    if (prevProp.allUsers !== this.props.allUsers) {
      this.setState({ allUsers: this.props.allUsers });
    }
  };
  fetchAllPosts = async () => {
    const posts = await fetchPosts();
    this.setState({ posts });
  };

  handleModalToggle = async (selectedPost = "") => {
    this.setState({
      showModal: !this.state.showModal,
      selectedPost,
    });
    if (!this.state.showModal) {
      this.fetchAllPosts();
      this.setState({ selectedPost });
    }
  };

  render() {
    const { user, allUsers, posts, showModal, selectedPost } = this.state;
    return (
      <Container className="feeds">
        <Row>
          <Col md={2}>
            {/* here goes the profile card - Rita - */}
            <FeedsProfileCard user={user} users={allUsers} />
          </Col>
          <Col md={7}>
            {" "}
            {/* here goes all feeds + create new feed - */}
            <Postbox />
            <Button onClick={() => this.handleModalToggle()} />
            {posts
              .sort((a, b) => {
                const c = new Date(a.updatedAt);
                const d = new Date(b.updatedAt);
                return d - c;
              })
              .map((post) => (
                <Post
                  post={post}
                  currentUser={`${user.name} ${user.surname}`}
                  toggleModal={this.handleModalToggle}
                  userId={user._id}
                />
              ))}
          </Col>
          <Col md={3}> 
          <LinkedNews /> 
          <AddFeed />
          </Col>
        </Row>
        <PostFeedModal
          showModal={showModal}
          toggleModal={this.handleModalToggle}
          selectedPost={selectedPost}
        />
      </Container>
    );
  }
}

export default withUser(Feeds);
