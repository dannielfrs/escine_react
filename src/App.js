import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './app.scss'
import './assets/libraries/aos'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'
import { userGet } from './store/actions/usersActions'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './hooks/ScrollToTop'

function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  useEffect(() => {
    dispatch(userGet())
  }, [])

  return (
    <>
      <Toaster
        toastOptions={{ duration: 4000 }} // Show notifications
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" exact element={user.isLoggedin ? <Movies /> : <Navigate to='/login' />} />
          <Route path="/movies/add" exact element={user.isLoggedin ? <Add /> : <Navigate to='/login' />} />
          <Route path="/movies/edit/:id" exact element={user.isLoggedin ? <Edit /> : <Navigate to='/login' />} />
          <Route path="/login" element={user.isLoggedin ? <Navigate to='/movies' /> : <Login />} />
          <Route path="/register" element={user.isLoggedin ? <Navigate to='/movies' /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;