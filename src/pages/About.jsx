import PageHero from "../components/PageHero";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaShieldAlt, FaClock, FaClipboardCheck, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About MedReg India"
        subtitle="We help life sciences teams navigate India’s regulatory and safety landscape with clarity and speed."
      />

      <section className="about-section">
        <Container>
          <Row className="align-items-center g-5">
            {/* Left Side - Who We Are + Mission */}
            <Col lg={6}>
              <h2 className="about-heading">Who We Are</h2>
              <p className="about-text">
                Our specialists bring experience in dossier authoring, regulatory ops, safety case handling, and access strategy. 
                We run documented processes with QA controls and clear communication.
              </p>
              <p className="about-text">
                Engagement models range from point services to managed services with outcome-based milestones.
              </p>

              <h2 className="about-heading mt-4">Our Mission</h2>
              <p className="about-text">
                Our mission is to assist companies in navigating the intricate and constantly changing landscape of regulatory compliance and legal obligations, providing support at every level. 
              </p>
              <p className="about-text">
                The PHARMACASE solution team possesses extensive knowledge and expertise in compliance management, regulatory affairs, and industry-specific regulations. 
                We are dedicated to delivering thorough regulatory services that reflect our current understanding of the latest regulatory changes and provide actionable guidance.
              </p>
              <p className="about-text">
                With over 15 years of extensive experience in Drugs, Biological, Complex generic medicine etc., we recognize regulatory compliance as a crucial element for the success and sustainability of any business.
              </p>
              <p className="about-text">
                At PHARMACASE solution, we alleviate the challenges of business registration by leveraging our expertise in managing Drugs, Biologicals, Medical devices, In Vitro diagnostics, Cosmetics, and Veterinary products through effective regulatory solutions.
              </p>
            </Col>

            {/* Right Side - Principles */}
            <Col lg={6}>
              <h2 className="about-heading">Our Principles</h2>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="principle-card">
                    <Card.Body>
                      <FaShieldAlt className="principle-icon" />
                      <h5>Compliance & Safety</h5>
                      <p>Patient safety and compliance first, always.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="principle-card">
                    <Card.Body>
                      <FaClock className="principle-icon" />
                      <h5>Timely Delivery</h5>
                      <p>Transparent timelines with clear expectations.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="principle-card">
                    <Card.Body>
                      <FaClipboardCheck className="principle-icon" />
                      <h5>Quality Management</h5>
                      <p>Audit readiness & strict QA controls.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="principle-card">
                    <Card.Body>
                      <FaUsers className="principle-icon" />
                      <h5>Collaboration</h5>
                      <p>Efficient teamwork with clear documentation.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Custom Modern Styling */}
      <style jsx>{`
        .about-section {
          background: linear-gradient(180deg, #f9fafb, #f3f4f6);
          padding: 60px 0;
        }

        .about-heading {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .about-text {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .principle-card {
          border: none;
          border-radius: 12px;
          padding: 20px;
          background: #ffffff;
          box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .principle-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.15);
        }

        .principle-icon {
          font-size: 2rem;
          color: #3b82f6; /* blue accent */
          margin-bottom: 10px;
        }

        .principle-card h5 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1e293b;
        }

        .principle-card p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }
      `}</style>
    </>
  );
}
