import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Register } from './components/Register.jsx'
import { Login } from './components/Login.jsx'

ReactDOM.createRoot(document.getElementById('login')).render(
  <React.StrictMode>
  <Register />
  <Login />
  </React.StrictMode>,
)
