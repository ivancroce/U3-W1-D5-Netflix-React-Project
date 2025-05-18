import { Navbar, Nav, Container, NavDropdown, Form, Button, InputGroup } from "react-bootstrap";
import { BsSearch, BsBellFill, BsCaretDownFill } from "react-icons/bs";
import netflixLogo from "../assets/imgs/netflix_logo.png";
import avatarLogo from "../assets/imgs/avatar.png";
import kidsIcon from "../assets/imgs/kids_icon.png";
import { Component } from "react";
import PencislIcon from "./icons/PencilIcon";
import { PersonFillCheck } from "react-bootstrap-icons";
import TransferProfileIcon from "./icons/TransferProfileIcon";
import AccountIcon from "./icons/AccountIcon";
import HelpCenterIcon from "./icons/HelpCenterIcon";

class NavbarNetflix extends Component {
  state = {
    searchQuery: ""
  };

  render() {
    return (
      <Navbar expand="lg" variant="dark" fixed="top" style={{ backgroundColor: "#141414" }}>
        <Container fluid className="px-lg-5">
          <Navbar.Brand href="#">
            <img src={netflixLogo} alt="Netflix Logo" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link active href="#">
                Home
              </Nav.Link>
              <Nav.Link href="#">Tv Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>

            {/* Navbar End */}
            <div className="d-flex align-items-center gap-2">
              {/* Search bar */}
              {/* Extra: I need to make it works */}
              <div className="d-flex align-items-center">
                <div className="collapse collapse-horizontal" id="searchBar">
                  <InputGroup>
                    <Form.Control placeholder="Titles, people, genres" className="text-bg-dark border-0" style={{ width: "200px" }} />
                  </InputGroup>
                </div>

                {/* Btn searchBar */}
                <Button
                  variant="link"
                  className="text-white ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#searchBar"
                  aria-expanded="false"
                  aria-controls="searchBar"
                >
                  <BsSearch />
                </Button>
              </div>

              {/* KIDS */}
              <a href="#" className="text-white text-decoration-none">
                <span className="align-middle">KIDS</span>
              </a>

              {/* Bell */}
              <Button variant="link" className="text-white ">
                <BsBellFill />
              </Button>

              {/* Avatar Dropdown */}
              <NavDropdown
                id="basic-navbar-nav"
                title={
                  <span>
                    <img src={avatarLogo} alt="Profile" width="32" height="32" className="rounded" />
                    <BsCaretDownFill className="text-white small ms-1" />
                  </span>
                }
                menuVariant="dark"
                align="end"
              >
                <NavDropdown.Item href="#">
                  <img src={kidsIcon} width="24" height="24" className="rounded me-2" alt="Kids Icon" />
                  Kids
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onPageSelect("profile")}>
                  <PencislIcon />
                  Manage Profiles
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <TransferProfileIcon />
                  Transfer Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <AccountIcon /> Account
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <HelpCenterIcon /> Help Center
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Sign out of Netflix</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarNetflix;
