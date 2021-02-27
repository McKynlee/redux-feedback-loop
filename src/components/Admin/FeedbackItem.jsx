
function FeedbackItem({ userFeedbackRow }) {

  // Grab id for feedback row and delete when button clicked:
  const handleDelete = (feedbackToDeleteId) => {
    console.log('handleDelete:', feedbackToDeleteId);
  }

  // Render row of data for each individual user input:
  return (
    <tr className="admin-table">
      <td className="admin-table">{userFeedbackRow.feeling}</td>
      <td className="admin-table">{userFeedbackRow.understanding}</td>
      <td className="admin-table">{userFeedbackRow.support}</td>
      <td className="admin-table">{userFeedbackRow.comments}</td>
      <td className="admin-table">Flag icon</td>
      <td className="admin-table">
        <button onClick={() => handleDelete(userFeedbackRow.id)}>DELETE</button>
      </td>
    </tr>
  )
} // end FeedbackItem

export default FeedbackItem;