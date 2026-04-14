// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx'; // ADD THIS
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider> {/* WRAP APP WITH THIS */}
      <App />
    </AuthProvider>
  </StrictMode>,
);