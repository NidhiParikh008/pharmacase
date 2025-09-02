import { Container, Row, Col, Card } from "react-bootstrap";
import PageHero from "../components/PageHero";
import { INDUSTRIES } from "../data/content";
import { Link } from "react-router-dom";

export default function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Who we serve in India"
        subtitle="Support across Pharma, MedTech, Biologics, Cosmetics, Nutrition, and Veterinary."
      />
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {INDUSTRIES.map((i) => (
              <Col md={6} lg={4} key={i.slug}>
                <Card className="h-100 border-0 shadow-sm card-hover">
                  {/* Industry Image */}
                  {i.image && (
                    <Card.Img
                      variant="top"
                      src={i.image}
                      alt={i.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}

                  <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text className="text-secondary">{i.intro}</Card.Text>
                    <Link to={`/industries/${i.slug}`} className="small">
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
