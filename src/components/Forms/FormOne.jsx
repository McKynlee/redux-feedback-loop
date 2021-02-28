import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './Form.css';
import FormCompOne from '../FormCompletion/FormComp1';
import swal from 'sweetalert';
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

// "Landing page" Component to display upon page load:
// This page displays question 1 and sends user answers to redux
function FormOne() {
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
      history.push('/form2');
    }
  } // end handleNext

  return (
    <div className="card-wrapper">
      <Card className="card-container"
        variant="outlined">
        <CardContent className="card-content">
          <Typography variant="h5" component="h2">
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
                onClick={handleNext}>
                NEXT
              </Button>
            </Box>
          </CardActions>
          {/* Show how many / 4 questions complete: */}
          <FormCompOne />
        </CardContent>
      </Card>
    </div >
  )
} // end FormOne

export default FormOne;