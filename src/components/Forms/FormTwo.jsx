import { useHistory } from 'react-router-dom';
import FormCompTwo from '../FormCompletion/FormComp2'

// Component to display upon hitting NEXT in FormOne:
function FormTwo() {
  const history = useHistory();

  const handleNext = () => {
    // Validate selection:
    let selectedValue = document.getElementById("content").value;
    if (selectedValue === "") {
      alert('Number must be selected!')
    } else {
      history.push('/form3');
    }

    // TODO: save selection to redux
  }

  return (
    <div>
      <FormCompTwo />
      <label for="content">How well are you understanding the content?</label>
      <select name="content" id="content">
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
} // end FormTwo

export default FormTwo;