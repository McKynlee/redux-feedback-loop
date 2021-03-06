import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Bring in redux:
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let templateInput = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comments: ''
}
// Capture current inputs each time user clicks the next page.
// This will be added to feedbackHistoryReducer upon overall submit
const currentFeedbackReducer = (state = {}, action) => {
  // This variable represents number inputs from Questions 1-3:
  let currentFeedbackInput = Number(action.payload);

  // This variable represents comment input from Question 4:
  let currentCommentInput = action.payload;

  switch (action.type) {
    case 'SET_FEELING_FEEDBACK':
      return {
        ...state,
        feeling: currentFeedbackInput
      };
      break;
    case 'SET_UNDERSTANDING_FEEDBACK':
      return {
        ...state,
        understanding: currentFeedbackInput
      };
      break;
    case 'SET_SUPPORT_FEEDBACK':
      return {
        ...state,
        support: currentFeedbackInput
      };
      break;
    case 'SET_COMMENT_FEEDBACK':
      return {
        ...state,
        comments: currentCommentInput
      };
      break;

    // not sure if returning the template is the best 
    // way to clear the inputs, but it is working:
    case 'CLEAR_CURRENT_FEEDBACK':
      return { templateInput };
  }
  return state;
} // end currentFeedbackReducer

// Have each individual feedback package from currentFeedbackReducer
// added to this array to have all feedback saved together.
const feedbackHistoryReducer = (state = [], action) => {
  if (action.type === 'SET_HISTORICAL_FEEDBACK') {
    return action.payload;
  }
  return state;
} // end feedbackHistoryReducer

const store = createStore(
  combineReducers({
    currentFeedbackReducer,
    feedbackHistoryReducer
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
