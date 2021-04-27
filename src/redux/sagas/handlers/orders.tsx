import { call, put } from "redux-saga/effects";
import { requestGetOrder } from '../requests/order'
import { setOrders } from '../../reducers/orders'


export function* handleGetOrders(): any {
  try {
    const response = yield call(requestGetOrder);
    const { data } = response;
    yield put(setOrders(data));
  } catch (error) {
    console.log(error);
  }
}