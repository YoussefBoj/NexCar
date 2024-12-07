import React, { useRef } from "react";
import "./Slider.css";

const Slider = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    const items = sliderRef.current.children;
    sliderRef.current.append(items[0]);
  };

  const handlePrev = () => {
    const items = sliderRef.current.children;
    sliderRef.current.prepend(items[items.length - 1]);
  };

  return (
    <main className="slider-container">
      <ul className="slider" ref={sliderRef}>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">"Lossless Youths"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://i.redd.it/tc0aqpv92pn21.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">"Estrange Bond"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">"The Gate Keeper"</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        {/* Add more items as needed */}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={handlePrev}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button className="btn next" onClick={handleNext}>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </nav>
    </main>
  );
};

export default Slider;
