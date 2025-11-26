import React, { useState } from 'react';
import axios from 'axios';
import ResumePreview from './ResumePreview';
import AIImprovements from './AIImprovements';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', education: '', experience: '', skills: ''
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/resume', formData);
    setResume(res.data);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {Object.keys(formData).map(key => (
          <input 
            key={key} 
            name={key} 
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={formData[key]} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Generate Resume</button>
      </form>
      {resume && (
        <>
          <ResumePreview resume={resume} />
          <AIImprovements suggestions={resume.suggestions} />
        </>
      )}
    </div>
  );
};

export default ResumeForm;