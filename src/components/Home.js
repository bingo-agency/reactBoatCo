import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Card, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boats from './data/Boats';
import AppNavbar from './partials/NavBar';
import Hero from './partials/Hero';
import SponsorLogos from './partials/SponsorLogos';
import BoatsGrid from './partials/BoatGrid';
import Footer from './partials/Footer';

function Home() {//img.logoipsum.com/288.svg'
    return (
        <Fragment>
            <AppNavbar />
            <Hero />
            <SponsorLogos />
            <BoatsGrid boats={Boats} />
            <Footer />
        </Fragment>
    );
}

export default Home;
