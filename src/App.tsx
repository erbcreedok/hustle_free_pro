import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/bar/TopBar';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BottomNav from './components/dashboard/navigation/BottomNav';
import './App.css';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 }

function App() {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  return (
    <Router>
      {breakpoint !== 'mobile' && <TopBar />}
        <main>
          <Routes>

            <Route path='/' element={<SignIn />} />
            <Route path='privacy' element={<PrivacyPolicy />} />
            <Route path='dashboard' element={<Dashboard />} />
            {/*

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
