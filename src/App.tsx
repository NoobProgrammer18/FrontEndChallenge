import React from 'react';
import './App.css';
import Routes from './Router'
import {useRoutes} from 'hookrouter';

const App: React.FC = () => {

  const routeResult = useRoutes(Routes)
  return routeResult
  // return (
  //   <div className="App">
  //     <h1>Hello!!</h1>
  //   </div>
  // );
}

export default App;

