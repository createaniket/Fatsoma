import axios from 'axios';
import Navbarmain from 'layouts/MembersLayout/Navbar';
import NavbarTop from 'layouts/MembersLayout/Navbar/NavbarTop';
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Commonstalls.scss';

const Commonstalls = () => {
  const [stalls, setStalls] = useState([]);
  const [halls, setHalls] = useState([]);
  const [activeHallId, setActiveHallId] = useState(null);

  const UserToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${UserToken}`
  };



  // Fetch all halls
  const fetchAllHalls = async () => {
    try {
      const response = await axios.get('http://localhost:9000/hall/getall', { headers });
      console.log('the halls', response);
      setHalls(response.data.halls);
      if (response.data.halls.length > 0) {
        setActiveHallId(response.data.halls[0]._id); // Set initial hall id to the first hall
      }
    } catch (error) {
      console.error('Error fetching halls:', error);
    }
  };

  // Fetch stalls by hall ID
  const fetchStalls = async (hallId) => {
    try {
      const response = await axios.get(`http://localhost:9000/stall/getbyhall/${hallId}`, { headers });
      console.log('the stalls', response);
      setStalls(response.data);
    } catch (error) {
      console.error('Error fetching stalls:', error);
    }
  };

  // Handle tab change
  const handleTabChange = (hallId) => {
    setActiveHallId(hallId);
    fetchStalls(hallId);
  };

  useEffect(() => {
    fetchAllHalls();
  }, []);

  useEffect(() => {
    if (activeHallId) {
      fetchStalls(activeHallId);
    }
  }, [activeHallId]);

  const handleStallClick = async (stallNumber) => {

    if(UserToken){


    try {
        const response = await axios.post('http://localhost:9000/stall/book', { stallNumber }, { headers });
        if (response.data.success) {
          alert('Stall booked successfully');
          // Update stall status locally
          setStalls(stalls.map(stall => 
            stall.stallNumber === stallNumber ? { ...stall, status: 'reserved' } : stall
          ));
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error('Error booking stall:', error);
      }

    }else {
        alert('Please Login to Book your Stall');

    }

  };

  return (
    <div>
      <NavbarTop />
      <Navbarmain />
      <div className="stalls-section">
        <Tabs id="hall-tabs" activeKey={activeHallId} onSelect={(hallId) => handleTabChange(hallId)} className="mb-3">
          {halls.map((hall) => (
            <Tab key={hall._id} eventKey={hall._id} title={hall.name}>
              <div className="floor-plan">
                {stalls.map(
                  (stall) =>
                    stall.hall === hall._id && (
                      <div
                        key={stall.stallNumber}
                        className={`stall ${stall.status}`}
                        onClick={() => handleStallClick(stall.stallNumber)}
                        style={{ cursor: stall.status === 'available' ? 'pointer' : 'not-allowed' }}
                      >
                        {stall.stallNumber}
                      </div>
                    )
                )}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Commonstalls;
