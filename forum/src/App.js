import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  );
}

export default App;
