// Track how many q's out of 4 have been answered
// to display on each corresponding form page:
function FormCompFour() {
  return (
    <table className="form-completion-marker">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>
            4 of 4
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="form-green-bg"></td>
          <td className="form-green-bg"></td>
          <td className="form-green-bg"></td>
          <td className="form-green-bg"></td>
        </tr>
      </tbody>
    </table>
  )
} //end FormCompFour

export default FormCompFour;