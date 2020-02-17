import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner summarySection p-0">
                    <div className="summaryBannerOverlay">
                       <Container className="text-center">
                           <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={107}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={99}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Total Clients</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="">
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-justify">How i work</Card.Title>
                                            <Card.Text>
                                               <p className="cardSubTitle text-justify">
                                                   <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                                   Requirement Gathering
                                               </p>
                                               <p className="cardSubTitle text-justify">
                                                   <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                                   System Analysis
                                               </p>
                                               <p className="cardSubTitle text-justify">
                                                   <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                                   Coding Testing
                                               </p>
                                               <p className="cardSubTitle text-justify">
                                                   <FontAwesomeIcon icon={faCheckCircle} className="iconBullet mr-1"/>
                                                   Implementation
                                               </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;