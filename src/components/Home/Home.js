// import React, { Component } from 'react'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../photos/slide1.jpg';
import img2 from '../../photos/slide2.jpg';
import img3 from '../../photos/slide3.jpg';

import OurDoctors from '../OurDoctors';
import HomeQuote from '../HomeQuote'; 

import Mission from '../Mission';
import Footer from '../Footer'
import  Gallerycarouse from '../Gallerycarousel';


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div >
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={650} width={1520}  src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={650} width={1520} src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={650} width={1520} src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    <div >

      <div  className='Top'>
      
      <h1 className="font-weight-bold text-danger">SecureLife Hospital Ltd</h1>
      <h5> FEEL THE DIFFERENCE WITH US </h5>
      <h1>Your Health  Is Our Priority</h1>
      <Button variant="danger" >Get Appointment</Button>{' '}
      <Button variant="outline-danger">Learn More</Button>{' '}
      
      </div>
      </div>
      <div className = "bg-dark">
                <Mission/>
                <br>
                
                </br>
                
                <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br />
                <br/>
                <OurDoctors/>
                    
                      <br></br>
                <br></br>
                <h1 className="text-white" align="center">News and Achievements</h1>
                <br/>
                <br/>
                <HomeQuote/>
                <br/>
                <br/>
              <Footer></Footer>
               
            </div>
      
            </div>
    );
  }


export default Home;

