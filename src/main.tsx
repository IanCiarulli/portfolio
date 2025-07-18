import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname);

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  window.location.reload();
} else {
  window.scrollTo(0, 0);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
