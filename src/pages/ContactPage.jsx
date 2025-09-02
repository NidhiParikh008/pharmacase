import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function ContactPage(){
  const [sent, setSent] = useState(false);

  const onSubmit = (e)=>{
    e.preventDefault();
    setSent(true); // demo only
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <h1>Contact Us</h1>
            <p className="text-secondary">Tell us about your goals—we’ll get back within one business day.</p>
            <Form onSubmit={onSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control required/>
                </Col>
                <Col md={6}>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required/>
                </Col>
                <Col md={12}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required/>
                </Col>
                <Col md={12}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} required/>
                </Col>
                <Col md={12}>
                  <Button type="submit" variant="primary">Send</Button>
                </Col>
              </Row>
            </Form>
            {sent && <Alert className="mt-3" variant="success">Thanks! We’ll be in touch shortly.</Alert>}
          </Col>
          <Col lg={6}>
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
              <iframea
                title="map"
                src="https://maps.google.com/maps?q=Bangalore&t=&z=12&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
