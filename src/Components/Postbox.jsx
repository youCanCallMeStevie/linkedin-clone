import React from 'react';
import { Card, Container, Button, Row, Col } from "react-bootstrap"
import PhotoIcon from '@material-ui/icons/Photo';
import AddBoxIcon from '@material-ui/icons/AddBox';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import "../Styles/postbox.css"

export default function Postbox() {
    return (
        <Container>
            <Card id="cardd">
                <Card.Body>
                    <Button id="startPost">
                        <label style={{ marginTop: '5px' }}>
                            <AddBoxIcon />
                              Start a post
                        </label>
                    </Button>
                </Card.Body>
                <Card.Body>
                    <Row style={{ marginTop: '-15px' }}>
                        <Col>
                            <Button className="add-btn">
                                <label>
                                    <PhotoIcon />
                            Photo
                        </label>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="add-btn">
                                <label>
                                    <YouTubeIcon />
                            Video
                        </label>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="add-btn">
                                <label>
                                    <EventIcon />
                            Event
                        </label>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="add-btn">
                                <label>
                                    <FormatAlignLeftIcon />
                            Article
                        </label>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}
