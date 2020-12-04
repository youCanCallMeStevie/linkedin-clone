import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'

export default class Activity extends Component {
    render() {
        return (
            <>
                <div className="mt-3">
                    <Card className="about-card-container">
                        <Card.Body className="mx-2">
                            <Col>
                                <Row className="justify-content-between">
                                    <Card.Title classname="general-card-title">Activity</Card.Title>
                                    <span>

                                    </span>
                                </Row>
                                <Row>
                                    <Card.Text>
                                        Posts you created, shared, or commented on in the last 90 days are displayed here.
                                    </Card.Text>
                                </Row>
                            </Col>

                        </Card.Body>
                        <a href="" ><Card.Footer className="text-center" style={{ color: '#467DCB' }}>See all Activity</Card.Footer></a>
                    </Card>
                </div>
            </>
        )
    }
}
