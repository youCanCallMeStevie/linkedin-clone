import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Image, Col } from "react-bootstrap";
import Divider from "@material-ui/core/Divider";
import {} from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import '../Styles/Promoted.css';

export default function Promoted() {
  return (
    <div>
      <Card className="promoted-card-continer">
        <Card.Body >
          <Row>
            <Col className="d-flex justify-content-start">
              <Card.Title classname="card-title" >
                Promoted
              </Card.Title>
            </Col>
            <Col className="d-flex justify-content-end">
              <MoreHorizIcon  />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src="https://via.placeholder.com/80x80" thumbnail className="mb-2 card-images" />
              <Card.Title style={{fontSize: "15px"}}>
                  Promotional Title
              </Card.Title>
              <Card.Text style={{fontSize: "12px"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Col>
            <Divider orientation="vertical" flexItem />
            <Col>
              <Image src="https://via.placeholder.com/80x80" thumbnail className="mb-2 card-images" />
              <Card.Title style={{fontSize: "15px"}}>
                  Promotional Title
              </Card.Title>
              <Card.Text style={{fontSize: "12px"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
