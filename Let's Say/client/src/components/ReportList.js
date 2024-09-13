import React from 'react';

const ReportList = ({ reports }) => {
    return (
        <div>
            <h2>Generated Reports</h2>
            <ul>
                {reports.map(report => (
                    <li key={report._id}>
                        {report.title} - <a href={report.fileLink} download>Download Report</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportList;
