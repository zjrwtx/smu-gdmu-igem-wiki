import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../../pages.ts";

function ExampleNavbar() {
  const pages = [];
  for (const page of Pages) {
    if ("folder" in page && page.folder) {
      const folder = [];
      for (const subpage of page.folder) {
        folder.push(
          <NavDropdown.Item as={Link} to={subpage.path} target="_blank">
            {subpage.name}
          </NavDropdown.Item>,
        );
      }
      pages.push(
        <NavDropdown title={page.name} id="basic-nav-dropdown">
          {folder}
        </NavDropdown>,
      );
    } else if ("path" in page && page.path) {
      pages.push(
        <Nav.Link as={Link} to={page.path} target="_blank">
          {page.name}
        </Nav.Link>,
      );
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand>{import.meta.env.VITE_TEAM_NAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="left-aligned">{pages}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ExampleNavbar;
