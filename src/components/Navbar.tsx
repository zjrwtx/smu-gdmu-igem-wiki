import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";


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
              {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
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
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    // <BootstrapNavbar expand="lg" className="bg-body-tertiary" fixed="top">
    //   <Container>
    //     <BootstrapNavbar.Brand>
    //       {import.meta.env.VITE_TEAM_NAME}
    //     </BootstrapNavbar.Brand>
    //     <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        // <BootstrapNavbar.Collapse id="basic-navbar-nav">
        //   <Nav className="left-aligned">{pages}</Nav>
        // </BootstrapNavbar.Collapse>
    //   </Container>
    // </BootstrapNavbar>
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
           <BootstrapNavbar.Brand>
              {import.meta.env.VITE_TEAM_NAME}
            </BootstrapNavbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              I will take you anywhere.
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
          
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#" >
                  {pages}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
