import React from "react";

const Failure = () => {
  return (
    <div style={failurePageStyle}>
      <h2>Integration Not Detected Yet</h2>
      <p>Please try again later or contact support.</p>
    </div>
  );
};

// Styles for the page
const failurePageStyle = {
  textAlign: "center",
  padding: "50px",
  background: "#f8d7da",
  borderRadius: "8px",
};

export default Failure;
