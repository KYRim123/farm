import {INIT_STATE} from './constant'
import {combineReducers} from 'redux'
import { getQtyCart, addProductCart, getTypeActions, getProducts, getClassify, changeClassify, fetchCart, updateProductCart, deleteProductCart} from './action'

export  function productReducers(state = INIT_STATE.products, action) {
    switch(action.type) 
        {
            case getTypeActions(getProducts.getProductsRequest): {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case getTypeActions(getProducts.getProductsSuccess): {
                 return {
                    ...state,
                    listProducts: action.payload.products,
                    isLoading: false,
                    countPage: action.payload.countPage,
                }
            }
            case getTypeActions(getProducts.getProductsFailure): {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case getTypeActions(getClassify.getClassifySuccess): {
                return {
                    ...state,
                    classify: [...state.classify, action.payload]
                }
            }
            case getTypeActions(changeClassify.changeClassifySuccess): {
                const newClassify = [...state.classify]
                newClassify.splice(newClassify.indexOf(action.payload), 1)
                return {
                    ...state,
                    classify: [...newClassify]
                }
             }
            default: return state
        }
}

export function cartReducers(state = INIT_STATE.carts, action){
    switch(action.type){

        case getTypeActions(getQtyCart.getQtyCartSuccess): {
            return {
                ...state,
                qtyCart: action.payload.qtyCart
            }
        }

        case getTypeActions(addProductCart.addProductCartSuccess): {
            return {
                ...state,
                qtyCart: action.payload.qtyCart
            }
        }

        case getTypeActions(fetchCart.fetchCartSuccess): {
            return {
                ...state,
                listProducts: [...action.payload.listCart],
                qtyCart: action.payload.qtyCart
            }
        }

        case getTypeActions(updateProductCart.updateProductCartSuccess): {
             const updateListProducts = state.listProducts.map(product => 
                product._id === action.payload._id ? {...product, qty: action.payload.qty, total: action.payload.total} : {...product}
            )
            return {
                ...state,
                listProducts: [...updateListProducts]
            }
        }
        case getTypeActions(deleteProductCart.deleteProductCartSuccess): {
            const listProducts = state.listProducts.filter(item => item._id !== action.payload)
            return {
                ...state,
                listProducts,
                qtyCart: listProducts.length
            }
        }

        default: return state
    }
}

export const reducer = combineReducers({
    productReducers,
    cartReducers
})

