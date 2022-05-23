import { Button, Card } from 'react-bootstrap'
import './Home.css'
import React from 'react'
import Photo from './image.png'
import Image from 'react-bootstrap/Image'


const Home = () => {
  return (
    <div className="d-flex justify-content-around" id = "home">
      <div className="container-left ">
        <div className="home-title">Mint your NFT on the<br></br> Blockchain for Free</div>
        <div className="home-sub-title">Find it. Buy it. Flip it.</div>
        <div className="buttons">
          <Button className="btn-title btn-light">MINT</Button>
          <Button className="btn-title btn-light">SHOP</Button>
        </div>
      </div>

      <div className="container-right">
      <Card style={{ width: '35rem' }} className="Card">
        <Card.Img variant="top" src={Photo} />
        <Card.Body className="d-flex justify-content-between">

          <div>
            <Image src={Photo} roundedCircle style={{width:'2rem'}}/>
           <a href="#" className='home-a'>Ziggy123</a>
          </div>
          <div>
            <a href="#" className='home-a'>MURI 652</a>
          </div>
        </Card.Body>
      </Card>
        
      </div>
    </div>
  )
}

export default Home