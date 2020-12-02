import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Styles/Post.css";
import PublicIcon from "@material-ui/icons/Public";
import AddIcon from "@material-ui/icons/Add";

function Post({ post }) {
    return (
      <Row className="post d-flex flex-column ">
        <Row></Row>
        <Row className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="post__avatar mr-2">
              <img src={post.user.image} />
            </div>
            <div className="post__user">
              <h4>
                {post.user.name} {post.user.surname}
              </h4>
              <span className="post__user-days">
                {post.createdAt} <PublicIcon />
              </span>
            </div>
          </div>

          <div className="post__follow d-flex align-items-center px-2 blue-primary-color font-weight-bold">
            <span>
              <AddIcon /> Follow
            </span>
          </div>
        </Row>
        <Row className="post__text mt-4">{post.text}</Row>
      </Row>
    );
}

export default Post;
