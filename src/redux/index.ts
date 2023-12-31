import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import Products from './Products/Products.reducer'
import Generals from './Generals/Generals.reducer'
import ImportsFirst from './ImportsFirst/ImportsFirst.reducer'

const reducers = combineReducers({
  products: Products,
  generals: Generals,
  importsFirst: ImportsFirst,
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export interface Action<T = any> {
  type: string
  payload?: T
}

export type RootState = ReturnType<typeof reducers>

export type Thunk<T = any> =
  ThunkAction<void, RootState, unknown, Action<T>>

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

export default store

