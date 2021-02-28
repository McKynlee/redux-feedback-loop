import { useHistory } from 'react-router-dom';
import FormCompTwo from '../FormCompletion/FormComp2';
import { useDispatch } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';

// Component to display upon hitting NEXT in FormOne:
function FormTwo() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Variable to capture value user selects in dropdown:
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (userSelection) => {
    setSelectedValue(userSelection);
  }

  // When NEXT button clicked, 
  // save input and navigate to next page
  const handleNext = () => {
    // Verify selection is not blank and capture selected value:
    if (selectedValue === "") {
      alert('Number must be selected!')
    } else {
      // When selection not blank, save it to currentFeedbackReducer
      dispatch({
        type: 'SET_UNDERSTANDING_FEEDBACK',
        payload: selectedValue,
      })
      history.push('/form3');
    }
  } // end handleNext

  return (
    <div>
      {/* Show how many / 4 questions complete: */}
      <FormCompTwo />
      <label htmlFor="content">How well are you understanding the content?</label>
      <select name="content" id="content"
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
          onClick={handleNext}>
          NEXT
      </Button>
      </Box>
    </div>
  )
} // end FormTwo

export default FormTwo;