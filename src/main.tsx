import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const handlePageReload = () => {
  window.scrollTo(0, 0);

  if (window.location.hash) {
    const hasAlreadyReloaded = sessionStorage.getItem('scroll_handled');

    if (!hasAlreadyReloaded) {
      sessionStorage.setItem('scroll_handled', 'true');
      window.history.replaceState(null, '', window.location.pathname);
      window.location.reload();
      return;
    } else {
      sessionStorage.removeItem('scroll_handled');
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }
};

handlePageReload();

createRoot(document.getElementById('root')!).render(<App />);
