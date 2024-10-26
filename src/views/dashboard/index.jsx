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
    company:"Teah beo",
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
    company:"Teah beo",
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
    company:"Teah beo",
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
    <React.Fragment>
      <Row style={{margin:"20px 00"}}>
        {/* order cards */}
        <Col md={6} xl={3} >
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
              primaryText: '£ 2401.22',
              secondaryText: 'TOTAL REVENUE',
              extraText: '£ 2401.22'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'DAILY',
              class: 'bg-c-green',
              icon: 'feather icon-tag',
              primaryText: '£ 2401.22',
              secondaryText: 'TOTAL INCENTIVES',
              extraText: '£98.00'
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
