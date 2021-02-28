import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './Form.css';
import FormCompOne from '../FormCompletion/FormComp1';
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Typography,
  Box,
  Card,
  CardHeader,
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
      alert('Number must be selected!')
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
    <div>
      <Card className="card-container">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <Typography variant="h5" component="h2">
            How are you feeling today?
          </Typography>
        </CardContent>
        {/* Show how many / 4 questions complete: */}
        <FormCompOne />

        <FormControl>
          <InputLabel id="type-select-label">
          </InputLabel>
          <Select labelId="type-select-label"
            name="feeling"
            value={selectedValue}
            id="feeling"
            onChange={(event) => handleChange(event.target.value)}
            required>
            <MenuItem value=""><em>Choose One</em></MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>
        <Box m={3}>
          <Button variant="contained" color="primary"
            onClick={handleNext}>
            NEXT
      </Button>
        </Box>
      </Card>
    </div >
  )
} // end FormOne

export default FormOne;