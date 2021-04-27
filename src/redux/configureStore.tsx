import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import headerReducer from './reducers/header'
import orderReducer from './reducers/orders'
import { watcherSaga } from './sagas/rootSaga'
const reducer = combineReducers({
  header: headerReducer,
  orders: orderReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;