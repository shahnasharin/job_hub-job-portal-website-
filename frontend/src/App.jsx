// import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'
import Login from './Components/Pages/Login/Login'
import UserRegister from './Components/Pages/Register/UserRegister'
import RecruiterRegister from './Components/Pages/Register/RecruiterRegister'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import VerifyOTP from './Components/Pages/VerifyOtp/VerifyOtp';
// import './App.css'
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <Provider store = {Store} >
    <div className='App'>
      <AuthProvider>
      {/* <Navbar/> */}
      
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/user-register' element={<UserRegister/>}/>
        <Route path='/recruiter-register' element={<RecruiterRegister/>}/>
        <Route path='/verify-otp' element={<VerifyOTP/>}/>
      </Routes>
      <Footer/>
      </AuthProvider>
    </div>
    </Provider>
  )
}

export default App
