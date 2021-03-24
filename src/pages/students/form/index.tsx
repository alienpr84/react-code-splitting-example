import { useHistory } from "react-router-dom";

export default function StudentsForm() {
  const history = useHistory();

  return (
    <>
      <h1>Students form page</h1>
      <button onClick={()=>{history.goBack()}}>Back</button>
    </>
  );
}