import React, { useState } from 'react';

function PayoutCalculator() {
  const [ratePerArticle, setRatePerArticle] = useState(10);
  const [articleCount, setArticleCount] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);

  const handleCalculate = () => {
    const payout = ratePerArticle * articleCount;
    setTotalPayout(payout);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80 mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Payout Calculator</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="articleCount" className="block text-sm">Number of Articles</label>
          <input
            type="number"
            id="articleCount"
            value={articleCount}
            onChange={(e) => setArticleCount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            min="0"
          />
        </div>
        <div>
          <label htmlFor="ratePerArticle" className="block text-sm">Rate per Article</label>
          <input
            type="number"
            id="ratePerArticle"
            value={ratePerArticle}
            onChange={(e) => setRatePerArticle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full py-2 bg-blue-500 text-white rounded mt-4"
        >
          Calculate Payout
        </button>
        {totalPayout > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Total Payout: ${totalPayout}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default PayoutCalculator;
