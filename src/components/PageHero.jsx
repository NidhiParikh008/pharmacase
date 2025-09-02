import React from "react";
import { Container } from "react-bootstrap";

const PageHero = ({ title, subtitle, background }) => {
  return (
    <section
      className="page-hero d-flex align-items-center text-white"
      style={{
        background: background || "linear-gradient(90deg, #0056b3, #003366)",
        padding: "100px 0",
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">{title}</h1>
        {subtitle && <p className="lead mt-3">{subtitle}</p>}
      </Container>
    </section>
  );
};

export default PageHero;
