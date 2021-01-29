import React, { useEffect, useState } from "react";
import '../Styles/Comment.css'
import {postNewComment} from '../Lib/fetches/comments'

class DisplayComment extends React.Component{

    render(){
        return(
            <>
            <div className="wrapper d-flex flex-direction-col">
                <img src='http://placehold.it/40x40' />
                <p style={{'width': '85%'}}>
                    {this.props.text}
                </p>
            </div>
            </>
        );
    }
    
}

export default DisplayComment;

