import { Container, Row, Col, Card } from "react-bootstrap";
import PageHero from "../components/PageHero";
import { SERVICES } from "../data/content";
import { Link } from "react-router-dom";

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end India regulatory & PV services"
        subtitle="Advisory and execution for CDSCO submissions, vigilance, access, labeling, and quality systems."
      />

      <section className="py-5">
        <Container>
          <Row className="g-4">
            {SERVICES.map((s) => (
              <Col md={6} lg={4} key={s.slug} id={s.slug}>
                <Card className="h-100 border-0 shadow-sm card-hover">
                  {/* Service Image */}
                  {s.image && (
                    <Card.Img
                      variant="top"
                      src={s.image}
                      className="img-fluid"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}

                  <Card.Body>
                    <Card.Title>{s.title}</Card.Title>
                    <Card.Text className="text-secondary">{s.short}</Card.Text>
                    <Link to={`/services/${s.slug}`} className="small">
                      Open →
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
