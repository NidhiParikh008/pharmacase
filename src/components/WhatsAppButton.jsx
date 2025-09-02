import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7567110545?text=Hello%20I%20am%20interested%20in%20your%20services" // ✅ Added default message
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <FaWhatsapp />
    </a>
  );
}
