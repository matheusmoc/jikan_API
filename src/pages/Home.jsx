import React from "react";
import img from "../images/home-slider.jpg";
import CardNews from "../components/CardNews";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  
  const [News, setNews] = useState([]);

  const getNews = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v4/manga/2/forum"
    ).then((res) => res.json());
    console.log(temp); //requisição dos dados como json

    setNews(temp.data.slice()); //pega todo array dentro de data
  };

  useEffect(() => {
    // console.log("Character List");
    getNews();
  }, []);
  return (
    <>
      <div className="jumbotron jumbotron-fluid d-md-none">
        <div className="container">
          <h1 className="display-4">
            Cutting Edge <abbr title="Wordpress">WP</abbr> business theme
          </h1>
          <p className="lead">
            Gutful of bottlo no dramas he's got a massive hooroo.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Buy it now
          </a>

          <h1 className="display-4">Very photo, such waves, wow.</h1>
          <p className="lead">
            A very artsy photo with waves crashing over rocks. So /emosh.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Beer me!
          </a>
        </div>
      </div>

      <div
        id="corouselHome"
        className="carousel slide d-none d-md-block"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#corouselHome"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#corouselHome" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <p className="h5">CUTTING EDGE WP BUSINESS THEME</p>
              <p className="carousel-text">
                Gutful of bottlo no dramas he's got a massive hooroo.
              </p>
              <a href="#" className="btn mb-5">
                BUY IT NOW
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <p className="h5">VERY PHOTO, SUCH WAVES, WOW.</p>
              <p className="carousel-text">
                A very artsy photo with waves crashing over rocks. So /emosh.
              </p>
              <a href="#" className="btn mb-5">
                BEER ME!
              </a>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#corouselHome"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#corouselHome"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      
      <section className="section-quote">
        <Container style={{padding: '50px'}}>
          <Row>
            <div className="col-10 offset-1">
              <figure>
                <h2>News</h2>
                <figcaption>Nam mi enim, auctor non ultricies.</figcaption>
              </figure>
            </div>
          </Row>
        </Container>
      </section>

      <CardNews props={News} />
    </>
  );
}
