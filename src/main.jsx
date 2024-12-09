import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/sotr.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
  <BrowserRouter>
  <Provider store={store}>

  <App />
  </Provider>

  </BrowserRouter>
  

  </StrictMode>,
)
