import { takeEvery, put } from "redux-saga/effects";import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from '../Constants';
import { createRecord, deleteRecord, getRecord, updateRecord } from './Services/APISCallingervices';

function* createSaga(action) {
     try {
          let response = yield createRecord('maincategory',action.payload)
          yield put({ type: ADD_MAINCATEGORY_RED, payload: response })
     }
     catch (error) {
          console.log(error," Eror is Sagas CreateSagas !!")
     }
}

function* getSaga(action) {
     try {
          let response = yield getRecord('maincategory',action.payload)
          yield put({ type: GET_MAINCATEGORY_RED, payload: response })
     }
     catch (error) {
          console.log(error," Eror is  getSagas function !!")
     }
}

function* updateSaga(action) {
     try {
          yield updateRecord('maincategory',action.payload)
          yield put({ type: UPDATE_MAINCATEGORY_RED, payload: action.payload })
     }
     catch (error) {
          console.log(error," Eror is  updateSagas function !!")
     }
}

function* deleteSaga(action) {
     try {
          yield deleteRecord('maincategory',action.payload)
          yield put({ type: DELETE_MAINCATEGORY_RED, payload: action.payload })
     }
     catch (error) {
          console.log(error," Eror is  deleteSagas function !!")
     }
}

export default function* maincategorySagas(){
     yield takeEvery(ADD_MAINCATEGORY,createSaga)
     yield takeEvery(GET_MAINCATEGORY,getSaga)
     yield takeEvery(UPDATE_MAINCATEGORY,updateSaga)
     yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)
}
