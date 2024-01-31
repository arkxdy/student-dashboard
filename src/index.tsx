import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './components/Template/Layout';
import StudentDashboard from './components/Student/StudendDashboard';
import About from './pages/About';
import StudentProfile from './components/Student/StudentProfile';
import Error from './pages/Error';
import UnderDevelopment from './pages/UnderDevelopment';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<StudentDashboard></StudentDashboard>}></Route>
      <Route path='student' element={<StudentProfile></StudentProfile>}>
        <Route path=':username' element={<StudentDashboard></StudentDashboard>}/>
      </Route>
      <Route path='about' element={<About></About>}>
        <Route path=':userid' element={<About/>}></Route>
      </Route>
      <Route path='team' element={<UnderDevelopment></UnderDevelopment>}></Route>
      <Route path='courses' element={<UnderDevelopment></UnderDevelopment>}></Route>
      <Route path='admin' element={<UnderDevelopment></UnderDevelopment>}></Route>
      <Route path='underdevelopment' element={<UnderDevelopment/>}/>
      <Route path='*' element={<Error></Error>}></Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
