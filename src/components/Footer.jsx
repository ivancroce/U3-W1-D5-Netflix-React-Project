import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  const columnLinks = [
    ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"],
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Center", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"]
  ];

  return (
    <Container className="text-secondary pt-5">
      {/* Social Icons */}
      <Row className="mb-4">
        <Col md={4}>
          <a href="#" className="text-secondary fs-2 me-4">
            <Facebook />
          </a>
          <a href="#" className="text-secondary fs-2 me-4">
            <Instagram />
          </a>
          <a href="#" className="text-secondary fs-2 me-4">
            <Twitter />
          </a>
          <a href="#" className="text-secondary fs-2 me-4">
            <Youtube />
          </a>
        </Col>
      </Row>

      {/* Column Links */}
      <Row className="mb-4">
        {columnLinks.map((links, index) => (
          <Col xs={6} md={4} lg key={index}>
            <div className="small">
              {links.map((text, i) => (
                <div key={i} className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Row>

      {/* Service Code btn */}
      <Row className="mb-4">
        <Col md={4}>
          <Button variant="outline-secondary" size="sm">
            Service Code
          </Button>
        </Col>
      </Row>

      {/* Copyright */}
      <Row>
        <Col md={4}>
          <p className="small text-secondary">© 1997-2019 Netflix, Inc. (xxxxxxxxxx)</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
