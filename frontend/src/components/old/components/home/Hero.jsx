import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button'; // Assuming Button component exists
import carVideo from '../../../../assets/videos/BMW - Driving Car.mp4'; // Adjust path as needed

const Hero = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3))',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <video
        src={carVideo}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h1
          style={{
            fontSize: '160px',
            color: '#fff',
            fontWeight: 600,
            transition: '0.5s',
            WebkitTextStroke: '2px transparent',
          }}
          onMouseOver={(e) => {
            e.target.style.WebkitTextStroke = '2px #fff';
            e.target.style.color = 'transparent';
          }}
          onMouseOut={(e) => {
            e.target.style.WebkitTextStroke = '2px transparent';
            e.target.style.color = '#fff';
          }}
        >
          NexCar
        </h1>
        <ButtonWrapper>
          <Button>About</Button>
        </ButtonWrapper>
      </div>
    </div>
  );
};

// Optional: Style wrapper for button using styled-components
const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

export default Hero;
