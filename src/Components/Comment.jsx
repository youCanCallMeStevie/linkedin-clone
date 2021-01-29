import React, { useEffect, useState } from "react";
import '../Styles/Comment.css'
import {postNewComment} from '../Lib/fetches/comments'

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            postId: ''
        };
        this.handleChange = this.handleChange.bind(this);
        console.log("super props:::::::", props)
      }
    

    handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        const comment = {
            ...this.state, 
            postId: this.props.postId
        }
        await postNewComment(comment);
        await this.setState({text: ''})
      }
    }

    postId = this.props.postId;

    handleChange(event) {
        this.setState({text: event.target.value});
      }
  
    render(){
    return (
        <>
            <div className="wrapper">
                <img src='http://placehold.it/40x40' />
                <input 
                    type='text' 
                    onKeyDown={this.handleKeyDown} 
                    value={this.state.value} 
                    onChange={this.handleChange}/>
            </div>
        </>
    );
    }
  }

export default Comment;