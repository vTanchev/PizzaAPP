import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <p
        style={{
          background: "#222",
          padding: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        Copyright @{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
