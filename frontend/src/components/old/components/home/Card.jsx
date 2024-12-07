import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <br />
      <br />
      <h1 className="section-title">Our Special Dishes</h1>
      <div className="card-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg
                    stroke="#ffffff"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    height="50px"
                    width="50px"
                    fill="#ffffff"
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                    <g id="SVGRepo_iconCarrier">
                      <path d="..." />
                    </g>
                  </svg>
                  <strong>Feature</strong>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content">
                  <small className="badge">Car</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Mercedes</strong>
                      </p>
                      <svg
                        fillRule="nonzero"
                        height="15px"
                        width="15px"
                        viewBox="0,0,256,256"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          style={{ mixBlendMode: 'normal' }}
                          textAnchor="none"
                          fontSize="none"
                          fontWeight="none"
                          fontFamily="none"
                          strokeDashoffset={0}
                          strokeDasharray
                          strokeMiterlimit={10}
                          strokeLinejoin="miter"
                          strokeLinecap="butt"
                          strokeWidth={1}
                          stroke="none"
                          fillRule="nonzero"
                          fill="#20c997"
                        >
                          <g transform="scale(8,8)">
                            <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="card-footer">300 mk/h &nbsp; | &nbsp; 14 cv</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .section-title {
    text-align: center;
    font-size: 2.5rem; /* Large font size */
    font-weight: bold; /* Bold text */
    margin-bottom: 30px; /* Space below the title */
    color: #333; /* Adjust color as needed */
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    grid-auto-rows: auto; /* Automatically adjust row height */
    gap: 20px; /* Space between rows and columns */
    padding: 20px;
    justify-items: center; /* Center cards horizontally */
  }

  .card {
    overflow: visible;
    width: 250px;
    height: 350px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export default Card;
