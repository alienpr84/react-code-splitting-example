import { Link } from "react-router-dom";

export default function LaboratoriesList() {
  return (
    <>
      <h1>Laboratories list page</h1>
      <Link to="/laboratories/details">Details</Link>
      <br />
      <Link to="/laboratories/form">Form</Link>
    </>
  );
}