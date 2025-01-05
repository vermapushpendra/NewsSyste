import React from "react";
import PropTypes from "prop-types";

function NewsCard({ article = {} }) {

    const { title = "No Title Available", description = "No Description Available", url = "" } = article;

    return (
        <div className="p-4 border border-gray-200 rounded shadow-sm">
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-sm text-gray-600">
                {description}
            </p>
            {url ? (
                <a
                    href={url}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read more
                </a>
            ) : (
                <span className="text-gray-500">No URL Available</span>
            )}
        </div>
    );
}


NewsCard.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
    }),
};

export default NewsCard;
