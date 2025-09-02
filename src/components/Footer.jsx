import { Container, Row, Col } from "react-bootstrap";
import { FOOTER } from "../data/content";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer pt-5 mt-5">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5>PHARMACASE Solution </h5>
            <p className="text-light">
              Regulatory, PV, and market access services for life sciences in
              India.
            </p>
            <div className="small">
              <strong>Address:</strong> {FOOTER.contact.address}
              <br />
              <strong>Contact No:</strong> {FOOTER.contact.phone} <br />
               {FOOTER.contact.email}
            </div>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              {FOOTER.quickLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={4}>
            <h6>Follow us</h6>
            <div className="d-flex gap-3 social">
              <a href={FOOTER.socials.facebook} aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
              <a href={FOOTER.socials.instagram} aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href={FOOTER.socials.linkedin} aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href={FOOTER.socials.youtube} aria-label="YouTube">
                <FaYoutube size={22} />
              </a>
              <a href={FOOTER.socials.whatsapp} aria-label="WhatsApp">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-light my-4" />
        <div className="text-center pb-2 small">
          © {year} PHARMACASE Solution. All rights reserved.
        </div>
        <div className="text-center pb-4 small">
          Developed & Designed by <strong>Nidhi Parikh</strong>
        </div>
      </Container>
    </footer>
  );
}
