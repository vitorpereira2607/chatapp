import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContex.jsx';
import { Toaster } from 'react-hot-toast';
import { SocketProvider } from './context/SocketContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketProvider>
        <Toaster />
        <App />
        </SocketProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
