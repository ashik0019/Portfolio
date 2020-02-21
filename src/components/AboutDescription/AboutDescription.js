import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className="serviceTitle">Who I AM</h1>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, optio possimus repellat
                                repellendus sequi soluta tenetur.
                                Aspernatur, autem expedita impedit nihil quidem quos reprehenderit ullam!
                            </p>
                            <h1 className="serviceTitle">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, optio possimus repellat
                                repellendus sequi soluta tenetur.
                                Aspernatur, autem expedita impedit nihil quidem quos reprehenderit ullam!
                            </p>
                            <h1 className="serviceTitle">My Vision</h1>
                            <hr/>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, optio possimus repellat
                                repellendus sequi soluta tenetur.
                                Aspernatur, autem expedita impedit nihil quidem quos reprehenderit ullam!
                            </p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;