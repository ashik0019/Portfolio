import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphicLogo from '../../assets/images/graphics.c111184b.svg'
import webLogo from '../../assets/images/web.d45e6fbf.svg'
import mobileLogo from '../../assets/images/mobile.b3cc87c3.svg'
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo} alt="web logo"/>
                                <h2 className="serviceTitle">Web Development</h2>
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per
                                    your requirements as we believe, “web is world’s next home”.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                 <img src={mobileLogo} alt="mobile logo"/>
                                <h2 className="serviceTitle">Mobile Development</h2>
                                <p className="serviceDescription">I build native and cross platform mobile app for your
                                    business and instruction as per as your requirements.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicLogo} alt="graphic logo"/>
                                <h2 className="serviceTitle">Graphic Design</h2>
                                <p className="serviceDescription">I design modern user interface and
                                    other graphical components for your business and instiution.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;