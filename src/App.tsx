import { lazy, Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import LaboratoriesDetails from './pages/laboratories/details';
import LaboratoriesForm from './pages/laboratories/form';
import LaboratoriesList from './pages/laboratories/list';
// import StudentsDetails from './pages/students/details';
// import StudentsForm from './pages/students/form';
// import StudentsList from './pages/students/list';
// import TeachersDetails from './pages/teachers/details';
// import TeachersForm from './pages/teachers/form';
// import TeachersList from './pages/teachers/list';

function App() {
  const StudentsList = lazy(() => import('./pages/students').then(module => ({default:module.StudentList})));
  const StudentsDetails = lazy(() => import('./pages/students').then(module => ({default:module.StudentDetails})));
  const StudentsForm = lazy(() => import('./pages/students').then(module => ({default:module.StudentsForm})));

  const TeachersList = lazy(() => import('./pages/teachers').then(module => ({default: module.TeachersList})));
  const TeachersDetails = lazy(() => import('./pages/teachers').then(module => ({default: module.TeachersDetails})));
  const TeachersForm = lazy(() => import('./pages/teachers').then(module => ({default: module.TeachersForm})));





  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/students/list">Students</NavLink></li>
            <li><NavLink to="/teachers/list">teachers</NavLink></li>
            <li><NavLink to="/laboratories/list">laboratories</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/students/list' component={StudentsList} />
            <Route path='/students/form' component={StudentsForm} />
            <Route path='/students/details' component={StudentsDetails} />
            <Route path='/teachers/list' component={TeachersList} />
            <Route path='/teachers/form' component={TeachersForm} />
            <Route path='/teachers/details' component={TeachersDetails} />
            <Route path='/laboratories/list' component={LaboratoriesList} />
            <Route path='/laboratories/form' component={LaboratoriesForm} />
            <Route path='/laboratories/details' component={LaboratoriesDetails} />
            <Route path='/' component={Home} exact />
          </Switch>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
