import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent
} from '@material-ui/core';
import { useState } from 'react';
import swal from 'sweetalert';

// Route to this page when user clicks to edit FormTwo answer from ReviewPage:
// This page re-displays question 2 and sends new user answer to reducer
// Differences from original FormTwo: no completion bar rather original answer displayed,
// and NEXT button is replaced by Return to Review button
function EditForm2() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Variable to capture value user selects in dropdown:
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (userSelection) => {
    setSelectedValue(userSelection);
  }

  // Bring in saved input from FormTwo for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.understanding;

  // When Return to Review button clicked, 
  // save input and navigate to review page
  const handleReturnToReview = () => {
    // Verify selection is not blank and capture selected value:
    if (selectedValue === "") {
      swal({
        title: "Number must be selected!",
        icon: "warning",
      });
    } else {
      // When selection not blank, save it to currentFeedbackReducer
      dispatch({
        type: 'SET_UNDERSTANDING_FEEDBACK',
        payload: selectedValue,
      })
      history.push('/review');
    }
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
            <Typography variant="h5" component="h2">
              How well are you understanding the content?
        </Typography>
            <FormControl>
              <InputLabel id="type-select-label">
              </InputLabel>
              <Select labelId="type-select-label"
                name="content"
                value={selectedValue}
                id="content"
                onChange={(event) => handleChange(event.target.value)}
              >
                <MenuItem value=""><em>Choose One</em></MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
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
} // end EditForm2

export default EditForm2;