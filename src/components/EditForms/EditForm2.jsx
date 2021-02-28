import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Route to this page when user clicks to edit FormTwo answer from ReviewPage:
// This page re-displays question 2 and sends new user answer to reducer
// Differences from original FormTwo: no completion bar rather original answer displayed,
// and NEXT button is replaced by Return to Review button
function EditForm2() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Bring in saved input from FormTwo for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.understanding;

  // When Return to Review button clicked, 
  // save input and navigate to review page
  const handleReturnToReview = () => {
    // Capture value selected by user in dropdown:
    let selectedValue = document.getElementById("content").value;

    // Verify selection is not blank and capture selected value:
    if (selectedValue === "") {
      alert('Number must be selected!')
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
    <div>
      <h3>Edit your answer:</h3>
      <h4>Your original answer was: {originalAnswer}</h4>
      <label htmlFor="content">How well are you understanding the content?</label>
      <select name="content" id="content">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleReturnToReview}>Return to Review</button>
    </div>
  )
} // end EditForm2

export default EditForm2;