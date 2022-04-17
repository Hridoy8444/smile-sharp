
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import Album from './Pages/Album/Album/Album';
import SuccessFull from './Pages/CheckOut/SuccessFull';
import Blogs from './Pages/Blogs/Blogs';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/album' element={<Album></Album>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
       <Route path='/successfull' element={<SuccessFull></SuccessFull>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
