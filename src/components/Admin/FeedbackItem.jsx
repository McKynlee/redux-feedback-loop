import axios from "axios";
import swal from 'sweetalert';

function FeedbackItem({ userFeedbackRow,
  fetchHistoricalFeedback }) {
  // Capture boolean value from db "flagged" column
  // to use in conditional rendering:
  let flaggedStatus = userFeedbackRow.flagged;
  // console.log('flaggedStatus:', userFeedbackRow.comments, flaggedStatus);

  // Create variables to carry conditional JSX generated
  // from handleFlagForReview down to return(...JSX):
  let renderingForFlaggedStatus;
  let cssForFlaggedStatus = "admin-table";

  // Control how the table data will be rendered for 'Flag for review'
  // so that when flaggedStatus is true, it will show that the admin has 
  // flagged that feedback for review
  switch (flaggedStatus) {
    case false:
      renderingForFlaggedStatus =
        <button onClick={() => handleFlagClick(userFeedbackRow.id)}>Flag</button>;
      break;
    case true:
      renderingForFlaggedStatus = 'FLAGGED!';
      cssForFlaggedStatus = "admin-table admin-flagged";
      break;
  }

  const handleFlagClick = (userIdToFlag) => {
    console.log('handleFlagClick:', userIdToFlag);
  } // end handleFlagClick

  // Grab id for feedback row and delete when button clicked:
  const handleDelete = (feedbackToDeleteId) => {
    // Alert admin-user to confirm they want to delete
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this feedback!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("This feedback has been deleted.", {
            icon: "success",
          });
          deleteFeedback(feedbackToDeleteId);
        } else {
          swal("Feedback saved!");
        }
      });
  } // end handleDelete

  const deleteFeedback = (feedbackToDeleteId) => {
    // Tell server to delete this feedback:
    axios.delete(`/feedback/${feedbackToDeleteId}`)
      .then(response => {
        console.log('Delete response:', response);
        fetchHistoricalFeedback();
      }).catch(error => {
        console.log('ERROR deleting:', error);
        alert('Error deleting feedback');
      })
  } // end deleteFeedback

  // Render row of data for each individual user input:
  return (
    <tr className={cssForFlaggedStatus}>
      <td className="admin-table">{userFeedbackRow.feeling}</td>
      <td className="admin-table">{userFeedbackRow.understanding}</td>
      <td className="admin-table">{userFeedbackRow.support}</td>
      <td className="admin-table">{userFeedbackRow.comments}</td>
      <td className="admin-table">{renderingForFlaggedStatus}</td>
      <td className="admin-table">
        <button onClick={() => handleDelete(userFeedbackRow.id)}>DELETE</button>
      </td>
    </tr>
  )
} // end FeedbackItem

export default FeedbackItem;