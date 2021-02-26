import { useHistory } from 'react-router-dom';

// Component to display upon page load:
function FormOne() {
  const history = useHistory();

  const handleNext = () => {
    // TODO: save selection to redux

    history.push('/form2');
  }

  return (
    <div>
      <label for="feeling">How are you feeling today?</label>

      <select name="feeling" id="feeling">
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
} // end FormOne

export default FormOne;