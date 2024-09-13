import React from 'react';
import '../styles/ReportPreview.scss';

const ReportPreview = ({ template, title, duration, location, pictures }) => {
  return (
    <div className={`report-preview ${template}`} id="pdf-preview">
      <h2>Report Preview - {template}</h2>
      <div className={template}>
        <div className="header">{title}</div>
        <div className="details">
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Location:</strong> {location}</p>
        </div>
        <div className="pictures">
          {pictures.map((pic, index) => (
            <img key={index} src={pic} alt={`Event Pic ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportPreview;
