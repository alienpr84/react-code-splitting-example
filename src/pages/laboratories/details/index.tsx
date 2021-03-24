import { useHistory } from 'react-router-dom';

export default function LaboratoriesDetails() {
  const history = useHistory();

  return (
    <>
      <h1>Laboraries details</h1>
      <button onClick={()=>{history.goBack()}}>Back</button>
    </>
  );
}