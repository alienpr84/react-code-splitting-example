import { Link } from 'react-router-dom';

export default function StudentsList() {
  return (
    <>
      <h1>Students list page</h1>
      <Link to="/students/details">Details</Link>
      <br />
      <Link to="/students/form">Form</Link>
    </>
  );
}