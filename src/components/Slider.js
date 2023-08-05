import React from "react";

export default function Slider() {
  return (
    <>
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/slide1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Our Merchandise</h5>
            <p>Check out our cool new Merchandise</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/slide2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style="color:black">Collaboration</h5>
            <p style="color:black">
              Finally we collab we new comapnaies like Dell and Apple
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/slide3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Student Learners Program</h5>
            <p>
              We supprt young minds and guide in their way to become a cool
              coder
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}
