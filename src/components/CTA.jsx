import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CTA(){
  return (
    <section className="section-cta py-5">
      <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <h3 className="mb-3 mb-lg-0">Ready to accelerate with patient-centric analytics?</h3>
        <Button as={Link} to="/contact" size="lg" variant="light">Schedule a call</Button>
      </Container>
    </section>
  );
}
