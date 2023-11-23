import { useDispatch } from 'react-redux';
import { useEffect, lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { updateUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RedirectedRoute';
import { useAuth } from '../hooks/useAuth';
import { AppDispatch } from '../redux/store';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {isUpdating} = useAuth();

  useEffect(()=> {
    dispatch(updateUser())
  },[dispatch]);

  return (
    isUpdating ? (<div></div>):
    (
<Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/register' element = {
      <RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>} />
      }
/>
      <Route path='/login' element = {
      <RestrictedRoute redirectTo='/contacts' component= {<LoginPage/>} />
      }
      />
    <Route path='/contacts' element = {
    <PrivateRoute redirectTo='/login' component ={<ContactsPage/>} />
    } 
    />
    </Route>
    </Routes>
    )

    )
}




