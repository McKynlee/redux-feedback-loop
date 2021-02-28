import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

// Component to display upon hitting NEXT in FormThree:
function EditForm4() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Bring in saved input from FormFour for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.comments;

  // Create local state to handle input comment
  const [commentInput, setCommentInput] = useState(originalAnswer);

  // When Return to Review button clicked, 
  // save input and navigate to review page
  const handleReturnToReview = () => {
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
    <div>
      <label>
        Edit your comment:
        <input type="text" rows="3" value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value)
          }} />
      </label>
      <button onClick={handleReturnToReview}>Return to Review</button>
    </div>
  )
} // end EditForm4

export default EditForm4;