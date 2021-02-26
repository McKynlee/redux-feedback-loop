import { useHistory } from 'react-router-dom';

// Component to display upon hitting NEXT in FormOne:
function FormTwo() {
  const history = useHistory();

  const handleNext = () => {
    // TODO: save selection to redux

    history.push('/form3');
  }

  return (
    <div>
      <table className="form-completion-marker">
        <thead>
          <tr>
            <th>
            </th>
            <th>
              2 of 4
          </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="form-green-bg"></td>
            <td className="form-green-bg"></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <label for="content">How well are you understanding the content?</label>

      <select name="content" id="content">
        <option value="blank"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleNext}>NEXT</button>
    </div>
  )
} // end FormTwo

export default FormTwo;