import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Stalllayout.scss'

const Stalllayout = () => {
    const [stalls, setStalls] = useState([]);

    useEffect(() => {
        const fetchStalls = async () => {
            const response = await axios.get('https://goods-exporter-bakend.onrender.com/stall/');
            setStalls(response.data);
        };

        fetchStalls();
    }, []);

    const handleStallClick = async (stallNumber) => {

        const UserToken = localStorage.getItem('token')

        const userId = '6697a799b2bd31adb62b6850'; // Replace with actual user ID
        const response = await axios.post('https://goods-exporter-bakend.onrender.com/stall/book', { stallNumber, userId });
        if (response.data.success) {
            alert('Stall booked successfully');
            // Update stall status locally
            setStalls(stalls.map(stall => 
                stall.stallNumber === stallNumber ? { ...stall, status: 'reserved' } : stall
            ));
        } else {
            alert(response.data.error);
        }
    };

    return (
        <div className="floor-plan">
            {stalls.map(stall => (
                <div
                    key={stall.stallNumber}
                    className={`stall ${stall.status}`}
                    onClick={() => handleStallClick(stall.stallNumber)}
                    style={{ cursor: stall.status === 'available' ? 'pointer' : 'not-allowed' }}
                >
                    {stall.stallNumber}
                </div>
            ))}
        </div>
    );
};

export default Stalllayout;