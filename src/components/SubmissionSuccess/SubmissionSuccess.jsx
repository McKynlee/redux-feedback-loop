import { Link } from 'react-router-dom';

// Component to display upon submitting feedback:
function SubmissionSuccess() {

  return (
    <div>
      <h2>Thank you for your feedback!</h2>
      <Link to="/">Leave New Feedback</Link>
    </div>
  )
} // end SubmissionSuccess

export default SubmissionSuccess;