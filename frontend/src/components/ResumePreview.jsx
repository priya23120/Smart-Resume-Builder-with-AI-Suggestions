import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ResumePreview = ({ resume }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div className="mt-6">
      <div ref={componentRef} className="p-4 border rounded bg-gray-50">
        <h1 className="text-xl font-bold">{resume.name}</h1>
        <p>{resume.email} | {resume.phone}</p>
        <p><strong>Education:</strong> {resume.education}</p>
        <p><strong>Experience:</strong> {resume.experience}</p>
        <p><strong>Skills:</strong> {resume.skills}</p>
      </div>
      <button onClick={handlePrint} className="mt-2 bg-green-500 text-white p-2 rounded">Export as PDF</button>
    </div>
  );
};

export default ResumePreview;