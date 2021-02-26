import { useHistory } from 'react-router-dom';
import FormCompThree from '../FormCompletion/FormComp3';

// Component to display upon hitting NEXT in FormTwo:
function FormThree() {
  const history = useHistory();

  const handleNext = () => {
    // TODO: save selection to redux

    history.push('/form4');
  }

  return (
    <div>
      <FormCompThree />
      <label for="supported">How well are you being supported?</label>
      <select name="supported" id="supported">
        <option value="blank"></option>
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