import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Our from '../Asserts/img-2.png'
import Button from 'react-bootstrap/Button';

function OurCycleCont() {
    return (
        <>


            <Container>

                <div className="text-center mt-5">
                    <h1>Our cycle</h1>
                    <p>It is a long established fact that a reader will be distracted by the</p>
                </div>
                <Row>
                    <Col md={6} className='mt-5 px-5'>
                        <img src={Our} alt="" width={460} height={360} />
                    </Col>

                    <Col md={6} className='mt-2 '>
                        <h1 className='text-center mt-5'>Cycles</h1>
                        <p className='mt-5'>It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters
                            the readable content of a page when looking at its layout. The point of using Lorem Ipsum is </p>
                        <Button className="btn mt-5">Read More</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default OurCycleCont