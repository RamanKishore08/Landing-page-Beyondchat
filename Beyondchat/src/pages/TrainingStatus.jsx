import React from "react";
import { useNavigate } from "react-router-dom";
import "./TrainingStatus.css";
import { 
  FaLanguage, FaChartBar, FaLock, FaUserShield, FaTasks, FaCog, 
  FaBusinessTime, FaCommentDots, FaUsers, FaBrain, FaBook, FaHistory, 
  FaPhone, FaTools, FaHeadset, FaTag, FaSmile, FaDatabase, FaCode, FaEnvelope 
} from "react-icons/fa";

const TrainingStatus = () => {
  const navigate = useNavigate();

  const goToChatbotIntegration = () => {
    navigate("/integration");
  };

  return (
    <div>
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

      {/* Training Status Section */}
      <div className="setup-container">
        <div className="features-list">
          <h2>A truly customizable Chatbot with premium features</h2>
          <div className="features-columns">
            <ul>
              <li><FaLanguage /> Language support: 70+</li>
              <li><FaChartBar /> Intelligent Analytics</li>
              <li><FaLock /> SLA</li>
              <li><FaUserShield /> Leads generation</li>
              <li><FaTasks /> Unlimited seat capacity</li>
              <li><FaCog /> Token Authentication</li>
              <li><FaTools /> Custom features</li>
              <li><FaBusinessTime /> Business actions</li>
            </ul>
            <ul>
              <li><FaCommentDots /> Handle open-ended conversations</li>
              <li><FaUsers /> User feedback loop</li>
              <li><FaBrain /> Explainable AI modelling</li>
              <li><FaBook /> Unlimited number of stories</li>
              <li><FaHistory /> Unlimited training history</li>
              <li><FaPhone /> Call and email support</li>
              <li><FaHeadset /> Helpdesk support</li>
              <li><FaTag /> Remove Beyondchats branding</li>
            </ul>
            <ul>
              <li><FaSmile /> Prioritized indexing</li>
              <li><FaDatabase /> Scalable data and query</li>
              <li><FaCode /> Custom API calls</li>
              <li><FaEnvelope /> Daily, weekly, monthly, quarterly email reports</li>
            </ul>
          </div>
        </div>
        <div className="setup-box">
          <h2>Scraping & Training Status</h2>
          <p>Your website is being scraped, and the chatbot is being trained.</p>
          <button className="setup-button" onClick={goToChatbotIntegration}>
            Chatbot Integration
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingStatus;
