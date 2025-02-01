import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SetupOrganization.css"; // Importing the separate CSS file

const SetupOrganization = () => {
  const [form, setForm] = useState({ name: "", website: "", description: "" });
  const [scrapedPages, setScrapedPages] = useState([]);
  const [selectedPageData, setSelectedPageData] = useState(null);
  const navigate = useNavigate();

  const dummyScrapedData = [
    { url: "https://example.com/about", status: "Scraped", chunks: ["About us section", "Company history", "Mission statement"] },
    { url: "https://example.com/services", status: "Pending", chunks: [] },
    { url: "https://example.com/contact", status: "Scraped", chunks: ["Address", "Phone number", "Email"] },
  ];

  useEffect(() => {
    setScrapedPages(dummyScrapedData);
  }, []);

  const fetchMetaDescription = async () => {
    if (!form.website) return;
    try {
      const response = await fetch(`https://api.example.com/get-meta?url=${form.website}`);
      const data = await response.json();
      setForm((prev) => ({ ...prev, description: data.metaDescription || "No description found." }));
    } catch {
      setForm((prev) => ({ ...prev, description: "Failed to fetch meta description." }));
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organization Data:", form);
    navigate("/training-status");
  };

  return (
    <div className="organization-container">
      <div className="organization-box">
        <h2 className="organization-title">Setup Organization</h2>
        <form onSubmit={handleSubmit} className="organization-form">
          <input type="text" name="name" placeholder="Company Name" onChange={handleChange} className="organization-input" required />
          <input type="url" name="website" placeholder="Company Website URL" onChange={handleChange} onBlur={fetchMetaDescription} className="organization-input" required />
          <textarea name="description" placeholder="Company Description" value={form.description} onChange={handleChange} className="organization-textarea" required />
          <button type="submit" className="organization-button">Continue</button>
        </form>

        <h3 className="detected-pages-title">Detected Webpages</h3>
        <ul className="organization-list">
          {scrapedPages.map((page, index) => (
            <li key={index} className={page.status === "Scraped" ? "scraped-item" : "pending-item"} onClick={() => setSelectedPageData(page)}>
              {page.url} - {page.status}
            </li>
          ))}
        </ul>

        {selectedPageData && (
          <div className="organization-modal">
            <h4 className="modal-title">Scraped Data from {selectedPageData.url}</h4>
            <ul className="modal-list">
              {selectedPageData.chunks.length ? selectedPageData.chunks.map((chunk, i) => <li key={i}>{chunk}</li>) : <p>No data scraped yet.</p>}
            </ul>
            <button onClick={() => setSelectedPageData(null)} className="modal-close-button">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetupOrganization;