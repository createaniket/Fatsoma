import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// project-import
import renderRoutes, { routes } from './routes';

// ==============================|| APP ||============================== //

const App = () => {
  return <BrowserRouter >{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
