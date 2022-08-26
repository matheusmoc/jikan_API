import React from "react";

import img from "./images/home-slider.jpg";

export default function Home() {
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
          <li data-target="#corouselHome" data-slide-to="0" className="active"></li>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#corouselHome"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section className="section-quote">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <figure>
                <h2>
                  Nam mi enim, auctor non ultricies a, fringilla eu risus.
                  Praesent vitae lorem et elit tincidunt accumsan suscipit eu
                  libero.{" "}
                </h2>
                <figcaption>Nam mi enim, auctor non ultricies.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>


	
	<section className="section-cards mt-5 parallax">
        <div className="container">
            <div className="row">
                
                <div className="card col-sm-6 col-md-3">
                    <img src="img/c01.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title h5">Card title</h2>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
                 <div className="card col-sm-6 col-md-3">
                    <img src="img/c02.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title h5">Card title</h2>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
                <div className="card col-sm-6 col-md-3">
                    <img src="img/c03.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title h5">Card title</h2>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
                <div className="card col-sm-6 col-md-3">
                    <img src="img/c04.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title h5">Card title</h2>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
	</section> 
    </>
  );
}
