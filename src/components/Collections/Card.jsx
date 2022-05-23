import React from 'react'

import './Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'react-bootstrap/Image'
import {BsFillPatchCheckFill} from "react-icons/bs"



const Card = ({cover, dp, title, status, about, items, views, price, volume}) => {
  return (
    
    <div className="collection-card">
      
      <a href="#" className='card-link'>
      <div className="collection-card-image">
        
        <img className='cover-image' src={cover} alt="cover" />
      </div>
      </a>
      <div className="collection-card-content">
      <div className="card-dp"> 
      <Image src={dp} roundedCircle style={{width:'5rem'}}/>
      </div>
        <a href="#" className='card-link'>
        <div className="collection-card-heading">
          
          {title}

        </div>
        </a>
        
        <div className="card-status">
          <BsFillPatchCheckFill/>  {status}
        </div>
        <div className="card-details">
          
          <div>{about}</div>

        </div>
        
        <hr />
        <div className="card-sub-details">
          <div className="card-sub-titles d-flex justify-content-between">

            <div className="items">
              <div>Items</div>
              <div>{items}</div>
            </div>
            <div className="views">
              <div>Views</div>
              <div>{views}</div>
            </div>
            <div className="floor-price">
              <div>Floor price</div>
              <div>{price}</div>
            </div>
            <div className="7D Volume">
              <div>Volume</div>
              <div>{volume}</div>
            </div>

          </div>
          
          
          
        </div>
      </div>
      
    </div>
  )
}

export default Card