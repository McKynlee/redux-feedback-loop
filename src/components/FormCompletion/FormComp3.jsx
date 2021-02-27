// Track how many q's out of 4 have been answered
// to display on each corresponding form page:
function FormCompThree() {
  return (
    <table className="form-completion-marker">
      <thead>
        <tr>
          <th>
          </th>
          <th>
            3 of 4
    </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="form-green-bg"></td>
          <td className="form-green-bg"></td>
          <td className="form-green-bg"></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
} // end FormComp3

export default FormCompThree;