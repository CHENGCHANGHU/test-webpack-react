import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@/App';
import '@/index.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
  <App />
);
