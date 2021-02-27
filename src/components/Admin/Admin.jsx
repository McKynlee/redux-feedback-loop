import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

// Custom component:
import FeedbackItem from './FeedbackItem';

// Render all historical feedback on Admin page:
function Admin() {
  const dispatch = useDispatch();

  // Bring in reducer that will house 
  // history of feedback data:
  const historicalFeedback = useSelector(store => {
    return store.feedbackHistoryReducer;
  })

  // On page load, GET historical feedback 
  // so that we can next render it:
  useEffect(() => {
    fetchHistoricalFeedback()
  }, [])

  // GET historical feedback from server:
  const fetchHistoricalFeedback = () => {
    axios.get('/feedback')
      .then(response => {
        console.log('GET response:', response);
        // send data to be stored in reducer:
        dispatch({
          type: 'SET_HISTORICAL_FEEDBACK',
          payload: response.data
        })
      }).catch(error => {
        console.log('GET error:', error);
        alert('ERROR loading page');
      })
  } // end fetchHistoricalFeedback

  console.log('historicalFeeback:', historicalFeedback);

  // render historical feedback in a table:
  return (
    <div>
      <h2>Admin page</h2>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Supported</th>
            <th>Comments</th>
            <th>Flag for Review</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through historical feedback 
          to display as table data: */}
          {historicalFeedback.map((userFeedbackRow, i) => {
            return <FeedbackItem key={i}
              userFeedbackRow={userFeedbackRow} />
          })}
        </tbody>
      </table>
    </div>
  )
} // end Admin

export default Admin;