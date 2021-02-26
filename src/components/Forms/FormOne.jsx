import { useHistory } from 'react-router-dom';
import './Form.css';
import FormCompOne from '../FormCompletion/FormComp1';

// Component to display upon page load:
function FormOne() {
  const history = useHistory();

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
      <FormCompOne />
      <label for="feeling">How are you feeling today?</label>
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