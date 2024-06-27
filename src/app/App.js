import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import SuccessPage from './pages/FormSuccesPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form submitted" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};
export default App;
