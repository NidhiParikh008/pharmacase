import { Container } from "react-bootstrap";

export default function PageHero({ eyebrow, title, subtitle, cta }){
  return (
    <section className="section-hero py-5">
      <Container>
        {eyebrow && <span className="badge-soft">{eyebrow}</span>}
        <h1 className="display-6 fw-bold mt-2">{title}</h1>
        {subtitle && <p className="lead text-muted mb-0">{subtitle}</p>}
        {cta}
      </Container>
    </section>
  );
}
