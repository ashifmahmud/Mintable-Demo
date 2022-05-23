import React from 'react'
import './TopSellers.css'


import ts1 from './Images/ts1.png'
import ts2 from './Images/ts2.png'
import ts3 from './Images/ts3.png'
import ts4 from './Images/ts4.png'
import ts5 from './Images/ts5.png'
import ts6 from './Images/ts6.png'
import ts7 from './Images/ts7.png'
import ts8 from './Images/ts8.png'
import SellerButton from './SellerButton'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopSellers = () => {
  
  const settings = {
    className: "center",
    infinite: true,
    dots:true,
    centerPadding: "60px",
    rows:2,
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };


  const data = [
    {
      dp: ts1,
      id: "0xfc8182",
      points: 22,
      items: 9,
      views: 181
    },
    {
      dp: ts2,
      id: "0xadf8182",
      points: 31,
      items: 94,
      views: 501
    },
    {
      dp: ts3,
      id: "0x44dasd",
      points: 12,
      items: 2,
      views: 153
    },
    {
      dp: ts4,
      id: "0xffe82",
      points: 45,
      items: 44,
      views: 187
    },
    {
      dp: ts5,
      id: "0xfttad82",
      points: 75.82,
      items: 9,
      views: 175
    },
    {
      dp: ts6,
      id: "0x73ee3qa",
      points: 45,
      items: 8,
      views: 99
    },
    {
      dp: ts7,
      id: "0x73ee3qa",
      points: 45,
      items: 8,
      views: 99
    },
    {
      dp: ts8,
      id: "0x73ee3qa",
      points: 45,
      items: 8,
      views: 99
    },
    {
      dp: ts1,
      id: "0xfc8182",
      points: 22,
      items: 9,
      views: 181
    },
    {
      dp: ts2,
      id: "0xadf8182",
      points: 31,
      items: 94,
      views: 501
    },
    {
      dp: ts3,
      id: "0x44dasd",
      points: 12,
      items: 2,
      views: 153
    },
    {
      dp: ts4,
      id: "0xffe82",
      points: 45,
      items: 44,
      views: 187
    },
    {
      dp: ts5,
      id: "0xfttad82",
      points: 75.82,
      items: 9,
      views: 175
    },
    {
      dp: ts6,
      id: "0x73ee3qa",
      points: 45,
      items: 8,
      views: 99
    },
    {
      dp: ts7,
      id: "0x73ee3qa",
      points: 45,
      items: 8,
      views: 99
    },
    {
      dp: ts8,
      id: "0x73ee3qa",
      points: 45,
      items: 8,
      views: 99
    }

  ]
  return (
    <div className='topSeller-container'>
      <div className="topSeller-title">Top Sellers</div>
      <div className="topSeller-btn">
      <Slider {...settings}>
      {
            data.map(({dp, id, points, items, views})=>
            <SellerButton
            dp = {dp}
            id = {id}
            points = {points}
            items = {items}
            views = {views}
            
            />)
          }
          </Slider>


      </div>
      
      
      </div>
  )
}

export default TopSellers