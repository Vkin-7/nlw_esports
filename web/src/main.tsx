import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'swiper/css';
import 'swiper/css/navigation';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
