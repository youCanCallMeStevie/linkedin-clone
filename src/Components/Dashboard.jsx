import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap'
import '../Styles/dashboard.css'
import BookmarkIcon from '@material-ui/icons/Bookmark';

export default function Dashboard() {
    return (
        <>

            <Card id="dashCard">
                <Card.Body>
                    <h5>Your Dashboard</h5>
                    <p className="text-muted mutedText" id="privText">Private to you</p>
                    <Row>
                        <Col>
                            <Card className="dashCardStats">
                                <Card.Body>
                                    <h2 className="zeroText">0</h2>
                                    <p>Who viewed your profile</p>
                                </Card.Body>
                            </Card >
                        </Col>
                        <Col>
                            <Card className="dashCardStats">
                                <Card.Body>
                                    <h2 className="zeroText">0</h2>
                                    <p>Article views</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="dashCardStats">
                                <Card.Body>
                                    <h2 className="zeroText">0</h2>
                                    <p>Search appearances</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card id="dashCardComponent">
                        <Card.Body >
                            <label>
                                <BookmarkIcon />
                                My items
                                <p className="text-muted mutedText" id="trackText" >Keep track of your jobs, courses and articles</p>
                            </label>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>
    );
}
