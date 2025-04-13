import '../Styles/App.css';
import { Desktop } from './Desktop/Desktop';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Desktop/>} />
      </Routes>
    </div>
  );
}

export default App;
