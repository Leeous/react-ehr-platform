import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { onUnhandledRequest } from 'msw';

async function enableMocking() {
  if (process.env.NODE_ENV === 'development' || window.location.hostname.includes('leeous.com')) {
    const { worker } = await import('./mocks/browser');

    return worker.start({
      onUnhandledRequest: 'bypass'
    });
  }
}

enableMocking().then(() => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    );
  }
});