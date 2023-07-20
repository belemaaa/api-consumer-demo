import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import PostRequest from './components/PostRequest';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<PostRequest/>}/>
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
