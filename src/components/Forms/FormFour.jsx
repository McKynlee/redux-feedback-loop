import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FormCompFour from '../FormCompletion/FormComp4';

// Component to display upon hitting NEXT in FormThree:
function FormFour() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Create local state to handle input comment
  const [commentInput, setCommentInput] = useState('test comment');

  // When 'Review' button clicked, 
  // save input and navigate to next page
  const handleNext = () => {
    // Save selection to redux store:
    dispatch({
      type: 'SET_COMMENT_FEEDBACK',
      payload: commentInput,
    })
    history.push('/review');
  }

  return (
    <div>
      {/* Show how many / 4 questions complete: */}
      <FormCompFour />
      <label>
        Any comments you want to leave?
        <input type="text" rows="3" value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value)
          }} />
      </label>
      <button onClick={handleNext}>REVIEW</button>
    </div>
  )
} // end FormFour

export default FormFour;