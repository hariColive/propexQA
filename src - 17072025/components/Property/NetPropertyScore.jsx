import React from 'react';

const NetPropertyScore = ({ imageUrl, score, scoreDetails, npsLink }) => {
  // scoreDetails: array of { label, value, max, color }
  return (
    <div className="flex bg-white rounded-xl shadow p-4 gap-6 items-center">
      <div>
        <img src={imageUrl} alt="Property" className="rounded-lg w-56 h-56 object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl mb-1">Net Property Score</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold">{score.value}</span>
              <span className="text-pink-500 text-xl">{'★'.repeat(Math.round(score.value))}{'☆'.repeat(5 - Math.round(score.value))}</span>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {scoreDetails.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center text-sm font-medium mb-1">
                <span>{item.label}</span>
                <span className="font-bold">{item.value}/{item.max}</span>
              </div>
              <div className="w-full h-2 rounded bg-gray-200 mb-2">
                <div
                  className="h-2 rounded"
                  style={{
                    width: `${(item.value / item.max) * 100}%`,
                    background: item.color || '#ef0073',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-right text-sm">
          To know more about NPS score <a href={npsLink} className="text-pink-600 font-semibold underline">Click here</a>
        </div>
      </div>
    </div>
  );
};

export default NetPropertyScore; 