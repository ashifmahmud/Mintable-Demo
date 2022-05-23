import React from 'react'
import superEth from './Images/supereth.png'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'react-bootstrap/Image'
import {AiOutlineEye} from 'react-icons/ai';

const Card = ({image,shop,title,price,description,owner,view,by}) => {
  return (
    
    <div className="card">
      <a href="#" className='card-link'>
      <div className="card-image">
        <img src={image} alt="super" />
      </div>
      </a>
      <div className="card-content">
        <div className="card-heading d-flex justify-content-between">
          <div>{shop}</div>
          <div>Price</div>

        </div>
        <div className="card-details">
          
          <div className="card-price d-flex justify-content-between">
            <div>
            <h4 className="card-title">{title}</h4>
            </div>
          
            <div className='d-flex'>
              <span><img src={superEth} alt="super eth"/></span>
              <span><h4 className='price'>{price} ETH</h4></span>
            </div>
          </div>

          <div className="description">
          {description}
          </div>

        </div>
        <hr />
        <div className="card-sub-details">
          <div className='d-flex justify-content-between'>
          <div>
          <Image src={by} roundedCircle style={{width:'2rem'}}/>
            <span className="owner">Owner</span> 
            <div className='owner-name'>{owner}</div>
          </div>
          <div className="view">
          <AiOutlineEye/> {view}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card