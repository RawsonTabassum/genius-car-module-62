import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AddService from './pages/AddService/AddService';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import ManageServices from './pages/ManageServices/ManageServices';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>
        <Route path='/manageservice' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>}>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
