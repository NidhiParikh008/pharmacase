import { useLocation, Link } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import { SERVICES, INDUSTRIES } from "../data/content";

export default function SearchPage(){
  const q = new URLSearchParams(useLocation().search).get("q")?.toLowerCase().trim() || "";

  const pool = [
    ...SERVICES.map(s => ({ type:"Service", title:s.title, text:s.short, href:`/services/${s.slug}` })),
    ...INDUSTRIES.map(i => ({ type:"Industry", title:i.title, text:i.intro, href:`/industries/${i.slug}` }))
  ];

  const results = q ? pool.filter(x =>
    x.title.toLowerCase().includes(q) || x.text.toLowerCase().includes(q)
  ) : [];

  return (
    <section className="py-5">
      <Container>
        <h1 className="mb-3">Search</h1>
        {q ? <p className="text-secondary">Results for: <span className="search-highlight">{q}</span></p> : <p className="text-secondary">Type in the search bar to begin.</p>}
        <ListGroup>
          {results.map((it, i)=>(
            <ListGroup.Item key={i} className="py-3">
              <div className="small text-muted">{it.type}</div>
              <div className="fw-semibold">{it.title}</div>
              <div className="text-secondary">{it.text}</div>
              <Link to={it.href} className="small">Open →</Link>
            </ListGroup.Item>
          ))}
          {q && results.length===0 && <div className="text-secondary">No results found.</div>}
        </ListGroup>
      </Container>
    </section>
  );
}
