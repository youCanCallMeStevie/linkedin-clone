import React, { useEffect, useState } from "react";
import "../Styles/Comment.css";
import { postNewComment } from "../Lib/fetches/comments";
import {getUserById} from '../Lib/fetches/users'

class DisplayComment extends React.Component {
  
  state = {
    authorImage: "",
  };


  async fetchCommentAuthor(id){
    const author = await getUserById(id);
    this.setState({authorImage: author.image});
    console.log(author);
  };

  componentDidMount = () => {
      const authorId = this.props.image.userId;
      this.fetchCommentAuthor(authorId)
  }

  render() {
    return (
      <>
        <div className="wrapper d-flex flex-direction-col">
          <img src={this.state.authorImage} />
          <p style={{ width: "85%" }}>{this.props.text}</p>
          {console.log("author image::::::::", this.state.authorImage)}
        </div>
      </>
    );
  }
}

export default DisplayComment;
