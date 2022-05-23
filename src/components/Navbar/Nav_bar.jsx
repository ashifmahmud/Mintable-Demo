import React from 'react'
import './Nav_bar.css'
import logo from './mintable.svg'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import {FaEthereum,FaDollarSign} from 'react-icons/fa'

const Nav_bar = () => {
  return (
    <Navbar id='Navbar' bg="light">

      <Container fluid id="container" className="justify-content-center">
        <Navbar.Brand>
          
          <img src={logo}/>
        </Navbar.Brand>

        <NavDropdown title="All Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Art</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Music</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Games</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Collectable</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Top</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Top Sellers
          </NavDropdown.Item>
        </NavDropdown>

        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        
      </Form>

        <Nav className="justify-content-center">

          

          <NavDropdown title="Browse" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Arts</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Videos</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Collectables</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Collection</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Music</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Games</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Mint</Nav.Link>
          <Nav.Link href="#link">Resources</Nav.Link>
          
          <NavDropdown title="Eth" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"><FaEthereum/>Etherium</NavDropdown.Item>
          <NavDropdown.Item href="#action4"><FaDollarSign/>USD</NavDropdown.Item>
          
         
        </NavDropdown>

        <Button variant="outline-primary" id="btn">Login</Button>
          <Button variant="primary" id = "btn">Sign Up</Button>

        </Nav>

        

        
          
        

        


      </Container>
      
    </Navbar>
  )
}

export default Nav_bar