import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import CTA from "../components/CTA";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { usePersonalization } from "../context/PersonalizationContext";

export default function Home(){
  const { filtered } = usePersonalization();

  return (
    <>
      <Hero />
      <Services />
      <Industries />

      {/* Highlights */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {filtered.highlights.map((h,idx)=>(
              <Col md={6} lg={4} key={idx}>
                <Card className="h-100 border-0 shadow-sm card-hover">
                  <Card.Body>
                    <Card.Title>{h.title}</Card.Title>
                    <Card.Text className="text-secondary">{h.blurb}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-white">
        <Container>
          <h3 className="mb-3">FAQs</h3>
          <Accordion>
            {filtered.faqs.map((f,idx)=>(
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>{f.q}</Accordion.Header>
                <Accordion.Body>{f.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      <CTA />
    </>
  );
}
