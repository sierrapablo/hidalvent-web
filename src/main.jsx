import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routes/routes';
import './styles/globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
