import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './common/main.scss';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/WalletFrontendTeamProject">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
