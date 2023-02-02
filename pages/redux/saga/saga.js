import { put, all, takeLatest, call } from "redux-saga/effects";
import { actions } from "../actiontypes/actiontypes";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function* setSentCom({ payload: { comments, id, value } }) {
  const time = yield Timestamp.now();
  let data = [
    ...comments,
    {
      name: `Visitor ${comments.length + 1}`,
      date: time,
      message: value,
    },
  ];

  try {
    yield updateDoc(doc(db, "blogs", id), {
      comments: data,
    });
    yield put({ type: actions.SET_CONF, payload: true });
  } catch (error) {
    yield put({ type: actions.SET_CONF, payload: false });
  }
}

function* setSent() {
  yield takeLatest(actions.SET_SENT, setSentCom);
}
export function* sagas() {
  yield all([call(setSent)]);
}
