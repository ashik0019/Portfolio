import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css"; // import css
import {Player, BigPlayButton} from 'video-react'
class Video extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
     modalOpen = () => {
        this.setState({
            show: true
        })
    };
    modalClose = () => {
        this.setState({
            show: false
        })
    };
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} sm={12} md={12} className="videoCard">
                            <div >
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                    cumque eaque earum excepturi laborum laudantium pariatur sed tempore, unde? Amet dolore
                                    doloremque natus nemo porro praesentium quam qui sit velit?</p>
                                <p>
                                    <FontAwesomeIcon className="playBtn" icon={faPlayCircle} onClick={this.modalOpen}/>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                            <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;