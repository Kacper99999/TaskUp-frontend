import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/route/PrivateRoute';
import { RestrictedRoute } from './components/route/RestrictedRoute';
import { MainLayout } from './components/layouts/MainLayout';
import { useAuth } from './hooks';
import { Suspense } from 'react';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const TasksPage = lazy(() => import('./pages/TasksPage'));

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
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
