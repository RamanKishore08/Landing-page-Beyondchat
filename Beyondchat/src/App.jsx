import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "regenerator-runtime/runtime";

import Home from "./pages/Home";
import Register from "./pages/Register";
import OrganizationSetup from "./pages/OrganizationSetup";
import TrainingStatus from "./pages/TrainingStatus";
import Integration from "./pages/Integration";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Chatbot from "./pages/Chatbot"; 

function App() {
  return (
    <GoogleOAuthProvider clientId="My Live page has the Client_Id">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/organization-setup" element={<OrganizationSetup />} />
        <Route path="/training-status" element={<TrainingStatus />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/integration-success" element={<Success />} />
        <Route path="/integration-failure" element={<Failure />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  </GoogleOAuthProvider>
  );
}

export default App;
