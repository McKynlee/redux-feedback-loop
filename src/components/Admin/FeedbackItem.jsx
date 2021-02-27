
function FeedbackItem({ userFeedbackRow }) {
  return (
    <tr className="admin-table">
      <td className="admin-table">{userFeedbackRow.feeling}</td>
      <td className="admin-table">{userFeedbackRow.understanding}</td>
      <td className="admin-table">{userFeedbackRow.support}</td>
      <td className="admin-table">{userFeedbackRow.comments}</td>
      <td className="admin-table">Flag icon</td>
      <td className="admin-table"></td>
    </tr>
  )
} // end FeedbackItem

export default FeedbackItem;