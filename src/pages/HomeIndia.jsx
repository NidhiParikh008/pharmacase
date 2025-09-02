import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SectionCards from "../components/SectionCards";
import { INDIA_PAGE, SERVICES } from "../data/content";
import { Link } from "react-router-dom";
import { FaFlask, FaHeartbeat, FaIndustry } from "react-icons/fa";

export default function HomeIndia() {
  return (
    <>
      {/* Hero Section with background */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(0,60,90,0.85), rgba(0,60,90,0.85)), url('https://images.unsplash.com/photo-1581091012184-5c7b55a5f47b') center/cover",
        }}
      >
        <Container className="text-center">
          <h5 className="fw-light text-uppercase">{INDIA_PAGE.hero.eyebrow}</h5>
          <h1 className="display-4 fw-bold">{INDIA_PAGE.hero.title}</h1>
          <p className="lead mb-4">{INDIA_PAGE.hero.subtitle}</p>
          <Button
            as={Link}
            to={INDIA_PAGE.hero.ctaHref}
            size="lg"
            variant="light"
            className="fw-semibold px-4"
          >
            {INDIA_PAGE.hero.ctaText}
          </Button>
        </Container>
      </section>

      {/* Why Partner Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img
                src="/images/image4.jpg"
                alt="Pharma team"
                className="img-fluid rounded-3 shadow"
              />
            </Col>
            <Col lg={6}>
            <h2 className="fw-bold mb-3" style={{ color: "#1a1a1a" }}>
  Why Choose Us as Your Trusted Pharma Partner in India?
</h2>
              <p className="text-secondary fs-5">
                Practical support across registrations, vigilance, and access —
                built around Indian authority expectations and local operating realities.
              </p>
              <div className="mt-3 small text-muted fst-italic">{INDIA_PAGE.trustLine}</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 text-center bg-white">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <h2 className="fw-bold text-primary">200+</h2>
              <p className="text-secondary">
                Clients across pharma & medical devices
              </p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold text-primary">15+ Years</h2>
              <p className="text-secondary">
                Of combined regulatory & safety expertise
              </p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold text-primary">98%</h2>
              <p className="text-secondary">
                On-time submission success rate
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Highlights */}
      <SectionCards
        eyebrow="Highlights"
        title="India-focused execution"
        items={INDIA_PAGE.highlights.map((h) => ({
          title: h.title,
          text: h.text,
        }))}
      />

      {/* Industries We Serve */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
              Industries
            </span>
            <h2 className="mt-3 fw-bold">Who We Work With</h2>
            <p className="text-secondary">Serving global innovators across life sciences.</p>
          </div>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <FaFlask size={40} className="text-primary mb-3" />
                <h5>Pharmaceuticals</h5>
                <p className="text-muted small">End-to-end regulatory support for drug approvals.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <FaHeartbeat size={40} className="text-danger mb-3" />
                <h5>Medical Devices</h5>
                <p className="text-muted small">Guidance for compliance and safety surveillance.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <FaIndustry size={40} className="text-success mb-3" />
                <h5>Biotech</h5>
                <p className="text-muted small">Partnering with innovators in cutting-edge therapies.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    {/* Services */}
<section className="py-5 bg-white">
  <Container>
    <div className="text-center mb-5">
      <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
        What we do
      </span>
      <h2 className="mt-3 fw-bold">Key Services</h2>
      <p className="text-secondary">
        From strategy to approvals and lifecycle management, we provide
        end-to-end solutions.
      </p>
    </div>
    <Row className="g-4">
      {SERVICES.slice(0, 6).map((s) => (
        <Col md={6} lg={4} key={s.slug}>
          <Card className="h-100 border-0 shadow-sm service-card">
            {/* Display actual service image */}
            {s.image && (
              <Card.Img
                variant="top"
                src={s.image} // uses the image defined in SERVICES
                alt={s.title}
                className="service-img"
                style={{ height: "200px", objectFit: "cover" }}
              />
            )}
            <Card.Body>
              <Card.Title className="fw-semibold">{s.title}</Card.Title>
              <Card.Text className="text-secondary">{s.short}</Card.Text>
              <Button
                as={Link}
                to={`/services/${s.slug}`}
                variant="outline-primary"
                className="mt-2"
              >
                Learn more →
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <div className="text-center mt-5">
      <Button as={Link} to="/services" variant="primary" size="lg" className="px-4">
        View all services
      </Button>
    </div>
  </Container>
</section>


      {/* Testimonials */}
      <section className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-4">What Our Clients Say</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="p-4 shadow-sm border-0 h-100">
                <p className="text-muted">
                  "MedReg India has been a reliable partner for our regulatory submissions. Their team ensured smooth approvals."
                </p>
                <h6 className="mt-3 fw-semibold">– Global Pharma Leader</h6>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow-sm border-0 h-100">
                <p className="text-muted">
                  "Efficient, clear communication, and always on time. Highly recommend for safety and compliance projects."
                </p>
                <h6 className="mt-3 fw-semibold">– Medical Device Company</h6>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow-sm border-0 h-100">
                <p className="text-muted">
                  "We value their expertise and professionalism in guiding us through India’s complex regulatory landscape."
                </p>
                <h6 className="mt-3 fw-semibold">– Biotech Innovator</h6>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(90deg, #1e293b, #0f172a)",
        }}
      >
        <Container>
          <h2 className="fw-bold mb-3">Ready to bring your product to India?</h2>
          <p className="mb-4">Let’s navigate the regulatory pathway together.</p>
          <Button as={Link} to="/contact" size="lg" variant="light" className="fw-semibold px-4">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}
