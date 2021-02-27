import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Bring in redux:
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let currentInput = {
  feeling: 1,
  understanding: 1,
  support: 1,
  comments: 'TGIF'
}
// Capture current inputs each time user clicks the next page.
// This will be added to feedbackHistoryReducer upon overall submit
const currentFeedbackReducer = (state = currentInput, action) => {
  let currentFeedbackInput = Number(action.payload);

  switch (action.type) {
    case 'SET_FEELING_FEEDBACK':
      return { ...state, feeling: currentFeedbackInput }
    case 'SET_CONTENT_FEEDBACK':
      return { ...state, understanding: currentFeedbackInput }
  }
  return state;
} // end currentFeedbackReducer

// Have each individual feedback set from currentFeedbackReducer
// added to this array to have all feedback saved together.
const feedbackHistoryReducer = (state = [], action) => {
  return state;
} // end feedbackHistoryReducer

const store = createStore(
  combineReducers({
    currentFeedbackReducer,
    feedbackHistoryReducer
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
