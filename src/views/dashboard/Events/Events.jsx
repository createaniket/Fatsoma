import React, { useEffect, useState } from 'react';
import './Events.scss';
import Eventscard from './Eventscard/Eventscard';
import { fetchAllEvents } from '../../../API/event';

const Events = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await fetchAllEvents();
                console.log("Fetched events data:", data);
                if (Array.isArray(data)) {
                    setEvents(data);
                } else {
                    console.error("Data is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="events-container">
            <p className="eventshead">All Events</p>
            {events === null ? <p>Loading...</p> :
                events.length > 0 ? events.map(event => (
                    <Eventscard key={event._id} event={event} />
                )) : <p>No Data to show here</p>}
        </div>
    );
};

export default Events;
