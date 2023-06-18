import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import doctorfinding from '../../Home/Images/doctorfinding.c2532ac3.jpeg';
import heroTeeth from '../../Home/Images/hero-theeth.54c2c4e9.jpeg';
import womanbrush from '../../Home/Images/woman-brush.c4158ac5.jpeg';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Better Life Through</h2>
                                <h1>Better Health</h1>
                                <p className="mb-xs-5">Join us to a fun and friendly Healthy environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/paitentDash"><button className="theme-btn btn-fill">Appoinment</button></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                                <div className="animate-img">
                                    <img src={womanbrush} alt="" className="img-fluid aimg1" />
                                    <img src={doctorfinding} alt="" className="img-fluid aimg2" />
                                </div>
                                <img src={heroTeeth} alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;