import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

function Dashboard() {
  const [news, setNews] = useState([]);
  const [payout, setPayout] = useState(0);
  const [articlesCount, setArticlesCount] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredNews = news.filter((article) =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=31fd0240dd4a41c9b37b37e6069c06b0"
        );
        if (!response.ok) throw new Error("Failed to fetch news.");
        const data = await response.json();
        setNews(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const calculatePayout = () => {
    const count = parseInt(articlesCount, 10);
    if (isNaN(count) || count <= 0) {
      alert("Please enter a valid number of articles.");
      return;
    }
    setPayout(count * 5);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Payout Report", 20, 20);
    doc.text(`Total Payout: $${payout}`, 20, 40);
    doc.text(`Number of Articles: ${articlesCount}`, 20, 50);
    doc.save("payout_report.pdf");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Dashboard</h2>

      {/* Payout Calculator */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-semibold">Payout Calculator</h3>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <label htmlFor="article-count" className="text-sm font-medium">
              Article Count
            </label>
            <input
              id="article-count"
              type="number"
              value={articlesCount}
              onChange={(e) => setArticlesCount(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full sm:w-auto"
              placeholder="Enter article count"
            />
          </div>
          <button
            onClick={calculatePayout}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Calculate Payout
          </button>
        </div>
        <div className="mt-2">
          <strong>Total Payout: </strong>${payout}
        </div>
      </div>

      {/* Export as PDF */}
      <button
        onClick={handleExportPDF}
        className="p-2 bg-green-500 text-white rounded mt-4"
      >
        Export as PDF
      </button>

      {/* Search Section */}
      <div className="my-4">
        <label htmlFor="search" className="text-sm font-medium">
          Search News
        </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/3"
          placeholder="Search news by title"
        />
      </div>

      {/* News Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Latest News</h3>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 w-8 h-8 border-solid rounded-full"></div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredNews.length > 0 ? (
          <div className="space-y-4">
            {filteredNews.map((article, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded shadow-sm"
              >
                <h4 className="font-semibold text-lg">{article.title}</h4>
                <p className="text-sm text-gray-600">{article.description}</p>
                <a
                  href={article.url}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No articles found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
