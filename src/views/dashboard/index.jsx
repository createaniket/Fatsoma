import React, { useMemo } from 'react';

import './dasboard.css';

// react-bootstrap
import { Row, Col } from 'react-bootstrap';

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// project import
import OrderCard from '../../components/Widgets/Statistic/OrderCard';
// import SocialCard from '../../components/Widgets/Statistic/SocialCard';

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

// ==============================|| DASHBOARD ANALYTICS ||============================== //

const DashAnalytics = () => {
  // useEffect(() => {
  //   const checkToken = () => {
  //     const adToken = localStorage.getItem('AdToken');
  //     if (!adToken) {
  //       // Redirect to login page if AdToken is not present
  //       navigate('/login');
  //     }
  //   };

  //   checkToken();
  // }, [navigate]);

  // avigate to -> /goods-exporter/react/auth/signin-1

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
    <React.Fragment>
      <Row>
        {/* order cards */}
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'DAILY',
              class: 'bg-c-blue',
              icon: 'feather icon-user',
              primaryText: '486',
              secondaryText: 'TOTAL TICKETS SALE',
              extraText: '450'
            }}
          />
        </Col>

        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'DAILY',
              class: 'bg-c-yellow',
              icon: 'feather icon-repeat',
              primaryText: '€ 2401.22',
              secondaryText: 'TOTAL REVENUE',
              extraText: '€ 2401.22'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'DAILY',
              class: 'bg-c-green',
              icon: 'feather icon-tag',
              primaryText: '€ 2401.22',
              secondaryText: 'TOTAL INCENTIVES',
              extraText: '€ 2401.22'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'TOTAL EVENTS LISTED',
              class: 'bg-c-red',
              icon: 'feather icon-award',
              primaryText: '221',
              secondaryText: 'This Month',
              extraText: '19'
            }}
          />
        </Col>

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

        <Col sm={12} style={{ margin: '10px 00 00 00' }}>
          <MaterialReactTable table={table} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashAnalytics;
