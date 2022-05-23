import React from 'react'
import './Collections.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



import dp1 from './Images/dp1.png'
import dp2 from './Images/dp2.png'
import dp3 from './Images/dp3.png'
import dp4 from './Images/dp4.png'
import Store1 from './Images/Store1.png'
import Store2 from './Images/Store2.png'
import Store3 from './Images/Store3.png'
import Store4 from './Images/Store4.png'
import Card from './Card'

const Collections = () => {
  const settings = {
    className: "slider variable-width",
   
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  const data = [
    {
      cover: Store1,
      dp: dp1,
      title: "Dreadfulz",
      status: "Guaranteed Authentic",
      about: "Best shop in town.",
      items: "1,111",
      views: 884,
      price: 0.0298,
      volume: 43.9

    },
    {
      cover: Store2,
      dp: dp2,
      title: "Azuki",
      status: "Guaranteed Authentic",
      about: "Azuki has 10,000 avatars and unlimited access.",
      items: "8,122",
      views: 413,
      price: 0.125,
      volume: 44.9

    },
    {
      cover: Store3,
      dp: dp3,
      title: "Otherdeed",
      status: "Guaranteed Authentic",
      about: "Other is better than another.",
      items: "98,001",
      views: 2113,
      price: 2.98,
      volume: 26

    },
    {
      cover: Store4,
      dp: dp4,
      title: "ProjectPXN",
      status: "Guaranteed Authentic",
      about: "A shadow vague, formless but eternal",
      items: "9,112",
      views: 302,
      price: 2.94,
      volume: 22.5

    }
  ]
  return (
    <div className="Collections">
      <div className="Collections-title">Top Collections</div>
      
      <div className="collection-cards ">
      <Slider {...settings}>
      {
            data.map(({cover, dp, title, status, about, items, views, price, volume})=>
            <Card 
            cover = {cover}
            dp = {dp}
            title = {title}
            status = {status}
            about = {about}
            items = {items}
            views = {views}
            price = {price}
            volume = {volume}
            />)
          }
          
          </Slider>  
      </div>
      
     
      
    </div>
  )
}

export default Collections

