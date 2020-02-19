import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone, faMapPin, faMapMarker} from '@fortawesome/free-solid-svg-icons'
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="footerSection" fluid={true}>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <h1 className="serviceTitle">Follow Me</h1>
                            <a href="" className="socialLink"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className="socialLink" href=""><FontAwesomeIcon icon={faYoutube}/> YouTube</a>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1 className="serviceTitle">Address</h1>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faMapMarker}/> 376/1-C Ahmed Nogor, Mirpur 1, Dhaka 1216, Bangladesh</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> ashiq@pickdora.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> +8801723144515</p>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1 className="serviceTitle">Information</h1>
                            <a className="footerLink" href="">About Me</a><br/>
                            <a className="footerLink" href="">My Resume</a><br/>
                            <a className="footerLink" href="">Contact Me</a>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1 className="serviceTitle">Legal</h1>
                            <a className="footerLink" href="">Refund Policy</a><br/>
                            <a className="footerLink" href="">Terms and Condition</a><br/>
                            <a className="footerLink" href="">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyRightSection">
                    <a href="#" className="copyRightLink">ashastro.com &copy; 2019-2021</a>

                </Container>
            </Fragment>
        );
    }
}

export default Footer;