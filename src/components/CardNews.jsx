import React from "react";
import { useState } from "react";
import { Spinner, Container } from "react-bootstrap";

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

      <section className="section-cards mt-5 parallax">
        <div className="container">
          <div className="row">

            {props.map((newsTerm) => (
              <div className="card col-sm-6 col-md-3">
                <img src="" alt="" className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">{newsTerm.author_username}</h2>
                  <p className="h5 card-text">{newsTerm.title}</p>
                  <p className="card-text">
                    <small className="text-muted">{newsTerm.date}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardNews;
