import { put, takeLatest, call } from 'redux-saga/effects'
import * as action from './action'
import { fetchProducts, fetchProductCart, addProductCart, updateProductCart } from '../assets/API'
 // products
function* fetchProductsSaga(actions) {
    try {
        const getProducts = yield call(fetchProducts, actions.payload)
        yield put(action.getProducts.getProductsSuccess(getProducts.data))
    } catch (error) {
        yield put(action.getProducts.getProductsFailure(error))
    }
}
// classify
function* getClassifySaga(actions) {
    try {
        yield put(action.getClassify.getClassifySuccess(actions.payload))
    } catch (error) {
        yield put(action.getClassify.getClassifyFailure(error))
    }
}

function* changeClassifySaga(actions) {
    try {
        yield put(action.changeClassify.changeClassifySuccess(actions.payload))
    } catch (error) {
        yield put(action.changeClassify.changeClassifyFailure(error))
    }
}
// cart
function* fetchCartSaga(actions) {
    try {
        const cart = yield call(fetchProductCart)
        
        const updateCart = cart.data.map(product => 
            product.qty >= 1 ? {...product, total: parseInt(product.price) * parseInt(product.qty)} : {...product})

         yield put(action.fetchCart.fetchCartSuccess(updateCart))
    } catch (error) {
        yield put(action.fetchCart.fetchCartFailure(error))
    }
}

function* addProductCartSaga(actions) {
    try {
        const product = yield call(addProductCart, actions.payload)
        yield put(action.addProductCart.addProductCartSuccess(product.data))
     } catch (error) {
        yield put(action.addProductCart.addProductCartFailure(error))
    }
}

function* updateProductCartSaga(actions) {
    try {
        yield call(updateProductCart, actions.payload)
        const newTotal = parseInt(actions.payload.price) * parseInt(actions.payload.qty)
        const update = {...actions.payload, total: newTotal}
        yield put(action.updateProductCart.updateProductCartSuccess(update))
       } catch (error) {
        yield put(action.updateProductCart.updateProductCartFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(action.getProducts.getProductsRequest, fetchProductsSaga)
    yield takeLatest(action.getClassify.getClassifyRequest, getClassifySaga)
    yield takeLatest(action.changeClassify.changeClassifyRequest, changeClassifySaga)
    yield takeLatest(action.fetchCart.fetchCartRequest, fetchCartSaga)
    yield takeLatest(action.addProductCart.addProductCartRequest, addProductCartSaga)
    yield takeLatest(action.updateProductCart.updateProductCartRequest, updateProductCartSaga)
}

export default mySaga