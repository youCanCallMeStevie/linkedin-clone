import React, { useEffect, useState } from "react";
import '../Styles/Comment.css'
import {postNewComment} from '../Lib/fetches/comments'

class DisplayComment extends React.Component{

    return(){
        render(
            <>
            <div className="wrapper">
                <img src={this.props.img} />
                <p>
                    {this.props.text}
                </p>
            </div>
            </>
        );
    }
    
}
