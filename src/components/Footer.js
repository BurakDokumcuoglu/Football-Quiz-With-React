import React from "react";
import "..//styles/footer.css";
import { FaUser } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text">© RANNAGAME ALL RIGHTS RESERVED</div>
      <div className="footer-info-container">
        <div className="footer-info">
          <FaUser color="#4f898f" size="2.5vh" className="footer-icon"></FaUser>
          <span className="footer-info-text">ONLINE: 22</span>
        </div>

        <div className="footer-info">
          <GiElectric color="#4f898f" size="2.5vh" className="footer-icon"></GiElectric>
          <span className="footer-info-text">ACTIVE TABLE: 1</span>
        </div>
      </div>
    </div>
  );
}
