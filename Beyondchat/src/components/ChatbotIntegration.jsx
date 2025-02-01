import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatbotIntegration.css"; // Importing the external CSS

const ChatbotIntegration = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isIntegrationDetected, setIsIntegrationDetected] = useState(true);
  const navigate = useNavigate();

  const handleTestChatbot = () => {
    alert("Opening client's website with dummy chatbot integration.");
  };

  const handleIntegrationInstructions = () => {
    alert("Here are the instructions for integrating the chatbot on your website.");
  };

  const handleMailInstructions = () => {
    alert("Instructions are being sent to the developer.");
  };

  const handleTestIntegration = () => {
    setIsSuccess(true); 
  };

  const goToChatbot = () => {
    navigate("/chatbot"); 
  };

  return (
    <div className="page-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/logo.png" alt="BeyondChats Logo" className="logo" />
          <span className="brand-name">BeyondChats</span>
        </div>
        <div className="nav-links">
          <a href="https://beyondchats.com/features/">Product</a>
          <a href="https://beyondchats.com/pricing/">Pricing</a>
          <a href="https://beyondchats.com/blogs/">Resources</a>
          <a href="https://beyondchats.com/contact-us/">Contact Us</a>
          <a href="/register">
            <button className="build-chatbot-btn">Build Your Free Chatbot</button>
          </a>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* Text Section on the Left */}
        <div className="text-section">
          <h2>Chatbot Integration & Testing</h2>
          <h3>How It Works</h3>
          <p>
            Chatbot integration is a simple process that allows you to add an AI-powered chatbot to your website. 
            Our platform provides a seamless method to integrate the chatbot without coding experience. 
            You can easily test the integration to ensure everything works correctly. 
            Once the integration is successful, you can start engaging with your customers through the chatbot. 
            If you encounter any issues, detailed instructions are available for both integration and troubleshooting.
          </p>
        </div>

        {/* Box Section on the Right */}
        <div className="box-section">
          <div className="box">
            <div className="button-group">
              <button className="button" onClick={handleTestChatbot}>
                Test Chatbot
              </button>
              <button className="button" onClick={handleIntegrationInstructions}>
                Integrate on Your Website
              </button>
              <button className="button" onClick={handleMailInstructions}>
                Mail Instructions to Developer
              </button>
            </div>

            <div className="test-integration-button-group">
              <button className="button" onClick={handleTestIntegration}>
                Test Integration
              </button>
            </div>

            {isSuccess && (
              <div className="success-ui">
                <h3>Integration Successful!</h3>
                <button className="button" onClick={goToChatbot}>
                  Start Talking to Your Chatbot
                </button>
              </div>
            )}

            {!isIntegrationDetected && (
              <div className="failure-ui">
                <h3>Integration not detected yet. Please try again later.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntegration;