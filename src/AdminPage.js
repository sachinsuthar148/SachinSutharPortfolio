// src/pages/AdminPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get('https://portfolio-mern-api-amber.vercel.app/admin');
                setDetails(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchDetails();
    }, []);

    return (
        <div>
            <h1>Admin Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail) => (
                        <tr key={detail.id}>
                            <td>{detail.name}</td>
                            <td>
                                <a href={`mailto:${detail.email}`}>{detail.email}</a>
                            </td>
                            <td>{detail.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
