import { Navbar, Nav, Container, NavDropdown, Form, Button, InputGroup, Image } from "react-bootstrap";
import { BsSearch, BsBellFill, BsCaretDownFill } from "react-icons/bs";
import netflixLogo from "../assets/imgs/netflix_logo.png";
import avatarLogo from "../assets/imgs/avatar.png";
import kidsIcon from "../assets/imgs/kids_icon.png";
import { Component } from "react";
import PencislIcon from "./icons/PencilIcon";
import TransferProfileIcon from "./icons/TransferProfileIcon";
import AccountIcon from "./icons/AccountIcon";
import HelpCenterIcon from "./icons/HelpCenterIcon";

class NavbarNetflix extends Component {
  // State elevation, moved searchQuery in App.jsx
  state = {
    query: "" // To store the current value of the search input
  };

  // Update the query as the user types into the input field
  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  // Handles the submit when pressing enter in the search bar
  handleSubmit = (e) => {
    e.preventDefatult();
    this.props.onSearch(this.state.query);
  };

  // Handle the search when clicking the search btn
  handleSearch = () => {
    if (this.state.query) {
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    return (
      <Navbar expand="lg" variant="dark" fixed={this.props.page === "home" ? "top" : ""} style={{ backgroundColor: "#141414" }}>
        <Container fluid className="px-lg-5">
          <Navbar.Brand href="/">
            <Image src={netflixLogo} alt="Netflix Logo" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="/" active={this.props.page === "home"}>
                Home
              </Nav.Link>
              <Nav.Link>Tv Shows</Nav.Link>
              <Nav.Link>Movies</Nav.Link>
              <Nav.Link>Recently Added</Nav.Link>
              <Nav.Link>My List</Nav.Link>
            </Nav>

            {/* Navbar End */}
            <div className="d-flex align-items-center gap-2">
              {/* Search bar */}
              <div className="d-flex align-items-center">
                {/* Collpsible search input (horizontal) */}
                <div className="collapse collapse-horizontal" id="searchBar">
                  <InputGroup>
                    <Form.Control
                      placeholder="Titles, people, genres"
                      className="text-bg-dark border-0"
                      style={{ width: "200px" }}
                      // Update the query state when typing
                      onChange={(e) => this.setState({ query: e.target.value })}
                      // When Enter key is pressed, it will starts the Search
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          this.handleSearch();
                        }
                      }}
                    />
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
                  onClick={this.handleSearch} // Starts the Search by clicking the search btn
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
                    <Image src={avatarLogo} alt="Profile" width="32" height="32" className="rounded" />
                    <BsCaretDownFill className="text-white small ms-1" />
                  </span>
                }
                menuVariant="dark"
                align="end"
              >
                <NavDropdown.Item href="#">
                  <Image src={kidsIcon} width="24" height="24" className="rounded me-2" alt="Kids Icon" />
                  Kids
                </NavDropdown.Item>
                {/* onClick to select the Profile Page */}
                <NavDropdown.Item onClick={() => this.props.onPageSelect("profile")}>
                  <PencislIcon />
                  Manage Profiles
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <TransferProfileIcon />
                  Transfer Profile
                </NavDropdown.Item>
                {/* onClick to select the Account Page */}
                <NavDropdown.Item onClick={() => this.props.onPageSelect("account")}>
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
