import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Component to display upon submitting feedback:
function SubmissionSuccess() {
  const dispatch = useDispatch();

  // When link to leave new feedback takes user back to start
  // clear the data stored in currentFeedbackReducer
  const clearData = () => {
    dispatch({
      type: 'CLEAR_CURRENT_FEEDBACK'
    })
  } // end clearData

  return (
    <div>
      <h2>Thank you for your feedback!</h2>
      <Link to="/" onClick={clearData}>
        Leave New Feedback
      </Link>
    </div>
  )
} // end SubmissionSuccess

export default SubmissionSuccess;