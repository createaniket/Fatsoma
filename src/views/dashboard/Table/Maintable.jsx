import React, { useMemo } from 'react';
import './Maintable.css';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// example data
const data = [
  {
    eventname: 'Best Event',
    date: '01/04/2000',
    sales: '2',
    incentives: '12',
    totalin: '0.8',
    totalout: '10',
    revenue: '20'
  },
  {
    eventname: "Ani's Event",
    date: '01/08/2008',
    sales: '22',
    incentives: '132',
    totalin: '0.8',
    totalout: '10',
    revenue: '20'
  },
  {
    eventname: 'Dharms Event',
    date: '01/08/2003',
    sales: '24',
    incentives: '142',
    totalin: '089',
    totalout: '53',
    revenue: '39'
  }
];

const Example = () => {
  // memoized columns
  const columns = useMemo(
    () => [
      {
        accessorKey: 'eventname',
        header: 'Event Name',
        size: 160
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 160
      },
      {
        accessorKey: 'sales',
        header: 'Sales',
        size: 160
      },
      {
        accessorKey: 'incentives',
        header: 'Incentives',
        size: 160
      },
      {
        accessorKey: 'totalin',
        header: 'Total In',
        size: 160
      },
      {
        accessorKey: 'totalout',
        header: 'Total Out',
        size: 160
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
      <MaterialReactTable table={table} />;
    </>
  );
};

export default Example;
