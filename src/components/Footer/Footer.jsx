import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import logo from './Images/mintable.svg'
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {SiReddit, SiDiscord} from 'react-icons/si';


const Footer = () => {
  return (
    <div className='footer-container '>
      <div className='newsletter-container'>
        <div className="content">
          <div className="news-title">Join Our Newsletter</div>
          <p className='news-description'>To get updated on new NFTs, Exclusive Drops, Live Auctions and more!</p>
          <input className='news-input' type="text" placeholder='Your Name' />
          <input className='news-input'  type="text" placeholder='Your Email'/>
        </div>
      </div>




<table className="center">
<tr>
    <th><a href='#' className='footer-title'><img src={logo} alt="" /> Mintable</a></th>
    <th><a href='#' className='footer-s-title'>My Account</a></th>
    <th><a href='#' className='footer-s-title'>Need Help?</a></th>
    <th><a href='#' className='footer-s-title'>Buy an Item</a></th>
    <th><a href='#' className='footer-s-title'>Go Pro</a></th>
    <th><a href='#' className='footer-s-title'>Resources</a></th>
  </tr>
  
  <tr>
  <th className='footer-join-community'>Join our Community</th>
    <th><a className='link' href='#'>Create a Store</a></th>
    <th><a className='link' href='#'>Help and Support</a></th>
    <th><a className='link' href='#'>Browse</a></th>
    <th><a className='link' href='#'>Pro Services</a></th>
    <th><a className='link' href='#'>Privacy</a></th>
  </tr>
  <tr>
    <th></th>
    <th><a className='link' href='#'>List an Item For Sale</a></th>
    <th><a className='link' href='#'>FAQ</a></th>
    <th><a className='link' href='#'>Items</a></th>
    <th><a className='link' href='#'>College</a></th>
    <th><a className='link' href='#'>Seller's University</a></th>
    
  </tr>
  <tr>
    <th><TiSocialTwitterCircular className='footer-icon'/> <SiReddit className='footer-icon'/> <SiDiscord className='footer-icon'/> </th>
    <th><a className='link' href='#'>My Profile</a></th>
    <th><a className='link' href='#'>Chat with Us</a></th>
    <th><a className='link' href='#'>Browse</a></th>
    <th><a className='link' href='#'>Athletes</a></th>
    <th><a className='link' href='#'>University</a></th>
    
  </tr>
  </table>

    </div>
  )
}

export default Footer