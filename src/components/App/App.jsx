import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Custom components:
import FormOne from '../Forms/FormOne';
import FormTwo from '../Forms/FormTwo';
import FormThree from '../Forms/FormThree';
import FormFour from '../Forms/FormFour';
import ReviewPage from '../ReviewPage/ReviewPage';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import Admin from '../Admin/Admin';
import EditForm1 from '../EditForms/EditForm1';

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
      </Router>
    </div>
  );
} // end App

export default App;
