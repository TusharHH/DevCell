import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReportForm from '../components/ReportForm';
import ReportList from '../components/ReportList';

const Dashboard = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/reports/all', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setReports(res.data);
        };

        fetchReports();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ReportForm />
            <ReportList reports={reports} />
        </div>
    );
};

export default Dashboard;
