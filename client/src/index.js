import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './Homepage';


ReactDOM.render(
  <Router>
      <Route path="/" component={Homepage} />

  </Router>,
  document.getElementById('root')
);
