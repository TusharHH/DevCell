import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const ReportForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        duration: '',
        location: '',
        templateType: 'pdf',
        images: []
    });

    const handleFileDrop = (acceptedFiles) => {
        setFormData({ ...formData, images: acceptedFiles });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const form = new FormData();
        form.append('title', formData.title);
        form.append('duration', formData.duration);
        form.append('location', formData.location);
        form.append('templateType', formData.templateType);
        formData.images.forEach((image) => form.append('images', image));

        try {
            await axios.post('/api/reports/create', form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Report created');
        } catch (err) {
            alert('Error creating report');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Event Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            <input type="datetime-local" onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />
            <input type="text" placeholder="Location" onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            <select onChange={(e) => setFormData({ ...formData, templateType: e.target.value })}>
                <option value="pdf">PDF</option>
                <option value="docx">DOCX</option>
            </select>
            <Dropzone onDrop={handleFileDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <button type="submit">Create Report</button>
        </form>
    );
};

export default ReportForm;
