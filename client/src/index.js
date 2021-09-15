import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
      <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
