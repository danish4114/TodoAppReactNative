/** @format */

import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {name as appName} from './app.json';
import makeRootReducer from './src/redux/reducer'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(makeRootReducer,applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () =>ReduxApp);
