import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Programs/App.js';
import reportWebVitals from './Scripts/reportWebVitals';
import { AppsArea } from './Context/appsContext';
import { ThemeProvider } from './Context/themeContext.js';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <AppsArea>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AppsArea>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
