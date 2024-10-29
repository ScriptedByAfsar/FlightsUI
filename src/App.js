import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './UserComponent/LoginUser';
import Signup from './UserComponent/SignupUser';
import ForgotPassword from './UserComponent/ForgotPassword';
import ResetPassword from './UserComponent/ResetPassword';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginUser />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/ForgotPassword' element={<ForgotPassword />}/>
          <Route path='/ResetPassword' element={<ResetPassword />}/>
        </Routes>
      </Router>
  );
}

export default App;
