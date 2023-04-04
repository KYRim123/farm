import { put, takeLatest, call } from 'redux-saga/effects'
import * as action from './action'
import { fetchProducts, fetchProductCart, addProductCart, updateProductCart, getQtyCart, deleteProductCart } from '../assets/API'
// home
function* fetchQtyCartSaga(actions) {
    try {
        const getQty = yield call(getQtyCart)
        yield put(action.getQtyCart.getQtyCartSuccess(getQty.data))
    } catch (error) {
        yield put(action.getQtyCart.getQtyCartFailure(error))
    }
}
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
        const { listCart, qtyCart } = cart.data

        const newListCart = listCart.map(product =>
            product.qty >= 1 ? { ...product, total: parseInt(product.price) * parseInt(product.qty) } : { ...product })

        yield put(action.fetchCart.fetchCartSuccess({ listCart: newListCart, qtyCart }))
    } catch (error) {
        yield put(action.fetchCart.fetchCartFailure(error))
    }
}

function* addProductCartSaga(actions) {
    try {
        const qtyCart = yield call(addProductCart, actions.payload)
        yield put(action.addProductCart.addProductCartSuccess(qtyCart.data))
    } catch (error) {
        yield put(action.addProductCart.addProductCartFailure(error))
    }
}

function* updateProductCartSaga(actions) {
    try {
        yield call(updateProductCart, actions.payload)
        const newTotal = parseInt(actions.payload.price) * parseInt(actions.payload.qty)
        const update = { ...actions.payload, total: newTotal }
        yield put(action.updateProductCart.updateProductCartSuccess(update))
    } catch (error) {
        yield put(action.updateProductCart.updateProductCartFailure(error))
    }
}

function* deleteProductCartSaga(actions) {
    try {
        const res =  yield call(deleteProductCart, actions.payload)
        yield put(action.deleteProductCart.deleteProductCartSuccess(res.data))
    } catch (error) {
        yield put(action.deleteProductCart.deleteProductCartFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(action.getQtyCart.getQtyCartRequest, fetchQtyCartSaga)
    yield takeLatest(action.getProducts.getProductsRequest, fetchProductsSaga)
    yield takeLatest(action.getClassify.getClassifyRequest, getClassifySaga)
    yield takeLatest(action.changeClassify.changeClassifyRequest, changeClassifySaga)
    yield takeLatest(action.fetchCart.fetchCartRequest, fetchCartSaga)
    yield takeLatest(action.addProductCart.addProductCartRequest, addProductCartSaga)
    yield takeLatest(action.updateProductCart.updateProductCartRequest, updateProductCartSaga)
    yield takeLatest(action.deleteProductCart.deleteProductCartRequest, deleteProductCartSaga)
}

export default mySaga