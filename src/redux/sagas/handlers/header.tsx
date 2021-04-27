import { call, put } from "redux-saga/effects";
import { requestGetHeader } from '../requests/header'
import { setHeader } from '../../reducers/header'


export function* handleGetHeader(): any {
  try {
    const response = yield call(requestGetHeader);
    const { data } = response;
    yield put(setHeader(data));
  } catch (error) {
    console.log(error);
  }
}