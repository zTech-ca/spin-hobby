import { takeLatest, all } from "redux-saga/effects";
import { login, setUser } from "../reducers";
import { requestLogin } from "../api";

function* loginSaga() {
  console.log("logging in right now!");

  yield requestLogin({ username: "anelmes0", password: "spinhobby" }).then(
    (res) => {
      console.log("kooo", res);
      setUser(res.data);
    }
  );
}

export function* userSaga() {
  yield all([takeLatest(login.type, loginSaga)]);
}
