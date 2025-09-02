import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { usePersonalization } from "../context/PersonalizationContext";
import { Link } from "react-router-dom";

export default function Services(){
  const { filtered } = usePersonalization();
  const list = filtered.services.slice(0,3);

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-4">
          <span className="badge-soft">What we do</span>
          <h2 className="mt-2">End-to-end data & AI services</h2>
          <p className="text-secondary">From strategy to production, delivered by a senior team.</p>
        </div>
        <Row className="g-4">
          {list.map((s,idx)=>(
            <Col md={6} lg={4} key={idx}>
              <Card className="h-100 card-hover border-0 shadow-sm">
                <Card.Body>
                  <div className="fs-1 text-primary mb-2">{s.icon}</div>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text className="text-secondary">{s.desc}</Card.Text>
                  <Button as={Link} to={s.href} variant="link" className="px-0">Learn more →</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
