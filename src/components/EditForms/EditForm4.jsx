import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  TextField
} from '@material-ui/core';

// Component to display upon hitting NEXT in FormThree:
function EditForm4() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Bring in saved input from FormFour for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.comments;

  // Create local state to handle input comment
  const [commentInput, setCommentInput] = useState(originalAnswer);

  // When Return to Review button clicked, 
  // save input and navigate to review page
  const handleReturnToReview = () => {
    // Save selection to redux store (OK if left blank):
    dispatch({
      type: 'SET_COMMENT_FEEDBACK',
      payload: commentInput,
    })
    history.push('/review');

    // Clear input field
    setCommentInput('');
  } // end handleNext

  return (
    <div className="card-wrapper">
      <Typography variant="h5" component="h2"
        gutterBottom>
        Edit your answer:
      </Typography>
      <Typography>
        <em>Your original answer was: {originalAnswer}</em>
      </Typography>
      <Box boxShadow={3}
        className="card-container"
      >
        <Card variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2"
              gutterBottom>
              Any comments you want to leave?
        </Typography>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">
              </InputLabel>
              <TextField id="outlined-basic" rows={3}
                label="Comments" variant="outlined"
                value={commentInput}
                onChange={(event) => {
                  setCommentInput(event.target.value)
                }} />
            </FormControl>
            <CardActions className="card-actions">
              <Box m={3}>
                <Button variant="contained" color="primary"
                  onClick={handleReturnToReview}>
                  Return to Review
            </Button>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
} // end EditForm4

export default EditForm4;