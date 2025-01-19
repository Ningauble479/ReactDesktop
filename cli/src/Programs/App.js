import '../Styles/App.css';
import { Desktop } from './Desktop/Desktop';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from '../Misc/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Desktop/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
