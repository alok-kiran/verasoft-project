import { takeLatest } from "redux-saga/effects";
import { GET_HEADER } from '../reducers/header'
import { GET_ORDERS } from '../reducers/orders'
import { handleGetHeader } from '../sagas/handlers/header'
import { handleGetOrders } from '../sagas/handlers/orders'

export function* watcherSaga() {
  yield takeLatest(GET_HEADER, handleGetHeader);
  yield takeLatest(GET_ORDERS, handleGetOrders)

}