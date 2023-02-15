import React, { Component } from 'react';
import "../components/StyleFooter.css";

class Footer extends Component{
    
    render() { 
        return (   

         <div>
        <footer className='footer-distributed' >
<div className='footer-left'>
    <h3> SecureLife<span>Hospital</span></h3>
    <p className='footer-links'>
|
    <a href="#">HOME</a>
        |
        <a href="#">ABOUT</a>
        |
        <a href="#">CONTACT</a>
        |
    </p>
   
</div>

<div className='footer-center'>
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Gaziabad</span> Delhi</p>
    </div>
    <div>
        <i className='fa fa-phone'></i>
        <p>+91 9540925945</p>
    </div>
    <div>
        <i className='fa fa-envelope'></i>
        <p><a href="#">xyz@gmail.com</a></p>
    </div>
</div>
<div className='footer-right'>
    <p className='footer-company-about'>
        <span>About the hospital</span>
        <strong>Best hospital</strong> Best Service
    </p>
    <div className='footer-icon'>
        <a href='#'><i className='fa fa-facebook'></i></a>
        <a href='#'><i className='fa fa-instagram'></i></a>
        <a href='#'><i className='fa fa-twitter'></i></a>
        <a href='#'><i className='fa fa-linkedin'></i></a>
        <a href='#'><i className='fa fa-youtube'></i></a>
    </div>
</div>

        </footer>
        <div>
<p className='footer-name'>Copy right @ 202 <strong>SecureLife Hospital</strong> All rights reserved</p>
</div>
  </div>

          );
        }
    }
    export default Footer;


   
    