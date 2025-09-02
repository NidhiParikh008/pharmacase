import { Container, Row, Col, Button, Ratio } from "react-bootstrap";
import { usePersonalization } from "../context/PersonalizationContext";

export default function Hero(){
  const { filtered } = usePersonalization();
  const hero = filtered.hero;

  return (
    <section className="section-hero py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <span className="badge-soft">Patient-Centric</span>
            <h1 className="display-5 fw-bold mt-2">{hero.title}</h1>
            <p className="lead text-muted">{hero.subtitle}</p>
            <Button href={hero.ctaHref} variant="primary" size="lg">{hero.ctaText}</Button>
          </Col>
          <Col lg={6}>
            {hero.video ? (
              <Ratio aspectRatio="16x9" className="rounded-3 shadow overflow-hidden">
                <iframe
                  title="intro"
                  src={hero.video}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Ratio>
            ) : (
              <div className="p-5 bg-white rounded-3 shadow text-center">
                <div className="display-6">Your Care. Your Journey.</div>
                <p className="text-muted mb-0">Secure, personalized experiences for every stakeholder.</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
