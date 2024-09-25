import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import { Container } from "react-bootstrap";
import "./Navbar.css";
import { 
  FaHome, 
  FaFolder, 
  FaInfo, 
  FaFlask, 
  FaUsers, 
  FaCog, 
  FaBook, 
  FaTrophy,
  FaLightbulb,
  FaChartBar
} from "react-icons/fa";

const iconMap = {
  Home: FaHome,
  About: FaInfo,
  Team: FaUsers,
  Project: FaFlask,
  Parts: FaCog,
  Lab: FaBook,
  Human: FaUsers,
  Model: FaChartBar,
  Results: FaTrophy,
  Implementation: FaLightbulb,
};

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          const SubIcon = iconMap[subpage.name] || FaFolder;
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              className="custom-dropdown-menu"
            >
              <SubIcon className="nav-icon" /> {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={
            <>
              <FaFolder className="nav-icon" /> {item.name}
            </>
          }
          id="basic-nav-dropdown"
          className="custom-dropdown-menu"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      const Icon = iconMap[item.name] || FaFolder;
      return (
        <Nav.Link 
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          className="custom-dropdown-menu"
        >
          <Icon className="nav-icon" /> {item.name}
        </Nav.Link>
      );
    }
  });

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