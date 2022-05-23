import React from 'react'
import image1 from './Images/create_store.png'
import image2 from './Images/how_promote.png'
import image3 from './Images/how_sell.png'
import image4 from './Images/what_are.png'

import './Academy.css'

import 'bootstrap/dist/css/bootstrap.css'

const Academy = () => {
  return (
    <div className='academy-container '>

      <div className='academy-title'> Mintable Academy </div>
      <div className="academy-subtitle">Learn how to use Mintable to buy/sell digital items and how to get paid for your digital collectables</div>
      
    <div className='d-flex justify-content-center'>
      <div className="academy-img">
        <img src={image1} alt="" />
        <div className="img-sub">
          <a className='academy-a' href="#">What Are Digital Items(NFTs)</a>
        </div>
      </div>
      <div className="academy-img">
        <img src={image2} alt="" />
        <div className="img-sub">
          <a className='academy-a' href="#">How Do I Create A Store?</a>
        </div>
      </div>
      <div className="academy-img">
        <img src={image3} alt="" />
        <div className="img-sub">
           <a className='academy-a' href="#">How Can I Sell More Items</a>
        </div>
      </div>
      <div className="academy-img">
        <img src={image4} alt="" />
        <div className="img-sub">
          <a  className='academy-a' href="#">How Can I Promote My Items</a>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Academy