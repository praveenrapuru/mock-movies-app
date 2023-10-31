import React, { useEffect, useState } from 'react';
import { Outlet,Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";


const Layout = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="fs-2"style={{color:"orange"}}>aha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Movies</Nav.Link>
            <Nav.Link href=''>Shows</Nav.Link>
            <Nav.Link href=''>Watch for Free</Nav.Link>
            <Nav.Link href=''>My aha</Nav.Link>
            <div>
            { 
              
              (window.location.pathname == '/Search') && (
                
                <input style={{position:"absolute",right:'400px',top:"25px",}}
                  className="rounded input-group-text bi bi-search"
                  type="text"
                  placeholder="Search...."
                  value={searchValue}
                  onChange={handleInputChange}
                />
              )
            }
            </div>
            <Nav.Link style={{position:"absolute",right:"350px"}} href="./Search"><i className="bi bi-search"></i></Nav.Link>
            <Nav.Link style={{position:"absolute",right:"180px"}} href=''><Button variant="warning">Subscribe Now</Button></Nav.Link>
            <Nav.Link style={{position:"absolute",right:"100px",top:"20px"}} href="">Sign in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet context={[searchValue]}/>
    </>
  )
};

export default Layout;