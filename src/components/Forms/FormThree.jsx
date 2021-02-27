import { useHistory } from 'react-router-dom';
import FormCompThree from '../FormCompletion/FormComp3';
import { useDispatch } from 'react-redux';

// Component to display upon hitting NEXT in FormTwo:
function FormThree() {
  const history = useHistory();
  const dispatch = useDispatch();

  // When NEXT button clicked, 
  // save input and navigate to next page
  const handleNext = () => {
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
      history.push('/form4');
    }
  }

  return (
    <div>
      {/* Show how many / 4 questions complete: */}
      <FormCompThree />

      <label htmlFor="supported">How well are you being supported?</label>
      <select name="supported" id="supported">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleNext}>NEXT</button>
    </div>
  )
} // end FormThree

export default FormThree;