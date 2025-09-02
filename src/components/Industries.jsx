import { Container, Row, Col, Card } from "react-bootstrap";
import { usePersonalization } from "../context/PersonalizationContext";

export default function Industries(){
  const { filtered } = usePersonalization();

  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-4">
          <span className="badge-soft">Who we serve</span>
          <h2 className="mt-2">Industries</h2>
        </div>
        <Row className="g-4">
          {filtered.industries.map((i,idx)=>(
            <Col md={6} lg={4} key={idx}>
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Body>
                  <div className="fs-1 text-primary mb-2">{i.icon}</div>
                  <Card.Title>{i.title}</Card.Title>
                  <Card.Text className="text-secondary">{i.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
