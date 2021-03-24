import { useHistory } from "react-router-dom";

export default function TeachersForm() {
  const history = useHistory();

  return (
    <>
      <h1>Teachers page form</h1>
      <button onClick={()=>{history.goBack()}}>Back</button>
    </>
  );
}