import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="courseFullTitle">React and Laravel fullstack course </h3>
                                    <h5 className="courseSubTitle">Total Lecture=120</h5>
                                    <p className="courseSubTitle">Total Student=79</p>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="courseTopDes">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={6}>
                            <h1 className="serviceTitle">Skill You Get</h1>
                            <ul>
                                <li className="serviceDescription">
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                    Unlimited Dynamic Product Category
                                </li>
                                <li className="serviceDescription">
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                    Admin Can Add, Edit, Delete Product Dynamically
                                </li>
                                <li className="serviceDescription">
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                    Dynamic shipping point facilities
                                </li>
                                <li className="serviceDescription">
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                    Admin can send special offer for special user
                                </li>
                                <li className="serviceDescription">
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                    App force update system form server
                                </li>
                                <li className="serviceDescription">
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                    User can make wiseliest
                                </li>
                            </ul>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col sm={12} lg={6} md={6}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;