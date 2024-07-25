import { fetchAllHalls } from 'API/hall';
import Navbarmain from 'layouts/MembersLayout/Navbar';
import NavbarTop from 'layouts/MembersLayout/Navbar/NavbarTop';
import React, { useEffect, useState } from 'react';
import './Commonhalls.scss';
import Commonhallscard from './Commonhallscard';

const Commonhalls = () => {

    const [halls, setHalls] = useState(null);
  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const data = await fetchAllHalls();
        console.log('Fetched halls data:', data);
        if (Array.isArray(data)) {
          setHalls(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching Halls:', error);
      }
    };
    fetchHalls();
  }, []);

  return (

    <>
    <NavbarTop />
    <Navbarmain />
    <div className="common-halls-section">
      <div className="events-container">
        <p className="eventshead">All Halls</p>
        <div className="allhalls-section">
          {halls === null ? (
            <p>Loading...</p>
          ) : halls.length > 0 ? (
            halls.map((hall) => <Commonhallscard key={hall._id} hall={hall} />)
          ) : (
            <p>No Data to show here</p>
          )}
        </div>
      </div>
    </div>
    </>

  );
};

export default Commonhalls;
