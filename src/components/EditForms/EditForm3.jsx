import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';

// Route to this page when user clicks to edit FormThree answer from ReviewPage:
// This page re-displays question 3 and sends new user answer to reducer
// Differences from original FormThree: no completion bar rather original answer displayed,
// and NEXT button is replaced by Return to Review button
function EditForm3() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Variable to capture value user selects in dropdown:
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (userSelection) => {
    setSelectedValue(userSelection);
  }

  // Bring in saved input from FormThree for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.support;

  // When Return to Review button clicked, 
  // save input and navigate to review page
  const handleReturnToReview = () => {
    // Verify selection is not blank:
    if (selectedValue === "") {
      alert('Number must be selected!')
    } else {
      // When selection not blank, save it to current feedback:
      dispatch({
        type: 'SET_SUPPORT_FEEDBACK',
        payload: selectedValue,
      })
      history.push('/review');
    }
  }

  return (
    <div>
      <h3>Edit your answer:</h3>
      <h4>Your original answer was: {originalAnswer}</h4>
      <label htmlFor="supported">How well are you being supported?</label>
      <select name="supported" id="supported"
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value=""></option>
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
} // end EditForm3

export default EditForm3;