import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// project import
// import NavLeft from './NavLeft';
// import NavRight from './NavRight';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

// assets
import logo from '../../../assets/images/LowercaseLogoRectblack.png';

// import NewLogo from '../../../assets/images/mainlogonew.png'

// ==============================|| NAV BAR ||============================== //

const NavBar = () => {
  const [moreToggle, setMoreToggle] = useState(false);
  const configContext = useContext(ConfigContext);
  const { collapseMenu, layout } = configContext.state;
  const { dispatch } = configContext;

  let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', 'header-blue', 'headerpos-fixed'];
  if (layout === 'vertical') {
    headerClass = [...headerClass, 'headerpos-fixed'];
  }

  let toggleClass = ['mobile-menu'];
  if (collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  const navToggleHandler = () => {
    dispatch({ type: actionType.COLLAPSE_MENU });
  };

  let moreClass = ['mob-toggler'];
  let collapseClass = ['collapse navbar-collapse'];
  if (moreToggle) {
    moreClass = [...moreClass, 'on'];
    collapseClass = [...collapseClass, 'd-block'];
  }

  let navBar = (
    <React.Fragment>
      <div className="m-header">
        <Link to="#" className="b-brand">
          <img id="main-logo" src={logo} alt="" className="logo" />
        </Link>
      </div>

      <div className="dashboard_dharms_sect">
        <p className="dashobard_heading_dharms">DASHBOARD</p>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header className={headerClass.join(' ')} style={{ zIndex: 1009 }}>
        {navBar}
      </header>
    </React.Fragment>
  );
};

export default NavBar;
