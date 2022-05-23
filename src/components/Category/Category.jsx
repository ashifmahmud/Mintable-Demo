import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import './Category.css'
import Icon1 from './icon1.png'
import Icon2 from './icon2.png'
import Icon3 from './icon3.png'
import Icon4 from './icon4.png'
import Icon5 from './icon5.png'
import Icon6 from './icon6.png'

const category = () => {
  return (
    <div>

      <div className="d-flex justify-content-center">
        
        <Button className="template btn-light">
          <Image className='cat-img' src={Icon1} roundedCircle style={{width:'3rem'}}/>
          Art
        </Button>
        <Button className="template btn-light">
        <Image className='cat-img' src={Icon2} roundedCircle style={{width:'3rem'}}/>
        Music
        </Button>
        <Button className="template btn-light">
        <Image className='cat-img' src={Icon3} roundedCircle style={{width:'3rem'}}/>
        Videos
        </Button>
        <Button className="template btn-light">
        <Image className='cat-img' src={Icon4} roundedCircle style={{width:'3rem'}}/>
        Collectibles
        </Button>
        <Button className="template btn-light">
        <Image className='cat-img' src={Icon5} roundedCircle style={{width:'3rem'}}/>
        Sports
        </Button>
        <Button className="template btn-light">
        <Image className='cat-img' src={Icon6} roundedCircle style={{width:'3rem'}}/>
        Utility
        </Button>

      </div>

    </div>


  )
}

export default category