import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={successPageStyle}>
      <h2>Chatbot Integration Successful!</h2>
      <button style={buttonStyle} onClick={() => navigate("/explore-admin-panel")}>
        Explore Admin Panel
      </button>
      <button style={buttonStyle} onClick={() => navigate("/start-chat")}>
        Start Talking to Your Chatbot
      </button>
    </div>
  );
};

// Styles for the page
const successPageStyle = {
  textAlign: "center",
  padding: "50px",
  background: "#d4edda",
  borderRadius: "8px",
};

const buttonStyle = {
  padding: "10px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Success;
