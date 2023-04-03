import {INIT_STATE} from './constant'
import {combineReducers} from 'redux'
import {getTypeActions, getProducts, getClassify, changeClassify, fetchCart, updateProductCart} from './action'

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
        case getTypeActions(fetchCart.fetchCartSuccess): {
            return {
                ...state,
                listProducts: [...action.payload]
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

        default: return state
    }
}

export const reducer = combineReducers({
    productReducers,
    cartReducers
})

