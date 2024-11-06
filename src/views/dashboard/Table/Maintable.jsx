import React, { useEffect, useMemo, useState } from 'react';
import './Maintable.css';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import axios from 'axios';
// example data
// const data = [
//   {
//     company:"Teah beo",
//     BrandName:"Bournemouth Freshers 2024",
//     eventname: "F*CK ME It's Halloween | Bournemouth Freshers 2024",
//     date: '16/10/2024',
//     sales: '02',
//     incentives: '00.00',
//     totalin: '£12.00',
//     totalout: '--',
//     revenue: '£12.00',
//   },
//   {
//     company:"Teah beo",
//     BrandName:"Bournemouth Freshers 2024",
//     eventname: "F*CK ME It's Halloween | Bournemouth Freshers 2024",
//     date: '13/10/2024',
//     sales: '01',
//     incentives: '00.00',
//     totalin: '£6.00',
//     totalout: '--',
//     revenue: '£6.00',
//   },
//   {
//     company:"Teah beo",
//     BrandName:"Bournemouth Freshers 2024",
//     eventname: "F*CK ME It's Halloween | Bournemouth Freshers 2024",
//     date: '07/10/2024',
//     sales: '05',
//     incentives: '00.00',
//     totalin: '£30.00',
//     totalout: '--',
//     revenue: '£30.00',
//   }
// ];
const Example = () => {

  const [data, setData] = useState([])

  // memoized columns
   // memoized columns
   const columns = useMemo(() => [
    {
      accessorKey: 'date',
      header: 'Date',
      size: 100,
      Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString() // Format date
    },
    {
      accessorKey: 'sales',
      header: 'Sales',
      size: 100
    },
    {
      accessorKey: 'incentives',
      header: 'Incentives',
      size: 100
    },
    {
      accessorKey: 'totalIn',
      header: 'Total In',
      size: 100,
      Cell: ({ cell }) => `£${cell.getValue().toFixed(2)}` // Format as currency
    },
    {
      accessorKey: 'totalOut',
      header: 'Total Out',
      size: 100,
      Cell: ({ cell }) => `£${cell.getValue().toFixed(2)}`
    },
    {
      accessorKey: 'revenue',
      header: 'Revenue',
      size: 100,
      Cell: ({ cell }) => `£${cell.getValue().toFixed(2)}`
    },
    {
      accessorKey: 'brands',
      header: 'Brand Name',
      size: 160,
      Cell: ({ row }) => {
        const brandName = row.original.brands?.[0]?.brandName || 'No Brand';
        return brandName;
      }
    },
    {
      accessorKey: 'events',
      header: 'Event Name',
      size: 260,
      Cell: ({ row }) => {
        const eventName = row.original.brands?.[0]?.events?.[0]?.eventName || 'No Event';
        return eventName;
      }
    }
  ], []);
  
  

  const table = useMaterialReactTable({
    columns,
    data // data must be memoized or stable
  });


    // Fetch data from backend
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fatsoma-backend.onrender.com/api/events/getall');
          console.log('Fetched Data:', response.data.data[29]); // Log data in console
          setData(response.data.data); // Set the fetched data to state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
      <div className="buttonforrefresh">
        <div className="sec-center">
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="for-dropdown" htmlFor="dropdown">
            Daily <i className="uil uil-arrow-down"></i>
          </label>
          <div className="section-dropdown">
            <a href="#">
              Last week<i className="uil uil-arrow-right"></i>
            </a>

            <a href="#">Last Month </a>
            <a href="#">
              Last Year<i className="uil uil-arrow-right"></i>
            </a>
            <a href="#">
              Lifetime<i className="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>

        <button className="refreshdatabtn">Refresh</button>
      </div>
      <MaterialReactTable table={table} />
    </>
  );
};

export default Example;
