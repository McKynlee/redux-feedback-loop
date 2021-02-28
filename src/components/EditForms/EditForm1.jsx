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
  CardContent,
} from '@material-ui/core';
import { useState } from 'react';
import swal from 'sweetalert';

// Route to this page when user clicks to edit answer to FormOne from ReviewPage:
// This page re-displays question 1 and sends new user answer to reducer
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
      swal({
        title: "Number must be selected!",
        icon: "warning",
      });
    } else {
      // When selection not blank, save it to currentFeedbackReducer
      dispatch({
        type: 'SET_FEELING_FEEDBACK',
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
        <Card
          variant="outlined"
        >
          <CardContent className="card-content">
            <Typography>
              How are you feeling today?
          </Typography>
            <FormControl>
              <InputLabel id="type-select-label">
              </InputLabel>
              <Select labelId="type-select-label"
                name="feeling"
                value={selectedValue}
                id="feeling"
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
    </div >
  )
} // end EditForm1

export default EditForm1;