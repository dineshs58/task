import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

import Img1 from '../Asserts/img-5.png'
import Img2 from '../Asserts/img-2.png'
import Img3 from '../Asserts/img-3.png'



function ShopCont()
{
    return(

        <>
        
        <Container>
            <div className="text-center mt-5">
                <h1>Shop Now</h1>
                <p>It is a long established fact that a reader will be distracted by </p>
            </div>
            <Row className="mt-5 mx-5">
                <Col md={6} lg={4} className="mt-3">
                   <img src={Img1} alt="" width={250} height={300} />
                   <h1>New Cycles</h1>
                   <p>It is a long established fact that a reader will be distracted by 
                   It is a long established fact that a reader will be distracted by 
                   </p>
                   <h4>₹.6000</h4>
                   <Button className="btn">Buy Now</Button>
                </Col>

                <Col md={6} lg={4} className="mt-3 px-4">
                   <img src={Img2} alt=""  width={250} height={300} />
                   <h1>My Cycles</h1>
                   <p>It is a long established fact that a reader will be distracted by 
                   It is a long established fact that a reader will be distracted by 
                  
                   </p>
                   <h4>₹.8000</h4>
                   <Button className="btn">Buy Now</Button>
                </Col>

                <Col md={6} lg={4} className="mt-3 px-4">
                   <img src={Img3} alt=""  width={250} height={300} />
                   <h1>New Models</h1>
                   <p>It is a long established fact that a reader will be distracted by 
                   It is a long established fact that a reader will be distracted by </p>
                   <h4>₹.4000</h4>
                   <Button className="btn">Buy Now</Button>
                </Col>
                
            </Row>
        </Container>
        
        </>



    )
}
export default ShopCont