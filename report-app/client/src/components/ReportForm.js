import React, { useState } from 'react';
// import axios from 'axios';

import '../styles/ReportForm.scss'

const ReportForm = ({ selectedTemplate }) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [pictures, setPictures] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('duration', duration);
      formData.append('location', location);
      pictures.forEach((pic) => formData.append('pictures', pic));
      
      // await axios.post('/api/v1/report', formData);
      alert('Report generated successfully');
    } catch (error) {
      console.error('Error generating report', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`report-form ${selectedTemplate}`}>
        <h2>Generate Report</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Event Duration (e.g., 2024-09-13 10:00 - 12:00)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="file"
          multiple
          onChange={(e) => setPictures([...e.target.files])}
        />
        <button type="submit">Generate Report</button>
      </form>
    </>
  );
};

export default ReportForm;
