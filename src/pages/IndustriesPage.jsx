import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { usePersonalization } from "../context/PersonalizationContext";
import { useNavigate } from "react-router-dom";

export default function IndustriesPage() {
  const { filtered } = usePersonalization();
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-3">Industries</h1>
        <Row className="g-4">
          {filtered.industries.map((i, idx) => (
            <Col md={6} lg={4} key={idx}>
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
                  <Card.Text className="text-secondary">{i.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Back Button */}
        <div className="mt-4">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Back
          </Button>
        </div>
      </Container>
    </section>
  );
}
