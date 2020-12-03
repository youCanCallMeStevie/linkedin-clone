import React, { Component } from "react";
import "../Styles/AddFeed.css";
import { ListGroup, Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../Assets/LinkedIn-Logos/LI-Logo.png"
export default class AddFeed extends Component {
  render() {
    return (
        <>
      <ListGroup className="feed-group">
        <ListGroup.Item className="feed-head">Add to your feed</ListGroup.Item>
        <ListGroup.Item className="feed-item">
          <Avatar alt="#" src="/static/images/avatar/2.jpg" />
          <strong>#motivation</strong>
          <Button className="follow-btn">+ Follow</Button>
        </ListGroup.Item>
        <ListGroup.Item className="feed-item">
          <Avatar
            alt="Microsoft"
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQEko6uLz7XylA/company-logo_200_200/0?e=1614816000&v=beta&t=ZPV9gwfzPQ8fSbUq1aQ26v1KUTNxyuDJuCgOCT74QNY"
          />
          <strong>Microsoft</strong>
          <Button className="follow-btn">+ Follow</Button>
        </ListGroup.Item>
        <ListGroup.Item className="feed-item">
          <Avatar
            alt="CNBC"
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQHsKaIAjV0b0Q/company-logo_200_200/0/1602852073204?e=1614816000&v=beta&t=Jrx7pnSWshPC4Cxm3LYuFsWoO63gLl3Yy0b-zm_ZyBI"
          />
          <strong>CNBC</strong>
          <Button className="follow-btn">+ Follow</Button>
        </ListGroup.Item>
        <ListGroup.Item className="feed-footer">
          View all recommendations
        </ListGroup.Item>
      </ListGroup>
      <p className="copyright"><img src={Logo} alt="copyright"/>Linkedln Corporation © 2020</p>
</>
    );
  }
}
