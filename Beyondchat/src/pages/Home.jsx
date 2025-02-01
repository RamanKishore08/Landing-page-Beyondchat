import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar with Logo */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/logo.png" alt="BeyondChats Logo" className="logo" />
          <span className="brand-name">BeyondChats</span>
        </div>
        <div className="nav-links">
          <Link to="https://beyondchats.com/features/">Product</Link>
          <Link to="https://beyondchats.com/pricing/">Pricing</Link>
          <Link to="https://beyondchats.com/blogs/">Resources</Link>
          <Link to="https://beyondchats.com/contact-us/">Contact Us</Link>
          <Link to="/register">
            <button className="build-chatbot-btn">Build Your Free Chatbot</button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h1>Make AI Your Brand Manager</h1>
        <p>
          Don’t let your brand lose customers. Qualify your leads to 3X your sales
          with our intelligent AI chatbot. It’s like hiring a sales manager who knows
          your business inside out and works 24/7.
        </p>
        <div className="features">
          <p>✅ Advanced Reporting</p>
          <p>✅ Intelligent Analytics</p>
          <p>✅ Business Actions</p>
          <p>✅ Language Support: 70+</p>
        </div>
        <Link to="/register">
          <button className="get-started-btn">Get a Demo →</button>
        </Link>
      </div>

      {/* Right-side AI Chatbot Illustration */}
      <div className="image-container">
        <img src="https://beyondchats.com/wp-content/uploads/2024/05/ezgif.com-svg-to-png-converter.png" alt="BeyondChats AI Chatbot" />
      </div>
    </div>
  );
};

export default Home;
