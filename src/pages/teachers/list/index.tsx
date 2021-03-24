import { Link } from 'react-router-dom';

export default function TeachersList() {
  return (
    <>
      <h1>Students list page</h1>
      <Link to="/teachers/details">Details</Link>
      <br />
      <Link to="/teachers/form">Form</Link>
    </>
  );
}