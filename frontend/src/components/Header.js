import React from "react";
import { Navbar } from "react-bootstrap";

import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
    </Navbar>
  )
};

export default Header;
