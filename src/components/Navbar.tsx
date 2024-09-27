import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import { Container } from "react-bootstrap";
import { FaHome, FaFolder, FaFileAlt } from "react-icons/fa"; // 引入图标
import "./Navbar.css"; // 添加这行来引入自定义 CSS 文件的1

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              className="custom-dropdown-menu"
            >
              <FaFileAlt className="nav-icon" /> {subpage.name} {/* 添加图标 */}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={<><FaFolder className="nav-icon" /> {item.name}</>} // 添加图标
          id="basic-nav-dropdown"
          className="custom-dropdown-menu"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link 
        key={`page-${pageIndex}`} as={Link} to={item.path}
        className="custom-dropdown-menu"
        >
          <FaHome className="nav-icon" /> {item.name} {/* 添加图标 */}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar expand="lg" className="apple-navbar" fixed="top">
      <Container fluid>
        <Link to="/" className="apple-brand">
          <img src="https://static.igem.wiki/teams/5378/lesser-panda/logo.webp" className="apple-logo" alt="Logo" />
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="apple-toggler" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto apple-nav">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}