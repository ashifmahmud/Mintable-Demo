import React from 'react'
import './PromotedCreation.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css'
import Slider from "react-slick";



import super1 from "./Images/super1.png";
import super2 from "./Images/super2.png";
import super3 from "./Images/super3.png";
import super4 from "./Images/super4.png";
import Card from "./Card"

const PromotedCreation = () => {
  const settings = {
    className: "center",
    dots: true,
      infinite: true,
      centerPadding: "60px",
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
      image: super1,
      shop: "DDC",
      title: "Blue Act",
      price: 0.011,
      description: "Buy it now!",
      owner:"err",
      view: 9,
      by: super2
    },
    {
      image: super2,
      shop: "FirexD",
      title: "It's on Fire!",
      price: 0.121,
      description: "Still Picture on Fire!",
      owner:"Artiller11",
      view: 81,
      by:super1
    },
    {
      image: super3,
      shop: "Batex",
      title: "Bat Games",
      price: 0.55,
      description: "Dark and Death.",
      owner:"Adamist",
      view: 91,
      by: super4
    },
    {
      image: super4,
      shop: "Logoman",
      title: "Broken",
      price: 11.12,
      description: "Broken Camera with Film.",
      owner:"Zamix",
      view: 60,
      by: super3
    },
    {
      image: super1,
      shop: "GA",
      title: "Go away",
      price: 0.0121,
      description: "go away ana",
      owner:"verr",
      view: 3,
      by: super2
    },
    {
      image: super2,
      shop: "Maximo",
      title: "Take it or not",
      price: 0.113,
      description: "Best design ever!",
      owner:"Artillery",
      view: 8,
      by:super1
    },
    {
      image: super3,
      shop: "Pinewood",
      title: "Red Games",
      price: 0.5,
      description: "Glossy and good.",
      owner:"Adamist",
      view: 9,
      by: super4
    },
    {
      image: super4,
      shop: "Tekno",
      title: "Green Goblet",
      price: 11.12,
      description: "Yes it's 067! Help!",
      owner:"Zamix",
      view: 60,
      by: super3
    },
    {
      image: super3,
      shop: "Pinewood",
      title: "Red Games",
      price: 0.5,
      description: "Glossy and good.",
      owner:"Adamist",
      view: 9,
      by: super4
    }
  ]
  return ( 
    <div className="promoted-nft">
      <div className="promoted-title">
        <h1 className='promoted-title-name'>Promoted Creation</h1>
        
        <div className="cards">
        <Slider {...settings}>
          
          {
            data.map(({image, title,shop, price, description, owner, view,by})=>
            <Card 
            image = {image}
            title = {title}
            shop = {shop}
            price = {price}
            description = {description}
            owner = {owner}
            view = {view}
            by = {by}
            />)
          }
          
        
          </Slider> 
   
        </div>
      
      </div>

    </div>
  )
}

export default PromotedCreation