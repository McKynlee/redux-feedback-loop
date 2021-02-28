import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  makeStyles,
} from '@material-ui/core';

// Create variable to transfer material-ui styles:
const useStyles = makeStyles({
  container: {
    width: 500,
    margin: auto,
  }
}); // end useStyles

// "Landing page" Component to display upon page load:
// This page displays question 1 and sends user answers to redux
function FormOne() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  // When NEXT button clicked, 
  // save input and navigate to next page
  const handleNext = () => {
    // Capture value selected by user in dropdown:
    let selectedValue = document.getElementById("feeling").value;

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
      <Card className={classes.container}>
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
            name="feeling" id="feeling" required>
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