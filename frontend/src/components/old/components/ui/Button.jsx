import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button> About
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.7em 2em;
    border: 3px solid white;
    border-radius: 45px;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
    color: white;
    text-decoration: none;
    transition: 0.3s ease all;
    z-index: 1;
  }

  button:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: white;
    z-index: -1;
    border-radius: 45px;
  }

  button:hover, button:focus {
    color: black;
  }

  button:hover:before, button:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
  }

  button:active {
    transform: scale(0.9);
  }`;

export default Button;