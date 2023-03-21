import {put, takeLatest, call} from 'redux-saga/effects'
import * as actions from './action'
import {fetchProducts} from '../assets/API'


function* fetchProductsSaga(action) {
    try {
        const products = yield call(fetchProducts)
        yield put(actions.getProducts.getProductsSuccess(products.data))
     } catch (error) {
        yield put(actions.getProducts.getProductsFailure(error))
    }
}


function* mySaga() {
    yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga)
}
export default mySaga