import { Route, Routes } from 'react-router-dom';
import './App.css';

import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services/Services';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <>
        <AuthProvider>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={ <Header/>}></Route>
            <Route exact path='/home' element={ <Header/>}></Route>
            <Route exact path='/about' element={<Header/>}></Route>
            <Route exact path='/services' element={<Services/>}></Route>
            <Route exact path='/services/:id' element={<PrivateRoute> <ServiceDetails /> </PrivateRoute> }></Route>
            <Route exact path='/testimonial' element={<Header/>}></Route>
            <Route exact path='/contact' element={<Header/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='*' element={<Error/>}></Route>
          </Routes>
        </AuthProvider>
    </>
  );
}

export default App;
