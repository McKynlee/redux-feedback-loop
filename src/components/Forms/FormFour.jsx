import { useHistory } from 'react-router-dom';
import FormCompFour from '../FormCompletion/FormComp4';

// Component to display upon hitting NEXT in FormThree:
function FormFour() {
  const history = useHistory();

  const handleNext = () => {
    // TODO: save selection to redux

    history.push('/review');
  }

  return (
    <div>
      <FormCompFour />
      <label for="comments">Any comments you want to leave?</label>
      <input type="text" />
      <button onClick={handleNext}>REVIEW</button>
    </div>
  )
} // end FormFour

export default FormFour;