import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="main-container-footer">
      <div>
        <h3>Copyright &copy; {year}</h3>
      </div>
    </div>
  );
};

export default Footer;
