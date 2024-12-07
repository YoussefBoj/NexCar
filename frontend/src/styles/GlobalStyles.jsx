import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 1.6; 
    background: linear-gradient(135deg, #2c2c2c, #1a1a1a, #6a0dad);
    background-size: 400% 400%;
    background-attachment: fixed;
    color: #ffffff;
    min-height: 100vh;
    position: relative;
    z-index: 0;
    animation: gradientShift 15s ease infinite;
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://www.transparenttextures.com/patterns/cubes.png');
    opacity: 0.1;
    z-index: -1;
  }
    @keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
  }


  section {
    padding: 20px;
    margin: 10px auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  h1, h2, h3 {
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  }
    

  button {
    background: linear-gradient(135deg, #6a0dad, #9d50bb);
    border: none;
    padding: 10px 20px;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(154, 50, 205, 0.4);
  }
`;

export default GlobalStyles;
