import React from 'react';
import { NavLink } from 'react-router';
import { FcStart } from "react-icons/fc";
import { SlSocialFacebook } from 'react-icons/sl';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (

        
        <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">
            
  <nav className="grid grid-flow-col gap-4 text-white">
    
    <NavLink  className="link link-hover">Home</NavLink>
    <NavLink className="link link-hover">My Bookings</NavLink>
    <NavLink className="link link-hover">Blogs</NavLink>
    <NavLink className="link link-hover">Contract</NavLink>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 text-white">
      
        <NavLink ><FcStart className="w-8 h-8"></FcStart></NavLink>
        <NavLink><SlSocialFacebook className="w-8 h-8"></SlSocialFacebook></NavLink>
        <NavLink> <FaLinkedin className="w-8 h-8"></FaLinkedin> </NavLink>
      
    </div>
  </nav>
  {/* <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside> */}
</footer>
    );
};

export default Footer;