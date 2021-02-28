// Track how many q's out of 4 have been answered
// to display on each corresponding form page:
function FormCompOne() {
  return (
    <table className="form-completion-marker">
      <thead>
        <tr>
          <th></th>
          <th>1 of 4</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="form-green-bg"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
} // end FormCompOne

export default FormCompOne;