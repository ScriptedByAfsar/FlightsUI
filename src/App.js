import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './UserComponent/LoginUser';
import Signup from './UserComponent/SignupUser';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginUser />}/>
          <Route path='/Signup' element={<Signup />}/>
        </Routes>
      </Router>
  );
}

export default App;
