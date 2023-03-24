import {put, takeLatest, call} from 'redux-saga/effects'
import * as actions from './action'
import {fetchProducts} from '../assets/API'


function* fetchProductsSaga(action) {
    try {
         const products = yield call(fetchProducts, action.payload)
        yield put(actions.getProducts.getProductsSuccess(products.data))
     } catch (error) {
        yield put(actions.getProducts.getProductsFailure(error))
    }
}
function* getClassifySaga(action) {
    try {
         yield put(actions.getClassify.getClassifySuccess(action.payload))
     } catch (error) {
        yield put(actions.getClassify.getClassifyFailure(error))
    }
}

function* changeClassifySaga(action) {
    try {
         yield put(actions.changeClassify.changeClassifySuccess(action.payload))
     } catch (error) {
        yield put(actions.changeClassify.changeClassifyFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga)
    yield takeLatest(actions.getClassify.getClassifyRequest, getClassifySaga)
    yield takeLatest(actions.changeClassify.changeClassifyRequest, changeClassifySaga)
 }
export default mySaga