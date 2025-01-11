import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Auth0Provider
      domain="dev-bh2pb1g83y5d8u1g.us.auth0.com"
      clientId="PLo1zjsHtZnIyd79CtTfR6BpfQQUS0J7"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
