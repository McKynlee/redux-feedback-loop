import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Route to this page when user clicks to edit FormThree answer from ReviewPage:
// This page re-displays question 3 and sends new user answer to reducer
// Differences from original FormThree: no completion bar rather original answer displayed,
// and NEXT button is replaced by Return to Review button
function EditForm3() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Bring in saved input from FormThree for user to edit:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  let originalAnswer = currentUserFeedback.support;

  // When Return to Review button clicked, 
  // save input and navigate to review page
  const handleReturnToReview = () => {
    // Capture value selected by user in dropdown:
    let selectedValue = document.getElementById("supported").value;

    // Verify selection is not blank:
    if (selectedValue === "") {
      alert('Number must be selected!')
    } else {
      // When selection not blank, save it to current feedback:
      dispatch({
        type: 'SET_SUPPORT_FEEDBACK',
        payload: selectedValue,
      })
      history.push('/review');
    }
  }

  return (
    <div>
      <h3>Edit your answer:</h3>
      <h4>Your original answer was: {originalAnswer}</h4>
      <label htmlFor="supported">How well are you being supported?</label>
      <select name="supported" id="supported">
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
} // end EditForm3

export default EditForm3;