import { useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/route/PrivateRoute';
import { RestrictedRoute } from './components/route/RestrictedRoute';
import { MainLayout } from './components/Layouts/MainLayout';
import { Suspense } from 'react';
import './App.css';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const TasksPage = lazy(() => import('./pages/TasksPage'));

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Navigate to ="/login" replace>
          </Navigate>}/>
        <Route
        path='/register'
        element={
          <RestrictedRoute redirectTo='/tasks' component={<RegisterPage/>}/>
        }/>
        <Route
        path='/login'
        element={
          <RestrictedRoute redirectTo='/tasks' component={<LoginPage/>}/>
        }
        />
        <Route
        path='/tasks'
        element={
          <PrivateRoute redirectTo='/login' component={<TasksPage/>}/>
        }
        />
        </Route>
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
