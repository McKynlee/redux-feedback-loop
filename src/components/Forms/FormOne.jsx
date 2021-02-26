import { useHistory } from 'react-router-dom';
import './FormOne.css';
import FormCompOne from '../FormCompletion/FormComp1';

// Component to display upon page load:
function FormOne() {
  const history = useHistory();

  const handleNext = () => {
    //TODO: verify selection required:

    // TODO: save selection to redux

    history.push('/form2');
  }

  return (
    <div>
      <FormCompOne />
      <label for="feeling">How are you feeling today?</label>
      <select name="feeling" id="feeling" required>
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
} // end FormOne

export default FormOne;