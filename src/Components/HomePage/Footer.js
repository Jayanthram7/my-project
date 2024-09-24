import React from 'react'
import Logo from"../../Assets/logo.png"
import google from"../../Assets/google-fill.svg"
import linked from"../../Assets/linkedin-box-fill (1).svg"
import youtube from"../../Assets/youtube-fill.svg"

const Footer = () => {
  return (
    <>
    <footer className="container bg-green-400 text-white mt-12 ">
    <div className="column">
        <div class="logo">
            <img src={Logo} className='scale-125 ml-20 mt-4'></img>
        </div>
            <p className='ml-20 text-4xl'>
                Thank you for Visiting Our Site
            </p>
            <div class="socials">

                
               
                <a href="#"><img src={google} className='w-10 h-10 rounded-full border border-spacing-2 p-1 ml-20'></img></a>
                <a href="#"><img src={youtube} className='w-10 h-10 rounded-full border border-spacing-2 p-1'></img></a>
                <a href="#"><img src={linked} className='w-10 h-10 rounded-full border border-spacing-2 p-1'></img></a>
            </div>
    </div>
    <div class="column mt-12">
        <h4>Company</h4>
        <a href="#">Business</a>
        <a href="#">Partnership</a>
        <a href="#">Network</a>

    </div>
    <div class="column mt-12">
        <h4>About Us</h4>
        <a href="#">Blogs</a>
        <a href="#">Channels</a>
        <a href="#">Sponsors</a>

    </div>
    <div class="column text-white mt-12">
        <h4><span className="blur"></span>Contact</h4>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>

    </div>
</footer>
<div class="copyright bg-green-400 ">
    Copyright © 2024 TripTactix . All rights reserved.
</div>
    </>
  )
}

export default Footer