import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import './Bnnaer.css'
import Button from 'react-bootstrap/Button';

function Banners() {
    return (

        <>
            <Container fluid className="back">
                <Row>
                    <Col lg={12}>
                        <Carousel>
                            <Carousel.Item>
                                <Image src={require('../Asserts/img-2.png')}></Image>
                                <Image className="img1" />
                                <Carousel.Caption>
                                    <div className="cent" >
                                        <h3 className="head">New Model Cycle</h3>
                                        <p className="para">New Model CycleIt is a long established fact that a reader will be distracted by the readable content</p>
                                        <Button className="btn">Buy Now</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../Asserts/img-4.png')} width={450} height={400}></Image>
                                <Image className="img2" />
                                <Carousel.Caption>
                                    <div className="cent">
                                        <h3 className="head">New Model Cycle</h3>
                                        <p className="para">New Model CycleIt is a long established fact that a reader will be distracted by the readable content</p>
                                        <Button className="btn">Buy Now</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../Asserts/img-3.png')} width={450} height={400}></Image>
                                <Image className="img3" />
                                <Carousel.Caption>
                                    <div className="cent">
                                        <h3 className="head">New Model Cycle</h3>
                                        <p className="para">New Model CycleIt is a long established fact that a reader will be distracted by the readable content</p>
                                        <Button className="btn">Buy Now</Button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

        </>



    )
}
export default Banners