import { all, takeLatest } from "redux-saga/effects";

import { Types as FavoriteTypes } from "../ducks/favorites";
import { addFavorite } from "../sagas/favorites-saga";

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
