import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { configureStore } from 'setup/store';

import App from './App';
import Api from './services/api'

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const api = new Api('');
const { store } = configureStore({ api });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
