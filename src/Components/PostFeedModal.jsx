import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Modal,
  Button,
  Image,
} from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NoteIcon from "@material-ui/icons/Note";
import { Divider } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import { postPost, editPost, deletePost } from "../utils";

export default function PostFeedModal({
  toggleModal,
  showModal,
  selectedPost,
  user,
}) {
  const [post, setPost] = useState({
    text: "",
  });

  useEffect(() => {
    console.log(selectedPost);
    setPost(selectedPost);
  }, [selectedPost]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("submit");
    let res = "";
    if (selectedPost == "") {
      res = await postPost(post);
      alert("post successfully posted");

      toggleModal("");
    } else {
      console.log(post._id);
      res = await editPost(post._id, post);
      alert("post successfully edited");

      toggleModal("");
    }
  };
  const handleChange = e => {
    const newPost = { ...post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };

  const handleDeletePost = async () => {
    const res = await deletePost(post._id);
    alert("Post Successfully Deleted");
    toggleModal("");
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPost == "" ? "Create a post" : "Edit Post"}
          </Modal.Title>
        </Modal.Header>

        <Container style={{ padding: "1rem" }}>
        <div className="triangle-up"></div>

          <Row>
            <Col md={3}>
              <Image src={user?.image} roundedCircle className="user-avatar" />
            </Col>
            <Col md={4} className="mt-4">
              {" "}
              <Button
                variant="outline-secondary"
                className="rounded-pill"
                style={{ width: "180px", fontSize: "12px" }}
              >
                <PersonIcon />
                {user.name}
                {user.surname} ▾{" "}
              </Button>
            </Col>
            <Col md={2} className="ml-4 mt-4">
              <Button
                variant="outline-secondary"
                className="rounded-pill"
                style={{ width: "125px", fontSize: "12px" }}
              >
                <PublicIcon /> Anyone ▾{" "}
              </Button>
            </Col>
            <Col md={3}></Col>
          </Row>

          <Form className="text-white mt-5" onSubmit={e => handleSubmit(e)}>
            <Form.Group>
              <Form.Control
                required
                name="text"
                value={post.text}
                placeholder="What do you want to talk about?"
                as="textarea"
                rows={5}
                onChange={e => handleChange(e)}
              />
            </Form.Group>

            <Row className="d-flex justify-content-start">
              <Col md={3} style={{ color: "rgb(12, 102, 194)", fontSize: "12px" }}>
                Add Hastag
              </Col>
              <Col md={3} style={{ color: "rgb(12, 102, 194)", fontSize: "12px" }}>
                #programming
              </Col>
              <Col md={3} style={{ color: "rgb(12, 102, 194)", fontSize: "12px" }}>
                #computerscience
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row>
              <Col>
                <Row
                  md={4}
                  className="d-flex d-flex justify-content-between mt-5"
                >
                  {" "}
                  <AddIcon style={{ color: "blue" }} />{" "}
                  <PhotoSizeSelectActualOutlinedIcon
                    style={{ color: "grey" }}
                  />{" "}
                  <VideoLibraryIcon style={{ color: "grey" }} />
                  <NoteIcon style={{ color: "grey" }} />
                </Row>
              </Col>
              <Col>
                <Row md={8} className="d-flex justify-content-end py-3">
                  {selectedPost !== "" && (
                    <Button
                      onClick={() => handleDeletePost()}
                      variant="danger"
                      className="rounded-pill mr-4"
                      style={{ width: "75px", fontSize: "12x" }}
                    >
                      Delete
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    className="rounded-pill mr-4"
                    style={{ width: "75px", fontSize: "12x" }}
                  >
                    {selectedPost == "" ? "Post" : "Edit"}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
          <Divider light />

          <Container className="fluid" style={{padding:"0px"}}>
            <Row style={{backgroundColor:"#eeecec"}}>
              <Col md={6} className="d-flex justify-content-around mt-3">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Celebrate an occasion
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-around mt-3">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Share the you're hiring
                </Button>
              </Col>
            </Row>
            <Row style={{backgroundColor:"#eeecec"}}>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Find an expert
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Create a poll
                </Button>
              </Col>
            </Row>

            <Row style={{backgroundColor:"#eeecec", paddingBottom:"15px"}}>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Add a profile
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Offer help
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Modal>
    </div>
  );
}
