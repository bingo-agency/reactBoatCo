import React from 'react';
import { Col,Container } from 'react-bootstrap';

function SponsorLogos() {
    const sponsorImages = [
        'https://img.logoipsum.com/288.svg',
        'https://img.logoipsum.com/288.svg',
        'https://img.logoipsum.com/288.svg',
        'https://img.logoipsum.com/288.svg',
    ];

    return (
        <Container className="card-grid">
            {sponsorImages.map((imageUrl, index) => (
                <Col key={index} md={2} className="p-5">
                    <img src={imageUrl} alt={`Sponsor ${index + 1}`} style={{ width: '200px', height: '200px' }} />
                </Col>
            ))}
        </Container>
    );
}

export default SponsorLogos;
