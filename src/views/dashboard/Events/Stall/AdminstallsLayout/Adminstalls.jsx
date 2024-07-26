import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Stalllayout.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Adminstalls = () => {
  const [stalls, setStalls] = useState([]);
  const [halls, setHalls] = useState([]);
  const [activeHallId, setActiveHallId] = useState(null);

  // Fetch all halls
  const fetchAllHalls = async () => {
    try {
      const response = await axios.get('https://goods-exporter-bakend.onrender.com/hall/getall');
      console.log("ythe hallls", response)
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
      const response = await axios.get(`https://goods-exporter-bakend.onrender.com/stall/getbyhall/${hallId}`);
      console.log("the stalllslslsls", response)
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

  return (
    <div className='stalls-section'>
      <Tabs
        id="hall-tabs"
        activeKey={activeHallId}
        onSelect={(hallId) => handleTabChange(hallId)}
        className="mb-3"
      >
        { halls.map((hall) => (
          <Tab key={hall._id} eventKey={hall._id} title={hall.name}>
            <div className="floor-plan">
              {stalls.map((stall) => (
                stall.hall === hall._id && (
                  <div
                    key={stall.stallNumber}
                    className={`stall ${stall.status}`}
                    style={{ cursor: stall.status === 'available' ? 'pointer' : 'not-allowed' }}
                  >
                    {stall.stallNumber}
                  </div>
                )
              ))}
            </div>
          </Tab>
        )) }
      </Tabs>
    </div>
  );
};

export default Adminstalls;
