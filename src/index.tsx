import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path= "/Home" component={Home} />
      <Route exact path= "/About" component={About} />
      <Route exact path= "/Services" component={Services} />
      <Route exact path="/Contacts" component={Contacts} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
