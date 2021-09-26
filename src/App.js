import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SortingVisualizer} />
        <Route exact path='/graph' component={PathfindingVisualizer} />

      </Switch>

    </Router>

  );
}

export default App;
