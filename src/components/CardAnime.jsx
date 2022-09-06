import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
  Container,
  Spinner,
  ButtonGroup,
  Pagination
} from "react-bootstrap";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const cardStyle = {
  width: "18rem",
  margin: "10px",
  left: "4.5rem",
};



export default function CardAnime({ anime }) {
  //offcanvas
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState([]);

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
                role="status"></Spinner>
              <span className="visually-hidden">Loading...</span>
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
              <hr />
              <ButtonGroup className="button-group">
                <Button
                  className="button-card hoverButton"
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
                  className="button-card hoverButton"
                  variant="dark"
                  onClick={(e) => handleShow(e, animeTerm)}
                  style={{
                    borderRadius: "0",
                    marginBottom: "1rem",
                  }}
                >
                  Description
                </Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      ))}
      <Offcanvas
        className="background-offcanvas"
        show={show}
        onHide={handleClose}
        placement="bottom"
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center mb-5">
          {/* <Image   width="150" roundedCircle={true} /> */}
          <p className="font-synopsis">"{detail.synopsis}..."</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
