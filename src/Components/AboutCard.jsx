import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";

import "../Styles/AboutCard.css";

export default function Promoted() {
  return (
    <div className="mt-3">


      <Card className="about-card-container">
        <Card.Body className="mx-2">
<Col>
          <Row className="justify-content-between">
          <Card.Title classname="general-card-title">
About              </Card.Title>
                  <span>
                    <CreateIcon />
                  </span>
                </Row>
                <Row>
                <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
                </Row>
                </Col>
            </Card.Body>
            

      </Card>
    </div>





  );
}
