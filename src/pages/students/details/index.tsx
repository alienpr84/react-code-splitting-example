import { useHistory } from "react-router-dom";

export default function StudentsDetails() {
  const history = useHistory();

  return (
    <>
      <h1>students details page</h1>
      <button onClick={()=>{history.goBack()}}>Back</button>
    </>
  );
}