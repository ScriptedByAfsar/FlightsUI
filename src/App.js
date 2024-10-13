import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './UserComponent/LoginUser';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginUser />}/>
        </Routes>
      </Router>
  );
}

export default App;
