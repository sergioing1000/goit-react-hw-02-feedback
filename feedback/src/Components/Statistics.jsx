import './statistics.css'


export const Statistics = ({data}) => {
  return (
    <>
      <h2>Statistics</h2>

      <table className="tabla">
        <thead>
            <tr>
                <th>Tipo de feedback</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Good</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Bad</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
      
    </>

  )
}
