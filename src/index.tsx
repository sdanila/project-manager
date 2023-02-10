import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';

import { configureStore, IApplicationState } from 'setup/store';

import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import App from './App';
import Api from './services/api'

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const api = new Api('');
const { store } = configureStore({ api });

export const useAppDispatch = () => useDispatch<ThunkDispatch<IApplicationState, any, AnyAction>>()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
