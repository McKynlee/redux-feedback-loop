import { useHistory } from 'react-router-dom';
import FormCompTwo from '../FormCompletion/FormComp2';
import { useDispatch } from 'react-redux';
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
      history.push('/form3');
    }
  } // end handleNext

  return (
    <div className="card-wrapper">
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
                  onClick={handleNext}>
                  NEXT
            </Button>
              </Box>
            </CardActions>
            {/* Show how many / 4 questions complete: */}
            <FormCompTwo />
          </CardContent>
        </Card>
      </Box>
    </div>
  )
} // end FormTwo

export default FormTwo;