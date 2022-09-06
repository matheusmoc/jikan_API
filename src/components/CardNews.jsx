import React from "react";
import { useState } from "react";
import { Spinner, Container, Row } from "react-bootstrap";
import guts from "../images/profile-guts.png";
const CardNews = ({ props }) => {

  
  return (
    <>
      <Container>
        {props.length === 0 && (
          <>
            <div className="loading">
              <Spinner
                className="loading-element"
                animation="border"
                role="status"
              ></Spinner>
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        )}
      </Container>

      <section className="section-cards mt-5">
        <div className="container">
          <div className="row">

            {props.map((newsTerm) => (
              <div className="card bg-dark text-light m-4 p-3">
                <Row>
                  <div className="col">
                    <img
                      style={{
                        borderRadius: "100%",
                        width: "180px",
                        height: "180px",
                      }}
                      src={guts}
                      alt=""
                      className="card-img-top img-thumbnail"
                    />
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <h2 className="card-title">{newsTerm.author_username}</h2>
                      <p className="h5 card-text pt-5">{newsTerm.title}</p>
                      <p className="card-text">
                        <small className="text-muted float-end pt-5">{newsTerm.date}</small>
                      </p>
                    </div>
                  </div>
                </Row>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default CardNews;
