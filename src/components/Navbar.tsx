// import Nav from "react-bootstrap/Nav";
// import BootstrapNavbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
// import Pages from "../pages.ts";
// import { Container } from "react-bootstrap";


// export function Navbar() {
//   const pages = Pages.map((item, pageIndex) => {
//     if ("folder" in item && item.folder) {
//       const folderItems = item.folder.map((subpage, subpageIndex) => {
//         if (subpage.path) {
//           return (
//             <NavDropdown.Item
//               key={`subpage-${pageIndex}-${subpageIndex}`}
//               as={Link}
//               to={subpage.path}
//               className="custom-dropdown-menu"
//             >
//               {subpage.name}
//             </NavDropdown.Item>
//           );
//         }
//       });
//       return (
//         <NavDropdown
//           key={`page-${pageIndex}`}
//           title={item.name}
//           id="basic-nav-dropdown"
//           className="custom-dropdown-menu"
//         >
//           {folderItems}
//         </NavDropdown>
//       );
//     } else if ("path" in item && item.path) {
//       return (
//         <Nav.Link 
//         key={`page-${pageIndex}`} as={Link} to={item.path}
//         className="custom-dropdown-menu"
//         >
//           {item.name}
//         </Nav.Link>
//       );
//     }
//   });

//   return (

//     // 这部分是顶部展开navBar
//     <BootstrapNavbar expand="lg" className="bg-body-tertiary" fixed="top">
//       <Container>
//         <BootstrapNavbar.Brand className="left-aligned">
//           {/* {import.meta.env.VITE_TEAM_NAME} */}
//           <img src="https://static.igem.wiki/teams/5378/lesser-panda/logo.webp" className="navbar-img" />
//         </BootstrapNavbar.Brand>
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="custom-nav-item">{pages}</Nav>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>


//   );
// }




import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import { Container } from "react-bootstrap";
import "./Navbar.css"; // 添加这行来引入自定义 CSS 文件

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
    <BootstrapNavbar expand="lg" className="bg-body-tertiary custom-navbar" fixed="top">
      <Container>
        <BootstrapNavbar.Brand className="left-aligned">
          <img src="https://static.igem.wiki/teams/5378/lesser-panda/logo.webp" className="navbar-img" alt="Logo" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
