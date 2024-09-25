import React from 'react';
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages";
import { Container } from "react-bootstrap";
import "./Navbar.css";

export function Navbar() {
  const renderNavItem = (item: any, pageIndex: number, isSubItem: boolean = false) => {
    if (item.folder) {
      const folderItems = item.folder.map((subpage: any, subpageIndex: number) =>
        renderNavItem(subpage, subpageIndex, true)
      );
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={
            <span className="nav-item">
              <img src={`/icons/${item.name.toLowerCase()}.png`} alt={item.name} className="nav-icon" />
              <span className="nav-text">{item.name}</span>
            </span>
          }
          id={`dropdown-${item.name.toLowerCase()}`}
          className="custom-dropdown"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if (item.path) {
      const content = (
        <span className="nav-item">
          <img src={`/icons/${item.name.toLowerCase()}.png`} alt={item.name} className="nav-icon" />
          <span className="nav-text">{item.name}</span>
        </span>
      );
      
      return isSubItem ? (
        <NavDropdown.Item
          key={`subpage-${pageIndex}`}
          as={Link}
          to={item.path}
          className="custom-dropdown-item"
        >
          {content}
        </NavDropdown.Item>
      ) : (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          className="custom-nav-link"
        >
          {content}
        </Nav.Link>
      );
    }
    return null;
  };

  const pages = Pages.map((item, index) => renderNavItem(item, index));

  return (
    <BootstrapNavbar expand="lg" className="apple-navbar" fixed="top">
      <Container fluid>
        <BootstrapNavbar.Brand as={Link} to="/" className="apple-brand">
          <img src="https://static.igem.wiki/teams/5378/lesser-panda/logo.webp" className="apple-logo" alt="Logo" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="apple-toggler" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto apple-nav">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}