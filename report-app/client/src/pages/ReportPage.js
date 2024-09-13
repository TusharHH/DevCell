import React, { useState } from 'react';
import ReportPreview from '../components/ReportPreview';

import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';

import '../styles/ReportPage.scss';

const ReportPage = () => {
  const [template, setTemplate] = useState('template1');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [pictures, setPictures] = useState([]);

  const handleGeneratePdf = () => {
    const reportElement = document.querySelector('.report-preview');
  
    if (!reportElement) {
      alert('No report to generate.');
      return;
    }
  
    domtoimage.toPng(reportElement)
      .then((dataUrl) => {
        const pdf = new jsPDF('p', 'mm', 'a4'); 
  
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
  
        const img = new Image();
        img.src = dataUrl;
  
        img.onload = () => {
          const imgWidth = img.width;
          const imgHeight = img.height;
  
          
          const aspectRatio = imgWidth / imgHeight;
  
          
          let newImgWidth = pdfWidth;
          let newImgHeight = newImgWidth / aspectRatio;
  
          
          if (newImgHeight > pdfHeight) {
            newImgHeight = pdfHeight;
            newImgWidth = newImgHeight * aspectRatio;
          }
  
          
          const xOffset = (pdfWidth - newImgWidth) / 2;
          const yOffset = (pdfHeight - newImgHeight) / 2;
  
          
          pdf.addImage(dataUrl, 'PNG', xOffset, yOffset, newImgWidth, newImgHeight);
          pdf.save('report.pdf');
        };
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <div className="report-page">
      <h1>Generate Report</h1>
      <form className="report-form">
        <label>
          Template:
          <select value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>
        </label>

        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Duration:
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>

        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>

        <label>
          Pictures (URLs separated by commas):
          <input
            type="text"
            value={pictures}
            onChange={(e) => setPictures(e.target.value.split(','))}
          />
        </label>

        <button type="button" onClick={handleGeneratePdf}>Download PDF</button>
      </form>

      <ReportPreview
        template={template}
        title={title}
        duration={duration}
        location={location}
        pictures={pictures}
      />
    </div>
  );
};

export default ReportPage;
