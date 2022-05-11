import { takeLatest, call, put } from 'redux-saga/effects';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actions/users';

import Api from '../apis/users';

function* signIn(action: { payload: object, cb: (arg: any) => void }) {
  try {
    const { data } = yield call(Api.signIn, action.payload);
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { data },
    });
    if (action.cb) {
      action.cb(data)
    }
  } catch (e: any) {
    if (action.cb) {
      action.cb(e.response.data)
    }
  }
}

export default function* watcher() {
  yield takeLatest<any>(SIGN_IN_REQUEST, signIn);
}
