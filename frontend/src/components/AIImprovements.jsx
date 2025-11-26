import React from 'react';

const AIImprovements = ({ suggestions }) => (
  <div className="mt-4 p-4 border-l-4 border-blue-500 bg-blue-50">
    <h2 className="font-bold mb-2">AI Suggestions:</h2>
    <p>{suggestions}</p>
  </div>
);

export default AIImprovements;