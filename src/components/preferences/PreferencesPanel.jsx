import { useState } from "react";
import { Button, Modal, Form, Badge } from "react-bootstrap";
import { usePersonalization } from "../../context/PersonalizationContext";
import { FaUserCog } from "react-icons/fa";

const ALL_TAGS = [
  {key:"ai", label:"AI"},
  {key:"analytics", label:"Analytics"},
  {key:"cloud", label:"Cloud"},
  {key:"security", label:"Security"},
  {key:"compliance", label:"Compliance"},
  {key:"experience", label:"Patient Experience"},
  {key:"data", label:"Data Engineering"},
  {key:"lab", label:"Clinical/Lab"},
  {key:"quality", label:"Quality"},
];

export default function PreferencesPanel(){
  const { persona, setPersona, interests, setInterests } = usePersonalization();
  const [open, setOpen] = useState(false);

  const toggleTag = (key)=>{
    setInterests((prev)=> prev.includes(key) ? prev.filter(t=>t!==key) : [...prev, key]);
  };

  return (
    <>
      <Button variant="outline-light" onClick={()=>setOpen(true)} title="Personalize">
        <FaUserCog className="me-2"/> Personalize
      </Button>
      <Modal show={open} onHide={()=>setOpen(false)} centered>
        <Modal.Header closeButton><Modal.Title>Personalize your experience</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Who are you?</Form.Label>
              <div className="d-flex gap-2">
                {["patient","provider","pharma"].map(p=>(
                  <Form.Check
                    key={p}
                    type="radio"
                    id={`persona-${p}`}
                    name="persona"
                    label={p[0].toUpperCase()+p.slice(1)}
                    checked={persona===p}
                    onChange={()=>setPersona(p)}
                  />
                ))}
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select interests</Form.Label>
              <div className="d-flex flex-wrap gap-2">
                {ALL_TAGS.map(t=>(
                  <Badge
                    key={t.key}
                    bg={interests.includes(t.key) ? "primary" : "secondary"}
                    style={{cursor:"pointer"}}
                    onClick={()=>toggleTag(t.key)}
                  >
                    {t.label}
                  </Badge>
                ))}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setOpen(false)}>Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
