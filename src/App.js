import './App.css';
import {Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
