import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent
} from '@material-ui/core';

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
    <div className="card-wrapper">
      <Box boxShadow={3}
        className="card-container"
      >
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2"
              gutterBottom>
              Review Your Answers:
            </Typography>
            {/* // Display data captured from user's input for review: */}
            <table className="review-feedback" >
              <tbody>
                <tr>
                  <td>
                    <Link to="/edit1">
                      How you're feeling: {currentUserFeedback.feeling}</Link>
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
              </tbody>
            </table>
            <CardActions className="card-actions">
              <Box m={3}>
                <Button variant="contained" color="primary"
                  onClick={submitToSuccess}>
                  Submit Feedback
                      </Button>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
} // end ReviewPage

export default ReviewPage;