// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='./index.d.ts'/>
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom/client';

// @ts-ignore
const store = configureStore(history);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main store={store} />
  </React.StrictMode>
);

serviceWorker.unregister();
