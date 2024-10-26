import React, { useMemo } from 'react';
import './Maintable.css';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// example data
const data = [
  {
    company:"Bournemouth Freshers 2024",
    BrandName:"Bournemouth Freshers 2024",
    eventname: "F*CK ME It's Halloween | Bournemouth Freshers 2024",
    date: '16/10/2024',
    sales: '02',
    incentives: '00.00',
    totalin: '£12.00',
    totalout: '--',
    revenue: '£12.00',
  },
  {
    company:"somename",
    BrandName:"Bournemouth Freshers 2024",
    eventname: "F*CK ME It's Halloween | Bournemouth Freshers 2024",
    date: '13/10/2024',
    sales: '01',
    incentives: '00.00',
    totalin: '£6.00',
    totalout: '--',
    revenue: '£6.00',
  },
  {
    company:"somename",
    BrandName:"Bournemouth Freshers 2024",
    eventname: "F*CK ME It's Halloween | Bournemouth Freshers 2024",
    date: '07/10/2024',
    sales: '05',
    incentives: '00.00',
    totalin: '£30.00',
    totalout: '--',
    revenue: '£30.00',
  }
];
const Example = () => {
  // memoized columns
   // memoized columns
   const columns = useMemo(
    () => [

      {
        accessorKey: 'company',
        header: 'Company',
        size: 160
      },
      {
        accessorKey: 'BrandName',
        header: '⁠⁠Brand Name',
        size: 160
      },
      {
        accessorKey: 'eventname',
        header: 'Event Name',
        size: 260
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 100
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
        accessorKey: 'totalin',
        header: 'Total In',
        size: 100
      },
      {
        accessorKey: 'totalout',
        header: 'Total Out',
        size: 100
      },
      {
        accessorKey: 'revenue',
        header: 'Revenue',
        size: 160
      }
    ],
    []
  );
   

  const table = useMaterialReactTable({
    columns,
    data // data must be memoized or stable
  });

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
