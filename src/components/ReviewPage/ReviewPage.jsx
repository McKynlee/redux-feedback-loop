import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Component to display upon hitting NEXT in FormFour:
function ReviewPage() {
  const history = useHistory();

  // Bring in entire set of saved inputs for this user:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  const submitToSuccess = () => {
    console.log('submitToSuccess');

    // Send info to the server:
    axios.post('/feedback', {
      feeling: currentUserFeedback.feeling,
      understanding: currentUserFeedback.understanding,
      support: currentUserFeedback.support,
      comments: currentUserFeedback.comments
    })
      .then(response => {
        console.log('POST response:', response);

        // Upon successful POST, route to success page:
        history.push('/success');
      }).catch(error => {
        console.log('Error posting:', error);
      })
  } // end submitToSuccess

  return (
    <div>
      <h2>ReviewPage</h2>
      {/* // Display data captured from input here: useSelect from store */}
      <button onClick={submitToSuccess}>SUBMIT</button>
    </div>
  )
} // end ReviewPage

export default ReviewPage;