import { useHistory } from 'react-router-dom';

// Component to display upon submitting feedback:
function SubmissionSuccess() {
  const history = useHistory();

  return (
    <h2>Submission Success!</h2>
  )
} // end SubmissionSuccess

export default SubmissionSuccess;