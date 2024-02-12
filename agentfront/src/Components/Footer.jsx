import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="main-container-footer">
      <div>
        <h3>Copyright &copy; {year}</h3>
        <p className="footer-owered-by-text">
          Powered By
          <span className="footer-powered-link-dgbits">
            {" "}
            <a href="https://dgbits.in">DGBITS</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
