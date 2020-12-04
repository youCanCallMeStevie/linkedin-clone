import React, { Component } from "react";
import { Container, Col, Row, Button, Spinner} from "react-bootstrap";
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
import NewPostButton from "./NewPostButton";

class Feeds extends Component {
  state = {
    user: "",
    allUsers: [],
    posts: [],
    showModal: false,
    selectedPost: "",
    loading: true,
    error: false
   
  };

  componentDidMount = async () => {
    this.fetchAllPosts();
    // this.handleScroll()
  };
  componentDidUpdate = (prevProp) => {
    if (prevProp.currentUser !== this.props.currentUser) {
      this.setState({ user: this.props.currentUser });
    }
    if (prevProp.allUsers !== this.props.allUsers) {
      this.setState({ allUsers: this.props.allUsers });
    }
  };
  fetchAllPosts = async () => {
    const posts = await fetchPosts();
    this.setState({ posts });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 750);
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
    const { user, allUsers, posts, showModal, selectedPost, loading } = this.state;
    return (
      <Container className="feeds">
        <Row>
          <Col md={2} className="position-relative">
            <div className="feeds__top-stick">
              {/* here goes the profile card - Rita - */}
              <FeedsProfileCard user={user} users={allUsers} />{" "}
            </div>
          </Col>
          <Col className="feeds__middle-column" md={7}>
            {" "}
            {/* here goes all feeds + create new feed - */}
            <Postbox
              toggleModal={this.handleModalToggle}
              user={user}
              users={allUsers}
            />
            <NewPostButton />


            {loading ? (
       <><Container><Row className="mt-5"></Row><Row className="mt-5"></Row><Row className="mt-5"></Row> <Row className="mt-5"></Row> <Row className="mt-5"><Col md={{ span: 4, offset: 5 }}  >
          <Spinner animation="border" variant="primary" />
          
        </Col></Row> </Container> </> ): (



            posts.sort((a, b) => {

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
                  loading={loading}
                 

                />
              )))
              }
          </Col>
          <Col md={3} className="position-relative">
            <div className="feeds__top-stick">
              <LinkedNews />
              <AddFeed />
            </div>
          </Col>
        </Row>
        <PostFeedModal
          showModal={showModal}
          toggleModal={this.handleModalToggle}
          selectedPost={selectedPost}
          user={user}
          users={allUsers}
        />
      </Container>
    );
  }
}

export default withUser(Feeds);
