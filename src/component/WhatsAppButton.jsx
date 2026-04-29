import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../App.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923091419331"   // 👈 apna number yahan
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;