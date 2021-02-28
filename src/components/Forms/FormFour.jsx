import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  TextField
} from '@material-ui/core';
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
    <div className="card-wrapper">
      <Box boxShadow={3}
        className="card-container"
      >
        <Card variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2"
              gutterBottom>
              Any comments you want to leave?
          </Typography>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">
              </InputLabel>
              <TextField id="outlined-basic" rows={3}
                label="Comments" variant="outlined"
                value={commentInput}
                onChange={(event) => {
                  setCommentInput(event.target.value)
                }} />
            </FormControl>
            <CardActions className="card-actions">
              <Box m={3}>
                <Button variant="contained" color="primary"
                  onClick={handleNext}>
                  REVIEW
              </Button>
              </Box>
            </CardActions>
            {/* Show how many / 4 questions complete: */}
            <FormCompFour />
          </CardContent>
        </Card>
      </Box>
    </div>
  )
} // end FormFour

export default FormFour;