import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core';

// Custom components:
import FormOne from '../Forms/FormOne';
import FormTwo from '../Forms/FormTwo';
import FormThree from '../Forms/FormThree';
import FormFour from '../Forms/FormFour';
import ReviewPage from '../ReviewPage/ReviewPage';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import Admin from '../Admin/Admin';
import EditForm1 from '../EditForms/EditForm1';
import EditForm2 from '../EditForms/EditForm2';
import EditForm3 from '../EditForms/EditForm3';
import EditForm4 from '../EditForms/EditForm4';

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
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/edit1">
          <EditForm1 />
        </Route>
        <Route exact path="/edit2">
          <EditForm2 />
        </Route>
        <Route exact path="/edit3">
          <EditForm3 />
        </Route>
        <Route exact path="/edit4">
          <EditForm4 />
        </Route>
      </Router>
    </div>
  );
} // end App

export default App;
