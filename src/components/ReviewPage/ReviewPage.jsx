import { useHistory } from 'react-router-dom';

// Component to display upon hitting NEXT in FormFour:
function ReviewPage() {
  const history = useHistory();

  const submitToSuccess = () => {
    console.log('submitToSuccess');
    // axios POST info, in the .then():
    history.push('/success');
  }

  return (
    <div>
      <h2>ReviewPage</h2>
      {/* // Display data captured from input here: useSelect from store */}
      <button onClick={submitToSuccess}>SUBMIT</button>
    </div>
  )
} // end ReviewPage

export default ReviewPage;