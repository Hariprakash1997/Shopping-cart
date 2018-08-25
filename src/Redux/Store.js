import {createStore, combineReducers} from 'redux';
import cartReducer from '../Features/Cart/Cart-Reducer';

const rootReducer = combineReducers({
    cart: cartReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;