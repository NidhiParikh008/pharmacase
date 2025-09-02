import { useState, useRef } from "react";
import PageHero from "../components/PageHero";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ashvot7",   // 👉 replace with your EmailJS Service ID
        "template_apq3tvv",  // 👉 replace with your EmailJS Template ID
        formRef.current,
        "pM0cExg82l4vyLok3"  // 👉 replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSent(true);
          setError(false);
          formRef.current.reset(); // clear form after success
        },
        (err) => {
          console.error("FAILED...", err);
          setError(true);
        }
      );
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Tell us about your product, timeline, and goals. We’ll respond within one business day."
      />

      <section className="contact-section">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={6}>
              <Card className="contact-card">
                <Card.Body>
                  <h3 className="form-title">Send us a Message</h3>
                  <Form ref={formRef} onSubmit={onSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control name="first_name" required className="form-input" />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name="last_name" required className="form-input" />
                      </Col>
                      <Col md={12}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="user_email" required className="form-input" />
                      </Col>
                      <Col md={12}>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} name="message" required className="form-input" />
                      </Col>
                      <Col md={12}>
                        <Button type="submit" className="submit-btn">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                  {sent && (
                    <Alert className="mt-3" variant="success">
                      ✅ Thanks! Your message has been sent successfully.
                    </Alert>
                  )}
                  {error && (
                    <Alert className="mt-3" variant="danger">
                      ❌ Oops! Something went wrong. Please try again.
                    </Alert>
                  )}
                </Card.Body>
              </Card>
            </Col>

            {/* Map + Contact Info */}
            <Col lg={6}>
              <Card className="info-card">
                <Card.Body>
                  <h3 className="info-title">Our Office</h3>
                  <p className="info-item">
                    <FaMapMarkerAlt className="info-icon" /> 
                    PHARMACASE Solution, GF-16, Auro Residency, B/H Samanvay Status-II, 
                    Bil-Canal Road, Bil, Vadodara – 391410, Gujarat, India
                  </p>
                  <p className="info-item">
                    <FaPhoneAlt className="info-icon" /> +91 75 6711 0545
                  </p>
                  <p className="info-item">
                    <FaEnvelope className="info-icon" /> contact@pharmacasesolution.com
                  </p>
                </Card.Body>
                <div className="ratio ratio-16x9 rounded-bottom overflow-hidden">
                  <iframe
                    title="PHARMACASE Location"
                    src="https://www.google.com/maps?q=PHARMACASE%20Solution%20GF-16%20Auro%20Residency%20Bil%20Canal%20Road%20Vadodara%20391410&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .contact-section {
          padding: 60px 0;
          background: linear-gradient(180deg, #f9fafb, #f3f4f6);
        }
        .contact-card,
        .info-card {
          border: none;
          border-radius: 15px;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
        }
        .form-title,
        .info-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
        }
        .form-input {
          border-radius: 10px;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        .form-input:focus {
          border-color: #3b82f6;
          box-shadow: 0px 0px 6px rgba(59, 130, 246, 0.5);
        }
        .submit-btn {
          width: 100%;
          background: #3b82f6;
          border: none;
          border-radius: 10px;
          padding: 12px;
          font-size: 1rem;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        .submit-btn:hover {
          background: #2563eb;
        }
        .info-item {
          font-size: 1rem;
          color: #374151;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        .info-icon {
          color: #3b82f6;
          margin-right: 8px;
        }
      `}</style>
    </>
  );
}
