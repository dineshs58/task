import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AboutImg from '../Asserts/img-5.png'
import Button from 'react-bootstrap/Button';


function AboutContent()
{
    return(
        <>
          <Container>
          <div className="text-center mt-5">
                    <h1>About Us</h1>
                    <p>It is a long established fact that a reader will be distracted by </p>
                </div>
            <Row className='mt-5'>
                <Col md={6} className='mt-2 '>
                   <h1 className='text-center mt-5'>About Our cycle Store</h1>
                   <p className='mt-5'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                    that it has a more-or-less normal distribution of letters
                    the readable content of a page when looking at its layout. The point of using Lorem Ipsum is </p>
                    <Button className="btn mt-5">Read More</Button>
                </Col>
                <Col md={6} className='mt-2 px-5'>
                    <img src={AboutImg} alt="" width={450} height={350}/>
                </Col>
            </Row>
          </Container>
        
        </>
    )
}
export default AboutContent