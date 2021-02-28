import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import FormCompFour from '../FormCompletion/FormComp4';

// Component to display upon hitting NEXT in FormThree:
function FormFour() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Create local state to handle input comment
  const [commentInput, setCommentInput] = useState('');

  // When 'Review' button clicked, 
  // save input and navigate to next page
  const handleNext = () => {
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
      {/* Show how many / 4 questions complete: */}
      <FormCompFour />
      <label>
        Any comments you want to leave?
        <TextField id="outlined-basic" rows={3}
          label="Comments" variant="outlined"
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value)
          }} />
      </label>
      <Box m={3}>
        <Button variant="contained" color="primary"
          onClick={handleNext}>
          REVIEW
      </Button>
      </Box>
    </div>
  )
} // end FormFour

export default FormFour;