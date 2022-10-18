import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import * as React from 'react';
import { ApplicationState } from '@Store/index';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Store } from 'redux';

interface MainProps {
  store: Store<ApplicationState>;
}

const Main: React.FC<MainProps> = ({ store }: MainProps) => (
  <Provider store={store}>
    <ReduxToastr
      timeOut={9000}
      newestOnTop={true}
      preventDuplicates={true}
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar={true}
      closeOnToastrClick={true}
    />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

export default Main;
