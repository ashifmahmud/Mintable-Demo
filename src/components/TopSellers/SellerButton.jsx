import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './SellerButton.css'


const SellerButton = ({dp,id,points,items, views}) => {
  return (
    <div className="seller-button">
      <Button className='seller-btn d-flex btn-light'>

      <Image className='ts-dp ' src={dp} roundedCircle style={{width:'3rem'}}/>
      <div className="ts-details d-flex">
        <div className="id-point ts-sub-detail">
          <div className="ts-id">{id}</div>
          <div className='ts-points-count'>{points}K</div>
        </div>

        <div className="items-count ts-sub-detail">
          <div className="ts-items">Items</div>
          <div className = "ts-item-count">{items}K</div>
        </div>

        <div className="views-count ts-sub-detail">
          <div className="ts-views">Views</div>
          <div className='ts-view-count'>{views}</div>
        </div>

        
      </div>
      </Button>

    </div>
  )
}

export default SellerButton