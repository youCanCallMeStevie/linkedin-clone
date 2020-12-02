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
import {} from "../utils";
import AddIcon from "@material-ui/icons/Add";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NoteIcon from "@material-ui/icons/Note";
import { Divider } from "@material-ui/core";
import { postPost } from "../utils";

export default function PostFeedModal({ toggleModal, showModal,selectedPost }) {
  const [post, setPost] = useState({
    text: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await postPost(post);
    if (res.ok) {
      alert("post successfully posted");
      toggleModal("");
    }
  };
  const handleChange = (e) => {
    const newPost = { ...post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };

  return (
    <>

    
    <div>
    <Button variant="primary" onClick={() =>toggleModal()}>
        Launch demo modal
      </Button>
     
       <Modal
        show={showModal}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Container style={{ padding: "1rem" }}>
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
              <Button variant="outline-secondary" className="rounded-pill" style={{width: "75px", fontSize:"12px"}}>
                  {/* {user?.name}  */}
                  User's Name ▾ </Button>
            </Col>
            <Col md={3}>
            <Button variant="outline-secondary" className="rounded-pill" style={{width: "125px", fontSize:"12px"}}>Anyone ▾ </Button>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Form
            className="text-white mt-5"
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Group>
              <Form.Control
                required
                name="text"
                value={post.text}
                placeholder="What do you want to talk about?"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Row>
              <Col md={3} style={{color:"blue"}}>
                Add Hastag
              </Col>
              <Col md={3}  style={{color:"blue"}}>
                #programming
              </Col>
              <Col md={3} style={{color:"blue"}}>
                #computerscience

              </Col>
              <Col md={3}></Col>
            </Row>
            <Row >
              <Col>
                <Row md={4} className= "d-flex d-flex justify-content-between">
                  {" "}
                  <AddIcon style={{color:"blue"}}/> <PhotoSizeSelectActualOutlinedIcon style={{color:"grey"}} />{" "}
                  <VideoLibraryIcon style={{color:"grey"}}  />
                  <NoteIcon style={{color:"grey"}} />
                </Row>
              </Col>
              <Col >
              <Row md={8} className= "d-flex d-flex justify-content-end">

                <Button type="submit" variant="primary" className="rounded-pill mr-4" style={{width: "75px", fontSize:"12x"}} >
                  Post

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


                </Button>
                </Row>
              </Col>
            </Row>

          </Form>
          <Divider light />
          <Row >
            <Col md={6} className="d-flex justify-content-around">
            <Button variant="outline-secondary" className="rounded-pill" style={{width: "175px", fontSize:"12px"}}>Celebrate an occasion</Button>
            </Col>
            <Col md={6} className="d-flex justify-content-around">
            <Button variant="outline-secondary" className="rounded-pill" style={{width: "175px", fontSize:"12px"}}>
                Share the you're hiring
              </Button>
            </Col>
          </Row>
          <Row >
            <Col md={6} className="d-flex justify-content-around">
            <Button variant="outline-secondary" className="rounded-pill" style={{width: "175px", fontSize:"12px"}}>Find an expert</Button>
            </Col>
            <Col md={6} className="d-flex justify-content-around">
              <Button variant="outline-secondary" className="rounded-pill" style={{width: "175px", fontSize:"12px"}}>Create a poll</Button>
            </Col>
          </Row>
          <Row >
            <Col md={6} className="d-flex justify-content-around">
            <Button variant="outline-secondary" className="rounded-pill" style={{width: "175px", fontSize:"12px"}}>Add a profile</Button>
            </Col>
            <Col md={6} className="d-flex justify-content-around">
            <Button variant="outline-secondary" className="rounded-pill" style={{width: "175px", fontSize:"12px"}}>Offer help</Button>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>

    </>
  );
}
