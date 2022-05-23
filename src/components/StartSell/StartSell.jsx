import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'

import './StartSell.css'

const StartSell = () => {
  return (
    <div className="start-sell-container">
      <div className='start-sell-title'>Start Selling Your NFTs</div>
      <div className='start-sell-description'>Mint for free | Earn $MINT | Instant payments</div>
      <Button className='sell-button' >Get Started</Button>



    </div>
  )
}

export default StartSell