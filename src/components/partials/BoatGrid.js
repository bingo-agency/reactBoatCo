import React from 'react';
import { Card,Container } from 'react-bootstrap';

function BoatGrid({ boats }) {
    return (
        <Container className="card-grid">
            {boats && boats.length > 0 ? (
                boats.map((boat) => (
                    <Card key={boat.id} className="grid-item">
                        <Card.Img variant="top" src={boat.attributes.image.data.attributes.url} alt={boat.name} />
                        <Card.Body>
                            <Card.Title>{boat.attributes.manufacturer.data.attributes.name}</Card.Title>
                            <Card.Text>ID: {boat.id}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <Card className="grid-item">
                    <div>No Records Found.</div>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}

export default BoatGrid;
