import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientImg from '../../assets/images/client.jpg'
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
class ClientReview extends Component {
    render() {
        var settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Client Says</h1>
                    <Slider {...settings}>
                       <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img src={clientImg} className="circleImg" alt=""/>
                                    <h1 className="serviceTitle">Web Development</h1>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                        dolorem est explicabo, fuga itaque officiis provident qui vero. Commodi,
                                        cumque delectus earum est fugiat natus perspiciatis quia sapiente suscipit
                                        voluptatem. Corporis cum cumque debitis, dolores earum illo, inventore laborum,
                                        molestiae nesciunt odit officiis perferendis quidem quis quo quod reiciendis tenetur.
                                    </p>
                                </Col>
                            </Row>
                       </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img src={clientImg} className="circleImg" alt=""/>
                                    <h1 className="serviceTitle">Web Development</h1>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                        dolorem est explicabo, fuga itaque officiis provident qui vero. Commodi,
                                        cumque delectus earum est fugiat natus perspiciatis quia sapiente suscipit
                                        voluptatem. Corporis cum cumque debitis, dolores earum illo, inventore laborum,
                                        molestiae nesciunt odit officiis perferendis quidem quis quo quod reiciendis tenetur.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img src={clientImg} className="circleImg" alt=""/>
                                    <h1 className="serviceTitle">Web Development</h1>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                        dolorem est explicabo, fuga itaque officiis provident qui vero. Commodi,
                                        cumque delectus earum est fugiat natus perspiciatis quia sapiente suscipit
                                        voluptatem. Corporis cum cumque debitis, dolores earum illo, inventore laborum,
                                        molestiae nesciunt odit officiis perferendis quidem quis quo quod reiciendis tenetur.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img src={clientImg} className="circleImg" alt=""/>
                                    <h1 className="serviceTitle">Web Development</h1>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                        dolorem est explicabo, fuga itaque officiis provident qui vero. Commodi,
                                        cumque delectus earum est fugiat natus perspiciatis quia sapiente suscipit
                                        voluptatem. Corporis cum cumque debitis, dolores earum illo, inventore laborum,
                                        molestiae nesciunt odit officiis perferendis quidem quis quo quod reiciendis tenetur.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img src={clientImg} className="circleImg" alt=""/>
                                    <h1 className="serviceTitle">Web Development</h1>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                        dolorem est explicabo, fuga itaque officiis provident qui vero. Commodi,
                                        cumque delectus earum est fugiat natus perspiciatis quia sapiente suscipit
                                        voluptatem. Corporis cum cumque debitis, dolores earum illo, inventore laborum,
                                        molestiae nesciunt odit officiis perferendis quidem quis quo quod reiciendis tenetur.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;