import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import './UserRegistration.css';

const UserRegistration = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [step, setStep] = useState(1); 
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleVerificationChange = (e) => setVerificationCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", form);
    setStep(2);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    if (verificationCode === "123456") { // Example verification code, can be replaced with actual API logic
      setIsVerified(true);
      navigate("/organization-setup");
    } else {
      alert("Invalid verification code.");
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Success:", response);
    navigate("/organization-setup");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        {step === 1 && (
          <>
            <h2 className="registration-title">Register</h2>
            <form onSubmit={handleSubmit} className="registration-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="registration-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="registration-input"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="registration-input"
              />
              <button type="submit" className="registration-button">Sign Up</button>
            </form>

            {/* Google Sign-In Button */}
            <div className="google-login-container">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                useOneTap
                theme="outline"
                shape="pill"
              />
            </div>
          </>
        )}

        {step === 2 && !isVerified && (
          <>
            <h2 className="verification-title">Email Verification</h2>
            <p className="verification-instruction">Enter the Verification code as: 123456</p>
            <form onSubmit={handleVerificationSubmit} className="verification-form">
              <input
                type="text"
                name="verificationCode"
                value={verificationCode}
                onChange={handleVerificationChange}
                placeholder="Enter verification code"
                required
                className="verification-input"
              />
              <button type="submit" className="verification-button">Verify</button>
            </form>
          </>
        )}

        {isVerified && (
          <>
            <h3 className="verified-message">Your email is verified!</h3>
            <button onClick={() => navigate("/organization-setup")} className="verified-button">
              Go to Organization Setup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserRegistration;