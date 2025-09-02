import { useParams, useNavigate } from "react-router-dom";
import { INDUSTRIES } from "../data/content";
import PageHero from "../components/PageHero";
import { Container, Button } from "react-bootstrap";

export default function IndustryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const ind = INDUSTRIES.find((i) => i.slug === slug);

  if (!ind) {
    return (
      <PageHero
        title="Industry not found"
        subtitle="Please return to industries list."
        cta={
          <Button variant="secondary" onClick={() => navigate("/industries")}>
            ← Back to Industries
          </Button>
        }
      />
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={ind.title}
        subtitle={ind.intro}
        cta={
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Back
          </Button>
        }
      />
      <section className="py-4">
        <Container>
          <ul>
            {ind.items.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>

          {/* Extra Back Button at bottom */}
          <div className="mt-4">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              ← Back
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
