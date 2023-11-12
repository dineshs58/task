import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AboutImg from '../Asserts/img-5.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Logs12.css'

function ContactsContants() {
    return (

        <>
            <Container>
                <div className="text-center mt-5">
                    <h1>Contact Us</h1>
                    <p>It is a long established fact that a reader will be distracted by </p>
                </div>
                <Row className='mt-5' >

                    <Col md={6} className=" mt-2 cols12 comes1 ">
                        <div className="text-center mt-5">
                            <h1 className="text-white">Contact Us</h1>

                        </div>

                        <br />
                        <Form.Control size="lg" type="text" placeholder="Enter Name" />



                        <br />
                        <Form.Control size="lg" type="email" placeholder="Email" />


                        <br />
                        <Form.Control size="lg" type="password" placeholder="PassWord" />


                        <div className="text-center">
                            <Button className="btn mt-5">Read More</Button>
                        </div>
                    </Col>
                    <Col md={6} className='mt-2 ml-2 px-5'>
                        <img src={AboutImg} alt="" width={450} height={400} />
                    </Col>
                </Row>
            </Container>

        </>



    )
}
export default ContactsContants