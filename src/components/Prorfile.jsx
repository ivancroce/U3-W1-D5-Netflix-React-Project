import { Component } from "react";
import { Navbar, Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import netflixLogo from "../assets/imgs/netflix_logo.png";
import { PencilFill } from "react-bootstrap-icons";

const languages = ["English", "Italian", "Spanish", "Portuguese", "French", "Deutsch"];

class Profile extends Component {
  state = {
    selectedLanguage: "English"
  };

  render() {
    return (
      <>
        {/* Navbar */}
        <Navbar expand="lg" variant="dark" className="navbar-profile">
          <Container fluid>
            <Navbar.Brand href="/" style={{ cursor: "pointer" }}>
              <img src={netflixLogo} alt="Netflix Logo" width="120" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="py-5 text-white">
          <Row className="justify-content-center px-1">
            <Col xs={12} md={8} lg={6} className="px-0">
              {/* Edit Profile */}
              <Row className="mb-3">
                <Col>
                  <h1 className="border-bottom border-secondary display-3 fw-medium" style={{ letterSpacing: "2px" }}>
                    Edit Profile
                  </h1>
                </Col>
              </Row>
              {/* Sezione profilo */}
              <Row className="mb-4">
                {/* Immagine */}
                <Col xs={12} sm={4} md={3} className="mb-3 mb-sm-0">
                  <div className="position-relative">
                    <img
                      src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
                      alt="Profile"
                      className="img-fluid rounded"
                    />
                    <div
                      className="position-absolute ms-1 mb-1 bottom-0 start-0 bg-dark border border-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "25px", height: "25px" }}
                    >
                      <PencilFill style={{ width: "12px", height: "12px" }} />
                    </div>
                  </div>
                </Col>
                {/* Profile Form */}
                <Col xs={12} sm={8} md={9} className="pe-5">
                  <Form.Control type="text" className="bg-secondary text-white border-0 rounded-0 mb-3" defaultValue="Strive Student" />
                  {/* Dropdown Language */}
                  <div className="mt-4">
                    <Form.Label className="fs-5">Language:</Form.Label>
                    <Dropdown className="mt-2 pb-4">
                      <Dropdown.Toggle variant="dark" className="rounded-0 px-4 py-1 fs-6 text-white bg-black border-light" style={{ letterSpacing: "1px" }}>
                        {this.state.selectedLanguage}
                      </Dropdown.Toggle>
                      <Dropdown.Menu variant="dark">
                        {languages.map((lang) => (
                          <Dropdown.Item key={lang} onClick={() => this.setState({ selectedLanguage: lang })}>
                            {lang}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* Maturity Settings */}
                  <div className="border-top border-secondary pt-4 mt-3">
                    <h5 className="fw-light">Maturity Settings:</h5>
                    <div className="mb-3 mt-2">
                      <Button variant="dark" className="text-white rounded-0 fw-semibold" style={{ letterSpacing: "1px" }}>
                        ALL MATURITY RATINGS
                      </Button>
                    </div>
                    <p>
                      Show titles of <strong>all maturity ratings</strong> for this profile.
                    </p>
                    <div className="pb-3">
                      <Button variant="outline-secondary" className="text-secondary rounded-0 px-4 py-1" style={{ letterSpacing: "2px" }}>
                        EDIT
                      </Button>
                    </div>
                  </div>
                  {/* Autoplay Controls */}
                  <div className="border-top border-secondary pt-4 mt-3">
                    <h5 className="fw-light">Autoplay controls</h5>

                    <Form.Check type="checkbox" id="autoplay1" className="mb-2 d-flex align-items-center">
                      <Form.Check.Input type="checkbox" className="bg-transparent border-secondary text-secondary p-3" id="autoplay1" name="autoplay1" />
                      <Form.Check.Label className="text-white ms-2" htmlFor="autoplay1">
                        Autoplay next episode in a series on all devices.
                      </Form.Check.Label>
                    </Form.Check>

                    <Form.Check type="checkbox" id="autoplay2" className="mb-2 d-flex align-items-center">
                      <Form.Check.Input type="checkbox" className="bg-transparent border-secondary text-secondary p-3" id="autoplay2" name="autoplay2" />
                      <Form.Check.Label className="text-white ms-2" htmlFor="autoplay2">
                        Autoplay previews while browsing on all devices.
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                </Col>
              </Row>

              {/* Buttons */}
              <div className="border-top border-secondary pt-4 mt-4">
                <Row className="gx-3">
                  <Col xs={12} sm={4} md={3}>
                    <Button variant="light" className="text-black fw-bold text-uppercase px-4 rounded-0 w-100" style={{ letterSpacing: "2px" }}>
                      Save
                    </Button>
                  </Col>
                  <Col xs={12} sm={4} md={3}>
                    <Button variant="outline-secondary" className="text-uppercase text-secondary rounded-0 w-100" style={{ letterSpacing: "2px" }}>
                      Cancel
                    </Button>
                  </Col>
                  <Col xs={12} sm={4} md={6}>
                    <Button variant="outline-secondary" className="text-uppercase text-secondary rounded-0 w-100" style={{ letterSpacing: "2px" }}>
                      Delete Profile
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
