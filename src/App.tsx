import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/bar/TopBar';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <TopBar />
      <main>
        <Routes>

          <Route path='/' element={<SignIn />} />
          <Route path='home' element={<Home />} />
          {/* <Route path='ceasar' element={<Ceasar />} />
          <Route path='likeenigma' element={<LikeEnigma />} />
          <Route path='todo' element={<TodoWrapper />} />
          <Route path='counter' element={<Counter />} />
          <Route path='shop' element={<Shop />} />

          <Route path="*" element={<Page404 />} /> */}

        </Routes>
      </main>
    </Router>
  );
}

export default App;
