import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Modal, Button, Image } from "react-bootstrap";
import {} from "../utils";
import AddIcon from "@material-ui/icons/Add";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NoteIcon from "@material-ui/icons/Note";
import { Divider } from "@material-ui/core";
import { postPost } from "../utils";

export default function PostFeedModal({ toggleModal, showModal }) {
  const [post, setPost] = useState({
    text: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handleChange = (e) => {
    const newPost = { ...post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };

  return (
    <>
      <div>
        <Modal
          show={showModal}
          onHide={toggleModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create a post</Modal.Title>
          </Modal.Header>
          <Container style={{ padding: "8rem" }}>
            <Row>
              <Col md={1}>
                <Image
                  src="https://via.placeholder.com/75x75"
                  roundedCircle
                  className="mr-3"
                />
              </Col>
              <Col md={5}>
                {" "}
                <Button variant="outline-secondary">user?.name ▾ </Button>
              </Col>
              <Col md={3}>
                <Button variant="outline-secondary">Anyone ▾ </Button>
              </Col>
              <Col md={3}></Col>
            </Row>
            <Form className="text-white mt-5" onSubmit={(e) => handleSubmit(e)}>
              <Form.Group>
                <Form.Control
                  required
                  name="text"
                  value={post.text}
                  placeholder="What do you want to talk about?"
                  as="textarea"
                  rows={3}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Row>
                <Col md={3} variant="primary">
                  Add Hastag
                </Col>
                <Col md={3} variant="primary">
                  #programming
                </Col>
                <Col md={3} variant="primary">
                  #computerscience
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    {" "}
                    <AddIcon /> <PhotoSizeSelectActualOutlinedIcon />{" "}
                    <VideoLibraryIcon />
                    <NoteIcon />
                  </Row>
                </Col>
                <Col>
                  <Button type="submit" variant="primary">
                    Post
                  </Button>
                </Col>
              </Row>
            </Form>
            <Divider light />
            <Row>
              <Col md={6}>
                <Button variant="outline-secondary">
                  Celebrate an occasion
                </Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-secondary">
                  Share the you're hiring
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Button variant="outline-secondary">Find an expert</Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-secondary">Create a poll</Button>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Button variant="outline-secondary">Add a profile</Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-secondary">Offer help</Button>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    </>
  );
}
