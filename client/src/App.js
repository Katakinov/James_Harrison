import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutesCustom} from './Routes';
import './App.css';

function App() {
  const routes = useRoutesCustom(true)
  return (
    <Router>
      <div className='app'>
        { routes }
      </div>
    </Router>
  );
}

export default App;
