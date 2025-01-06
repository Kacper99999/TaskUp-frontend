import { useEffect, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './components/route/PrivateRoute';
import { RestrictedRoute } from './components/route/RestrictedRoute';
import { MainLayout } from './components/layouts/MainLayout';
import { useAuth } from 'hooks';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const TasksPage = lazy(() => import('./pages/TasksPage'));

function App() {

  const isRefreshing = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={MainLayout}/>
        <Route index element={HomePage}/>
      <Route
      path='/register'
      element={
        <RestrictedRoute redirectTo='/tasks' component={<RegisterPage/>}/>
      }/>
      <Route
      path='/login'
      element={
        
      }
      />
    </Routes>
    <BrowserRouter/>
    </>
  );
}

export default App;
