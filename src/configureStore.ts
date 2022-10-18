import { ApplicationState, createRootReducer, rootSaga } from './store';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { routerMiddleware } from 'connected-react-router';

export default function configureStore(
  history: History,
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    {},
    composeEnhancers(
      responsiveStoreEnhancer,
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
