import React, { useEffect, useMemo, useState } from 'react';
import './Maintable.css';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import axios from 'axios';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Example = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedOrganizer, setSelectedOrganizer] = useState('All Organizers'); // Set default to "All Organizers"

  // Memoized columns
  const columns = useMemo(() => [
    {
      accessorKey: 'date',
      header: 'Date',
      size: 100,
      Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(), // Format date
    },
    {
      accessorKey: 'brands',
      header: 'Brand Name',
      size: 160,
      Cell: ({ row }) => row.original.brands?.[0]?.brandName || 'No Brand',
    },
    {
      accessorKey: 'events',
      header: 'Event Name',
      size: 280,
      Cell: ({ row }) => row.original.brands?.[0]?.events?.[0]?.eventName || 'No Event',
    },
    {
      accessorKey: 'sales',
      header: 'Sales',
      size: 80,
    },
    {
      accessorKey: 'incentives',
      header: 'Incentives',
      size: 80,
    },
    {
      accessorKey: 'totalIn',
      header: 'Total In',
      size: 120,
      Cell: ({ cell }) => `£${cell.getValue().toFixed(2)}`,
    },
    {
      accessorKey: 'totalOut',
      header: 'Total Out',
      size: 120,
      Cell: ({ cell }) => `£${cell.getValue().toFixed(2)}`,
    },
    {
      accessorKey: 'revenue',
      header: 'Revenue',
      size: 120,
      Cell: ({ cell }) => `£${cell.getValue().toFixed(2)}`,
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data: filteredData, // Use filtered data here
    enableStickyHeader: true,
    enableStickyFooter: true,
    muiTableContainerProps: { sx: { maxHeight: '500px' } },
  });

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fatsoma-backend.onrender.com/api/events/getall');
        console.log('Fetched Data:', response.data.data);
        setData(response.data.data);
        setFilteredData(response.data.data); // Initially show all data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle filtering based on selected organizer
  const handleOrganizerChange = (organizerName) => {
    setSelectedOrganizer(organizerName);
    
    if (organizerName === 'All Organizers') {
      setFilteredData(data); // Reset filter, show all data
    } else {
      const filtered = data.filter(item =>
        item.brands?.some(brand => brand.brandName === organizerName)
      );
      setFilteredData(filtered); // Update filtered data based on selected organizer
    }
  };

  return (
    <>
      <div className="buttonforrefresh">
        <div className="sec-center">
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="for-dropdown" htmlFor="dropdown">
            Daily <i className="uil uil-arrow-down"></i>
          </label>
          <div className="section-dropdown">
            <a href="#">Last week <i className="uil uil-arrow-right"></i></a>
            <a href="#">Last Month</a>
            <a href="#">Last Year <i className="uil uil-arrow-right"></i></a>
            <a href="#">Lifetime <i className="uil uil-arrow-right"></i></a>
          </div>
        </div>

        <div className="right_refresh">
          <Box sx={{ minWidth: 120, mx: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="organizer-select-label">Organizer</InputLabel>
              <Select
                labelId="organizer-select-label"
                id="organizer-select"
                value={selectedOrganizer}
                label="Organizer"
                onChange={(e) => handleOrganizerChange(e.target.value)}
              >
                <MenuItem value="All Organizers">All Organizers</MenuItem> {/* Option to reset filter */}
                <MenuItem value="Bournemouth Freshers 2024">Bournemouth Freshers 2024</MenuItem>
                <MenuItem value="A-level Results 2024">A-level Results 2024</MenuItem>
                <MenuItem value="Coventry Freshers 2024">Coventry Freshers 2024</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <button className="refreshdatabtn">Refresh</button>
        </div>
      </div>

      <MaterialReactTable table={table} />
    </>
  );
};

export default Example;
