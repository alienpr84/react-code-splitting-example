import { useHistory } from "react-router-dom";

export default function TeachersDetails() {
  const history = useHistory();

  return (
    <>
      <h1>Teachers details page</h1>
      <button onClick={()=>{history.goBack()}}>Back</button>
    </>
  );
}