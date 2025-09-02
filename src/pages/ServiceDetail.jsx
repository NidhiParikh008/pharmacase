import { useParams, useNavigate } from "react-router-dom";
import { SERVICES } from "../data/content";
import PageHero from "../components/PageHero";
import { Container, Button } from "react-bootstrap";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const svc = SERVICES.find((s) => s.slug === slug);

  if (!svc) {
    return (
      <PageHero
        title="Service not found"
        subtitle="Please return to services list."
        cta={
          <Button variant="secondary" onClick={() => navigate("/services")}>
            ← Back to Services
          </Button>
        }
      />
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={svc.title}
        subtitle={svc.short}
        cta={
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Back
          </Button>
        }
      />
      <section className="py-4">
        <Container>
          <p className="text-secondary">{svc.long}</p>

          {/* Handle bullets that can be strings OR grouped with headings */}
          {Array.isArray(svc.bullets) && (
            <div>
              {svc.bullets.map((b, i) => {
                // Case 1: Simple string bullet
                if (typeof b === "string") {
                  return <li key={i}>{b}</li>;
                }

                // Case 2: Grouped bullets with heading + items
                if (typeof b === "object" && b.heading && Array.isArray(b.items)) {
                  return (
                    <div key={i} className="mb-3">
                      <h5 className="fw-bold text-primary">{b.heading}</h5>
                      <ul>
                        {b.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          )}

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
