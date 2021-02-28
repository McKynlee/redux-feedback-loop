import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';

// Route to this page when user clicks to edit answer to FormOne from ReviewPage:
// This page re-displays question 1 and sends new user answer to redux
// Differences from original FormOne: no completion bar rather original answer displayed,
// and NEXT button is replaced by Return to Review button
function EditForm1() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Variable to capture value user selects in dropdown:
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (userSelection) => {
    setSelectedValue(userSelection);
  }

  // Bring in saved input from FormOne for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.feeling;

  // When Return to Review button clicked, 
  // save input and navigate back to review page
  const handleReturnToReview = () => {
    // Verify selection is not blank:
    if (selectedValue === "") {
      alert('Number must be selected!')
    } else {
      // When selection not blank, save it to currentFeedbackReducer
      dispatch({
        type: 'SET_FEELING_FEEDBACK',
        payload: selectedValue,
      })
      history.push('/review');
    }
  } // end handleNext

  console.log('currentUserFeedback:', currentUserFeedback);

  return (
    <div>
      <h3>Edit your answer:</h3>
      <h4>Your original answer was: {originalAnswer}</h4>
      <label htmlFor="feeling">How are you feeling today?</label>
      <select name="feeling" id="feeling" required
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value="">Choose One</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <Box m={3}>
        <Button variant="contained" color="primary"
          onClick={handleReturnToReview}>
          Return to Review
      </Button>
      </Box>
    </div>
  )
} // end EditForm1

export default EditForm1;