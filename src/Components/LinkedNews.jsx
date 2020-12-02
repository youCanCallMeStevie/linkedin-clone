import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "../Styles/LinkNews.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default class LinkedNews extends Component {
  render() {
    return (
        <ListGroup className="news-group">
          <ListGroup.Item className="news-head">Linkedln News <PriorityHighIcon/> </ListGroup.Item>
          <ListGroup.Item className="news-item" ><FiberManualRecordIcon/> <strong>Is brand loyalty out the window?</strong><p className="text-muted">
              5d ago • 1,445 readers
            </p></ListGroup.Item>
            <ListGroup.Item className="news-item" ><FiberManualRecordIcon/> <strong>Here's who's hiring in the UK</strong><p className="text-muted">
              5d ago • 5,396 readers
            </p></ListGroup.Item>
            <ListGroup.Item className="news-item" ><FiberManualRecordIcon/> <strong>Why chess is booming right now</strong><p className="text-muted">
              1d ago • 4,838 readers
            </p></ListGroup.Item>
            <ListGroup.Item className="news-item" ><FiberManualRecordIcon/> <strong>The biggest merger of 2020?</strong><p className="text-muted">
              17h ago • 12,432 readers
            </p></ListGroup.Item>
            <ListGroup.Item className="text-muted news-footer">Show more <ExpandMoreIcon/></ListGroup.Item>
        </ListGroup>
    );
  }
}
