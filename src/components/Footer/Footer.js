import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone, faMapPin, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="footerSection" fluid={true}>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <h1 className="serviceTitle">Follow Me</h1>
                            <a target="_blank" href="https://www.facebook.com/ash.astro19" className="socialLink"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
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
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1 className="serviceTitle">Legal</h1>
                            <Link className="footerLink" to="/refund-policy" >Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms-and-condition">Terms and Condition</Link><br/>
                            <Link className="footerLink" to="/privacy-policy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyRightSection">
                    <a href="https://www.facebook.com/ash.astro19" className="copyRightLink">ashastro.com &copy; 2019-2021</a>

                </Container>
            </Fragment>
        );
    }
}

export default Footer;