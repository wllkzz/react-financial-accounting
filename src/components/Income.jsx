import React from 'react';

function Income({ title, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-center">
        <div className="bg-gray-200 py-4 px-6 rounded-lg shadow-md">
          <div className="flex justify-center items-center">
            <p className="text-xl font-semibold truncate">{title}</p>
            <p className="ml-2 text-2xl font-bold text-green-600 truncate">${value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
