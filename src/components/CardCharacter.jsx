import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
  Image,
  Container,
} from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import { useState } from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "18rem",
  margin: "10px",
  padding: "10px",
};

export default function CardCharacter({ props }) {
  //offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        {props.length === 0 && (
          <>
            <Placeholder style={{ width: '18rem' }} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            {Array.from({ length: 4 }).map((_, index) => (
              <>
                <Placeholder key={index} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </>
            ))}
          </>
        )}
      </Container>

      {props.map((characterTerm) => (
        <Row>
          <Col>
            <Card style={cardStyle}>
              <Card.Img
                variant="top"
                height={270}
                src={characterTerm.images.jpg.image_url}
              />
              <Card.Body>
                <Card.Title>{characterTerm.title}</Card.Title>
              </Card.Body>
              <Button
                className="hoverButton"
                key=""
                style={{
                  borderRadius: "0",
                  marginBottom: "1rem",
                }}
                variant="dark"
                href={characterTerm.url}
                target="_blank"
              >
                View detail
              </Button>

              <Link
                to="#"
                className="btn btn-dark hoverButton"
                variant="dark"
                onClick={handleShow}
                style={{
                  borderRadius: "0",
                  marginBottom: "1rem",
                }}
              >
                Description
              </Link>

              <Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Container>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                     ""
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="d-flex justify-content-center">
                    <Image
                      src=""
                      width="150"
                      roundedCircle={true}
                    />
                    <p className="mb-0">
                      I will not close if you click outside of me.
                    </p>
                  </Offcanvas.Body>
                </Container>
              </Offcanvas>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
}
