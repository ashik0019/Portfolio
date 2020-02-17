import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg from '../../assets/images/classroom.png'

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Our Courses</h1>
                    <Row>
                        <Col md={12} sm={12} lg={6}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg}  alt="course image"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Design</h5>
                                    <p className="text-justify courseDes">I build native and cross platform mobile app for your business app for your business</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}>
                            <Row >
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg}  alt="course image"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">I build native and cross platform mobile app for your business app for your business</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6}>
                            <Row >
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg}  alt="course image"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">I build native and cross platform mobile app for your business app for your business</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg}  alt="course image"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify courseDes">I build native and cross platform mobile app for your business app for your business</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;