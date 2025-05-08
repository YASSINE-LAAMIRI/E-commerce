
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Erreur from './pages/Erreur';
import NavBars from './components/navbars/NavBars';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/actions/authAction';
import Dashboard from './pages/Dashboard';
//import AdminRoute from './routes/AdminRoute';

function App() {
  const dispatch= useDispatch()

  const isAuth=useSelector(state=>state.authReducer.isAuth)
  const user = useSelector(state=>state.authReducer.user)
  
  
  useEffect(()=>{
    if (localStorage.getItem("token")){
      dispatch(current())
    }
  },[dispatch])
  return (
    <div className="App">
  
   {/* navbars dans toutes les pages */}
   <NavBars/>

   {/* creation des routes  */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    {isAuth?(
    <Route path='/profile' element={<Profile/>}/>):(
    <>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    </>)}
    {/* pour protéger ma route aadmin */}

   {/* <Route path='/admin' element={<AdminRoute isAdmin={user.isAdmin}/>}>
    <Route path='/admin' element={<Dashboard/>}/>  

   </Route> */}
  
  {/* {user?.isAdmin && <Route path="/admin" element={<Dashboard />} />} */}

  {user.isAdmin&& <Route path="/admin" element={<Dashboard />}/>}
    <Route path='/*' element={<Erreur/>}/>
   </Routes>
    </div>

  );
}

export default App;
