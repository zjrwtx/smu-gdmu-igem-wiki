import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import Pages from "../pages.ts";
import { Container } from "react-bootstrap";
import "./Navbar.css";

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 初始化进度
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          const SubpageIcon = subpage.icon; // 获取子页面图标
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              className="custom-dropdown-menu"
            >
              {SubpageIcon && <SubpageIcon />} {subpage.name} {/* 添加图标 */}
            </NavDropdown.Item>
          );
        }
      });
      const ItemIcon = item.icon; // 获取文件夹图标
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={<>{ItemIcon && <ItemIcon  />} {item.name}</>} // 添加图标
          id="basic-nav-dropdown"
          className="custom-dropdown-menu"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      const ItemIcon = item.icon; // 获取页面图标
      return (
        <Nav.Link 
        key={`page-${pageIndex}`} as={Link} to={item.path}
        className="custom-dropdown-menu"
        >
          {ItemIcon && <ItemIcon />} {item.name} {/* 添加图标 */}
        </Nav.Link>
      );
    }
  });

  return (

  <>
    <BootstrapNavbar expand="lg" className="apple-navbar" fixed="top">
      <Container fluid>
        <Link to="/" className="apple-brand">
          <img src="https://static.igem.wiki/teams/5378/school-badge/liverbrainguardian.webp" className="apple-logo" alt="Logo" />
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="apple-toggler" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto apple-nav">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    {location.pathname === "/" && (
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      )}
    </>
  );
}