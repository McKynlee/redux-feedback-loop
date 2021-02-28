import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button, Box } from '@material-ui/core';

// Component to display upon hitting NEXT in FormFour:
function ReviewPage() {
  const history = useHistory();

  // Bring in entire set of saved inputs for this user,
  // so we can send it to server --> save in db:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  // on submit, post current set of feedback to server
  // and reroute to '/success':
  const submitToSuccess = () => {
    console.log('submitToSuccess');

    // Send info to the server:
    axios.post('/feedback', {
      feeling: currentUserFeedback.feeling,
      understanding: currentUserFeedback.understanding,
      support: currentUserFeedback.support,
      comments: currentUserFeedback.comments
    })
      .then(response => {
        console.log('POST response:', response);

        // Upon successful POST, route to success page:
        history.push('/success');
      }).catch(error => {
        console.log('Error posting:', error);
      })
  } // end submitToSuccess

  return (
    <div>
      <h2>Review Your Answers:</h2>
      {/* // Display data captured from user's input for review: */}
      <table className="review-feedback" >
        <tbody>
          <tr>
            <td>
              <Link to="/edit1">How you're feeling: {currentUserFeedback.feeling}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/edit2">How you're understanding the material: {currentUserFeedback.understanding}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/edit3">How well you feel supported: {currentUserFeedback.support}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/edit4">Additional comments: {currentUserFeedback.comments}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Box m={3}>
                <Button variant="contained" color="primary"
                  onClick={submitToSuccess}>
                  Submit Feedback
              </Button>
              </Box>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
} // end ReviewPage

export default ReviewPage;