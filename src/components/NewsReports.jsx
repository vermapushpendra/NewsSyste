import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

function NewsReports() {
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const apiKey = "31fd0240dd4a41c9b37b37e6069c06b0";
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.articles) {
                    console.log("Fetched articles:", data.articles);
                    setNews(data.articles);
                    setFilteredNews(data.articles);
                } else {
                    setError("No articles found");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch news");
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setFilteredNews(
            news.filter((article) =>
                article?.title?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, news]);

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">News Reports</h2>


            <div className="my-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full sm:w-1/3"
                    placeholder="Search news by title"
                />
            </div>

            {/* Loading and Error States */}
            {loading && <p>Loading news...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* News Section */}
            <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Latest News</h3>
                <div className="space-y-4">
                    {filteredNews.length > 0 ? (
                        filteredNews.map((article, index) => {
                            if (!article || !article.title || !article.description || !article.url) {
                                console.error("Invalid article data:", article);
                                return null;
                            }
                            return <NewsCard key={index} article={article} />;
                        })
                    ) : (
                        <p>No articles found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsReports;
