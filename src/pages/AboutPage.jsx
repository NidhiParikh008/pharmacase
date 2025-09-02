import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutPage(){
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h1>About CareNexa</h1>
            <p className="text-secondary">
              We are a healthcare & life-sciences technology partner focused on patient-centric design, validated data pipelines, and measurable clinical & business outcomes.
            </p>
            <p className="text-secondary">
              Our teams bring expertise across AI/ML, data engineering, interoperability, pharmacovigilance, and compliance.
            </p>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5>Principles</h5>
                <ul className="mb-0">
                  <li>Safety, privacy, and ethics by design</li>
                  <li>Clinical empathy and accessibility</li>
                  <li>Security & compliance without friction</li>
                  <li>Outcomes that are measurable and repeatable</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
