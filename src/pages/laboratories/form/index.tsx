import { useHistory } from "react-router-dom";

export default function LaboratoriesForm() {
  const history = useHistory();

  return (
    <>
      <h1>Laboraries form</h1>
      <button onClick={()=>{history.goBack()}}>Back</button>
    </>
  );
}