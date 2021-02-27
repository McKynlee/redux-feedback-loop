import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Form.css';
import FormCompOne from '../FormCompletion/FormComp1';

// "Landing page" Component to display upon page load:
// This page displays question 1 and sends user answers to redux
function FormOne() {
  const history = useHistory();
  const formOneFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  console.log(formOneFeedback);

  const handleNext = () => {
    //TODO: verify selection required:
    let selectedValue = document.getElementById("feeling").value;
    if (selectedValue === "") {
      alert('Number must be selected!')
    } else {
      history.push('/form2');
    }
    // TODO: save selection to redux
  }

  return (
    <div>
      {/* Show how many / 4 questions complete: */}
      <FormCompOne />

      <label htmlFor="feeling">How are you feeling today?</label>
      <select name="feeling" id="feeling" required>
        <option value="">Choose One</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleNext}>NEXT</button>
    </div>
  )
} // end FormOne

export default FormOne;