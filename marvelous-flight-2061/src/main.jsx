import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import AppcontextProvider from './Context/Appcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <AppcontextProvider>
    <App />
    </AppcontextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
