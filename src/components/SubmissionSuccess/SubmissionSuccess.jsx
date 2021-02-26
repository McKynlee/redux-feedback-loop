import { useHistory, Link } from 'react-router-dom';

// Component to display upon submitting feedback:
function SubmissionSuccess() {
  const history = useHistory();

  return (
    <div>
      <h2>Submission Success!</h2>
      <Link to="/">Leave New Feedback</Link>
    </div>
  )
} // end SubmissionSuccess

export default SubmissionSuccess;