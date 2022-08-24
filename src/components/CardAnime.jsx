import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
  Image,
  Container,
  Spinner,
} from "react-bootstrap";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const cardStyle = {
  width: "18rem",
  margin: "10px",
  padding: "10px",
};

export default function CardAnime({ anime }) {
  //offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        {anime.length === 0 && (
          <>
            <div className="loading">
              <Spinner
                className="loading-element"
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </>
        )}
      </Container>

      {anime.map((animeTerm) => (
        <Row>
          <Col>
            <Card style={cardStyle}>
              <Card.Img
                variant="top"
                height={270}
                src={animeTerm.images.jpg.image_url}
              />
              <Card.Body>
                <Card.Title>{animeTerm.title}</Card.Title>
              </Card.Body>
              <Button
                className="hoverButton"
                style={{
                  borderRadius: "0",
                  marginBottom: "1rem",
                }}
                variant="dark"
                href={animeTerm.url}
                target="_blank"
              >
                View detail
              </Button>
              <Button
                key={animeTerm.mal_id}
                className="btn btn-dark hoverButton"
                variant="dark"
                onClick={handleShow}
                style={{
                  borderRadius: "0",
                  marginBottom: "1rem",
                }}
              >
                Description
              </Button>
            </Card>
          </Col>
        </Row>
      ))}
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex justify-content-center">
          <Image src="" width="150" roundedCircle={true} />
          <p className="mb-0"></p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
