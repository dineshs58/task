import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Logs1.css'


function LoginCont() {
    return (

        <>

            <Container className="comes" >
                <Row>
                    <div className="text-center mt-5">
                        <h1 className="text-white">Login</h1>
                    </div>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Name" className="inputs" />

                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />


                                <Form.Label>PassWord</Form.Label>
                                <Form.Control type="password" placeholder="Enter PassWord" />

                                <Form.Label>Conf PassWord</Form.Label>
                                <Form.Control type="password" placeholder="Enter Conform PassWord" />

                                <div className="text-center mt-5">
                                    <Button>Submit</Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>



    )
}
export default LoginCont