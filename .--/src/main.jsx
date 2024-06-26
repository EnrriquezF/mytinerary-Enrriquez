import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
)
