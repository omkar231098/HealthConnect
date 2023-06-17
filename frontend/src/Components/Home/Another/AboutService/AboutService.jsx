import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AboutFocus } from '../../FakeData/AboutFocus';
import Services from '../../Pages/Home/Services/Services';

const Service = () => {
    return (
        <section className="service-wrapper">
            <Container>
                <Row>
                    {
                        AboutFocus.map(treatment => (
                            <Services key={treatment.id} treatment={treatment} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;