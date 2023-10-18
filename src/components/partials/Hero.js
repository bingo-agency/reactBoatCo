import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
    return (
        <Container fluid className="p-0">
            <Row className="m-0 align-items-center">
                <Col md={6} className="p-5">
                    <h1>Welcome to the Boat Co.</h1>
                    <p className="lead">
                        The Boat Company is a leading provider of high-quality boats and maritime solutions, offering a diverse catalog of watercraft for various needs and interests. Our commitment to innovation and excellence ensures an exceptional boating experience for all enthusiasts.
                    </p>
                    <Button variant="primary" size="lg">
                        Call to Action
                    </Button>
                </Col>
                <Col md={6} className="p-0">
                    <img
                        src="https://s3.eu-central-1.amazonaws.com/cms.marinedatacloud.com/1500_2_77_S_running4_71ac7c9c12.jpg"
                        alt="Boat"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;
