import { fetchAllEvents } from 'API/event';
import Navbarmain from 'layouts/MembersLayout/Navbar';
import NavbarTop from 'layouts/MembersLayout/Navbar/NavbarTop';
import React, { useEffect, useState } from 'react';
import './Allevents.scss';
import Commoneventcard from './Commoneventcard';

const Allevents = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {

      const fetchEvents = async () => {
        try {
          const data = await fetchAllEvents();
          console.log('Fetched events data:', data);
          if (Array.isArray(data)) {
            setEvents(data);
          } else {
            console.error('Data is not an array:', data);
          }
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
      fetchEvents();

  }, []);

  return (
    <>
      <NavbarTop />
      <Navbarmain />
      <div className="common-events-container">
        <p className="eventshead">All Events</p>
        {events === null ? (
          <p>Loading...</p>
        ) : events.length > 0 ? (
          events.map((event) => <Commoneventcard key={event._id} event={event} />)
        ) : (
          <p>No Data to show here</p>
        )}
      </div>
    </>
  );
};

export default Allevents;
