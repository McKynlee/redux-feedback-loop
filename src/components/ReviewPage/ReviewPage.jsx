import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Component to display upon hitting NEXT in FormFour:
function ReviewPage() {
  const history = useHistory();

  // Bring in entire set of saved inputs for this user,
  // so we can send it to server --> save in db:
  const currentUserFeedback = useSelector(store => {
    return store.currentFeedbackReducer;
  })

  // on submit, post current set of feedback to server
  // and reroute to '/success':
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
      {/* // Display data captured from user's input here: */}
      <section className="review-feedback" >
        <p>How you're feeling: {currentUserFeedback.feeling}</p>
        <p>How you're understanding the material: {currentUserFeedback.understanding}</p>
        <p>How well you feel supported: {currentUserFeedback.support}</p>
        <p>Additional comments: {currentUserFeedback.comments}</p>
        <button onClick={submitToSuccess}>SUBMIT</button>
      </section>
    </div>
  )
} // end ReviewPage

export default ReviewPage;