import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceTitle">Quick Connect</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceTitle">Discus Now</h1>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faMapMarker}/> 376/1-C Ahmed Nogor, Mirpur 1, Dhaka 1216, Bangladesh</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> ashiq@pickdora.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> +8801723144515</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;