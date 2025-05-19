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
import { current} from './JS/actions/authAction';
import Dashboard from './pages/Dashboard';
import ErrorToast from './components/ErrorToast';
import DetailProd from './pages/DetailProd';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Commander from './pages/Commander';
import MyOrders from './components/MyOrders';
import Loading from './components/Loading';
import Contactez from './pages/Contactez';
import AllOrders from './components/AllOrders';



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const user = useSelector(state => state.authReducer.user);
  const errors = useSelector(state => state.authReducer.errors);
 const isLoad = useSelector(state=>state.authReducer.isLoad)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);


  return (
    <div className="App">
      {/* {isLoad && <Loading/>} */}
      <ErrorToast errors={errors} />
      <NavBars />
      
      {/* Création des routes */}
      <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/cart' element={<Cart />} />  
        {/* Ajout de la route pour le panier */}

        {user && isAuth ? (
<>
          <Route path='/profile' element={<Profile />} />
          <Route path = '/commander' element = { <Commander/> } /> 
          <Route path='/prod/:id' element={<DetailProd />} />         
          <Route path = '/cart' element = { <Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
          
             <Route path="/contactez-nous" element={<Contactez/>} />
       


           </>
        ) : (
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
               <Route path="/contactez-nous" element={<Contactez/>} />
          </>
        )}
 {user && user.isAdmin && (
          <>
        <Route path="/admin" element={<Dashboard />} />
         <Route path = '/admin/orders' element = { <AllOrders /> } />
        </>
         )}
         {!isAuth &&  <Route path='/prod/:id' element={<DetailProd />} />}

        
        <Route path='/*' element={<Erreur />} />
      </Routes>

      <Footer />
    </div>
  );
}



export default App;
