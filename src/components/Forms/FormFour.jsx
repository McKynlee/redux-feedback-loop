import { useHistory } from 'react-router-dom';

// Component to display upon hitting NEXT in FormThree:
function FormFour() {
  const history = useHistory();

  const handleNext = () => {
    // TODO: save selection to redux

    history.push('/review');
  }

  return (
    <div>
      <table className="form-completion-marker">
        <thead>
          <tr>
            <th>
              3 of 4
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
      <label for="comments">Any comments you want to leave?</label>

      <input type="text" />
      <button onClick={handleNext}>REVIEW</button>
    </div>
  )
} // end FormFour

export default FormFour;