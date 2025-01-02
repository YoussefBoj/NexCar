import React from "react";
import './Footer.css'; // Import the CSS file if it's in a separate file.

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in reiciendis quibusdam accusamus ad asperiores a! Velit voluptatibus quos sapiente ab rerum odio vitae consequatur quidem? Deleniti assumenda harum cum.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Coupe</a></li>
              <li><a href="#">Compacte</a></li>
              <li><a href="#">Citadine</a></li>
              <li><a href="#">Berline</a></li>
              <li><a href="#">Utilitaire</a></li>
              <li><a href="#">Pick Up</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Login In</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Favorite</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by{" "}
              <a href="#">NexCar</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  // Default export
