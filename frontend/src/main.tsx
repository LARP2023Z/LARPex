import * as ReactDOM from 'react-dom/client';
import App from './common/App';
import './Background.css';
import { MyAppBar } from './common/AppBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <MyAppBar />
  </>

);
