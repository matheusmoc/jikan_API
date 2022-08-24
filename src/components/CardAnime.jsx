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
  left: '4.5rem'
};

const OffcanvasStyle = {

};

export default function CardAnime({ anime }) {
  //offcanvas
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (_, animeTerm) => {
    setShow(true);
    setDetail(animeTerm);
  };

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
                className="btn btn-dark hoverButton"
                variant="dark"
                onClick={(e) => handleShow(e, animeTerm)}
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
      <Offcanvas className="background-offcanva"  show={show} onHide={handleClose} placement="bottom" scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center mb-5" >
          <Image  width="150" roundedCircle={true} />
            <p className="font-synopsis">"{detail.synopsis}..."</p>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}
