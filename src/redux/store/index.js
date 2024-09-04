
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import jobReducer from '../reducers/searchReducer'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
