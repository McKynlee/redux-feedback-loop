import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

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
    <div>
      <label>
        Edit your comment:
        <TextField id="outlined-basic" rows={3}
          label="Comments" variant="outlined"
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value)
          }} />
      </label>
      <Box m={3}>
        <Button variant="contained" color="primary"
          onClick={handleReturnToReview}>
          Return to Review
      </Button>
      </Box>
    </div>
  )
} // end EditForm4

export default EditForm4;