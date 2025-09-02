import { Container, Row, Col, Card } from "react-bootstrap";

export default function SectionCards({ eyebrow, title, items }){
  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-4">
          {eyebrow && <span className="badge-soft">{eyebrow}</span>}
          <h2 className="mt-2">{title}</h2>
        </div>
        <Row className="g-4">
          {items.map((it, idx)=>(
            <Col md={6} lg={4} key={idx}>
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Body>
                  <Card.Title>{it.title}</Card.Title>
                  <Card.Text className="text-secondary">{it.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
