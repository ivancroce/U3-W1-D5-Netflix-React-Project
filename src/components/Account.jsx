import { Component } from "react";
import NavbarNetflix from "./NavbarNetflix";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import avatarLogo from "../assets/imgs/avatar.png";

class Account extends Component {
  render() {
    return (
      <>
        <NavbarNetflix />
        {/* Main content */}
        <Container>
          <Row className="justify-content-center px-1">
            <Col xs={12} md={8}>
              <Row className="mt-5">
                <Col>
                  <h2>Account</h2>
                  <hr className="border-bottom border-dark" />
                </Col>
              </Row>
              {/* Membership & Billing */}
              <Row className="mb-4">
                <Col md={4} lg={3}>
                  <h6 className="text-secondary opacity-75">MEMBERSHIP & BILLING</h6>
                  <Button
                    variant="light"
                    className="text-black border-0 rounded-0 shadow-sm px-4 py-2"
                    style={{ fontSize: "0.9rem", backgroundColor: "#e0e0e0" }}
                  >
                    Cancel Membership
                  </Button>
                </Col>
                <Col md={8} lg={9}>
                  <Row>
                    <Col md={8}>
                      <p className="fw-bold mb-2">student@strive.school</p>
                      <p className="text-secondary mb-2">Password: ********</p>
                      <p className="text-secondary mb-2">Phone: 321 044 1279</p>
                    </Col>
                    <Col md={4} className="text-md-end d-flex flex-column">
                      <a href="#" className="mb-2 text-decoration-none">
                        Change account email
                      </a>
                      <a href="#" className="mb-2 text-decoration-none">
                        Change password
                      </a>
                      <a href="#" className="text-decoration-none">
                        Change phone number
                      </a>
                    </Col>
                  </Row>
                  <hr className="border-bottom border-dark" />
                  <Row className="pb-2">
                    <Col md={8} className="d-flex align-items-center pb-4">
                      <Image
                        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                        alt="PayPal Logo"
                        height={20}
                        className="me-3"
                      />
                      <span className="fw-bold">admin@strive.school</span>
                    </Col>
                    <Col md={4} className="text-md-end d-flex flex-column">
                      <a href="#" className="mb-2 text-decoration-none">
                        Update payment info
                      </a>
                      <a href="#" className="text-decoration-none">
                        Billing details
                      </a>
                    </Col>
                  </Row>
                  <hr className="border-bottom border-dark" />
                  <Row className="justify-content-end pb-0 pt-0">
                    <Col xs={12} md={8} className="text-sm-end d-flex flex-column">
                      <a href="#" className="mb-2 text-decoration-none">
                        Reedem gift card or promo code
                      </a>
                      <a href="#" className="text-decoration-none">
                        Where to buy gift cards
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <hr className="border-bottom border-dark mt-0" />

              {/* Plan Details */}
              <Row>
                <Col xs={12} md={4} lg={3}>
                  <h6 className="text-secondary opacity-75">PLAN DETAILS</h6>
                </Col>
                <Col xs={12} md={8} lg={9}>
                  <Row>
                    <Col xs={12} md={8} className="d-flex">
                      <p className="fw-bold pe-2">Premium</p>
                      <Image src="https://www.dafont.com/forum/attach/orig/9/9/998457.jpg" alt="Ultra HD" height="30" />
                    </Col>
                    <Col xs={12} md={4} className="text-sm-end">
                      <a href="#" className="text-decoration-none">
                        Change plan
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <hr className="border-bottom border-dark mt-0" />

              {/* Settings */}
              <Row>
                <Col xs={12} md={4} lg={3}>
                  <h6 className="text-secondary opacity-75">SETTINGS</h6>
                </Col>
                <Col xs={12} md={8} lg={9} className="d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    Parental controls
                  </a>
                  <a href="#" className="text-decoration-none">
                    Test participation
                  </a>
                  <a href="#" className="text-decoration-none">
                    Manage download devices
                  </a>
                  <a href="#" className="text-decoration-none">
                    Activate a device
                  </a>
                  <a href="#" className="text-decoration-none">
                    Recent device streaming activity
                  </a>
                  <a href="#" className="text-decoration-none">
                    Sign out of all devices
                  </a>
                </Col>
              </Row>

              <hr className="border-bottom border-dark mt-2" />

              {/* My Profile */}
              <Row>
                <Col xs={12} md={4} lg={3}>
                  <h6 className="text-secondary opacity-75 pt-1">MY PROFILE</h6>
                </Col>
                <Col xs={12} md={8} lg={9}>
                  <Row className="mb-4">
                    <Col xs={12} md={8} className="d-flex align-items-center">
                      <Image src={avatarLogo} alt="Profile" width={32} height={32} rounded className="me-2" />
                      <span className="fw-bold">Strive Student</span>
                    </Col>
                    <Col xs={12} md={4} className="text-sm-end d-flex flex-column">
                      <a href="#" className="text-decoration-none">
                        Manage profiles
                      </a>
                      <a href="#" className="text-decoration-none">
                        Add profile email
                      </a>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={6} className="d-flex flex-column">
                      <a href="#" className="text-decoration-none">
                        Language
                      </a>
                      <a href="#" className="text-decoration-none">
                        Playback settings
                      </a>
                      <a href="#" className="text-decoration-none">
                        Subtitle appearance
                      </a>
                    </Col>
                    <Col xs={6} md={6} className="d-flex flex-column px-0">
                      <a href="#" className="text-decoration-none">
                        Viewing activity
                      </a>
                      <a href="#" className="text-decoration-none">
                        Ratings
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Account;
