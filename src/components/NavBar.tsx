import React from 'react';
import './NavBar.css';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function NavBar() {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand className="mr-auto">WikiCountries</NavbarBrand>
      </Navbar>
    </div>
  );
}
