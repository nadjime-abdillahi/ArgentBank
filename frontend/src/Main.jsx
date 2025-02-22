import { store } from './redux/store';
import{ Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
