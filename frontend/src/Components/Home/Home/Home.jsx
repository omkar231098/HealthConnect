import React from 'react';
import Dentist from '../Another/Dentist/Dentist';
import Feature from '../Another/Feature/Feature';
import Service from '../Another/Service/Service';
import About from '../About/About';
import Navbar from "../../Basic/Navbar";
import Footer from "../../Basic/Footer";
import Banner from '../Banner/Banner';


const Home = () => {

    return (
        <>
        <Navbar />
           <Banner />
           <Feature />
           <About />
           <Service />
           <Dentist />
           <Footer />
        </>
    );
};

export default Home;