import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function SiteNavbar() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const initialQ = new URLSearchParams(search).get("q") || "";
  const [q, setQ] = useState(initialQ);

  useEffect(() => {
    setQ(initialQ);
  }, [initialQ]);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-text">
            PHARMACASE <span>Solution</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/industries">
                Industries
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex ms-lg-3 mt-3 mt-lg-0 search-form" onSubmit={onSubmit}>
              <Form.Control
                type="search"
                placeholder="Search…"
                className="search-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <Button className="search-btn" aria-label="Search" type="submit">
                <FaSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/917016978006?text=Hello%20MedReg%20India%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

      {/* Custom CSS inside same file */}
      <style jsx>{`
        .custom-navbar {
          background: linear-gradient(90deg, #6d28d9, #db2777); /* Purple → Pink */
          padding: 12px 0;
          box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.25);
        }

        .brand-text {
          font-weight: 700;
          font-size: 1.5rem;
          color: #fff !important;
          letter-spacing: 0.5px;
        }
        .brand-text span {
          color: #facc15; /* Golden accent */
        }

        .nav-links .nav-link {
          color: #f3f4f6 !important; /* Light gray */
          font-weight: 500;
          margin: 0 12px;
          transition: all 0.3s ease;
        }

        .nav-links .nav-link:hover,
        .nav-links .nav-link.active {
          color: #facc15 !important; /* Golden on hover/active */
        }

        .search-form {
          display: flex;
          align-items: center;
        }

        .search-input {
          border-radius: 25px 0 0 25px;
          border: none;
          padding: 8px 15px;
          font-size: 0.9rem;
          outline: none;
        }

        .search-btn {
          border-radius: 0 25px 25px 0;
          border: none;
          background: #facc15; /* Gold button */
          color: #1e293b;
          font-weight: bold;
          padding: 0 15px;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background: #eab308; /* Darker gold on hover */
        }

        /* ✅ WhatsApp Floating Button */
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #25d366;
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          padding: 12px 16px;
          border-radius: 50%;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .whatsapp-float:hover {
          background: #1ebe5b;
        }
      `}</style>
    </>
  );
}
