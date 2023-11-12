import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

import AboutImg1 from '../Asserts/img-6.png'
import AboutImg2 from '../Asserts/img-7.png'
import AboutImg3 from '../Asserts/img-8.png'

function NewCycle123()
{
    return(

        <>
        
        <Container>
            <div className="text-center mt-5">
                <h1>News</h1>
                <p>It is a long established fact that a reader will be distracted by the
                     readable content of a page when looking at its layout. The point of using</p>
            </div>
            <Row className="mt-5">
                <Col md={6} lg={4} >
                    <img src={AboutImg1} alt="" width={350} height={200} />
                    <h2>Speed cycle</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of 
                        a page when looking at its layout. The point of using</p>
                        <h4>₹. 20000</h4>
                    <Button className="btn">Buy Now</Button>
                </Col>

                <Col md={6} lg={4}>
                <img src={AboutImg2} alt="" width={350} height={200}/>
                    <h2>Speed cycle</h2>
                    <p>2019It is a long established fact that a reader will be distracted by the readable content of
                         a page when looking at its layout. The point of using</p>
                         <h4>₹. 10000</h4>
                         <Button className="btn">Buy Now</Button>
                </Col>

                <Col md={6} lg={4}>
                <img src={AboutImg3} alt="" width={350} height={200}/>
                    <h2>Jaump cycle</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                         page when looking at its layout. The point of using</p>
                         <h4>₹. 40000</h4>
                         <Button className="btn">Buy Now</Button>
                </Col>
            </Row>
        </Container>
        
        </>



    )
}
export default NewCycle123