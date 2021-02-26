import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Custom components:
import FormOne from '../FormOne/FormOne';
import FormTwo from '../FormTwo/FormTwo';
import FormThree from '../FormThree/FormThree';
import FormFour from '../FormFour/FormFour';
import ReviewPage from '../ReviewPage/ReviewPage';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <FormOne />
        </Route>
        <Route exact path="/form2">
          <FormTwo />
        </Route>
        <Route exact path="/form3">
          <FormThree />
        </Route>
        <Route exact path="/form4">
          <FormFour />
        </Route>
        <Route exact path="/review">
          <ReviewPage />
        </Route>
        <Route exact path="/success">
          <SubmissionSuccess />
        </Route>
      </Router>
    </div>
  );
}

export default App;
