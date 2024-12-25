import {configureStore} from "@reduxjs/toolkit"
import RootReducer from "./Reducers/RootReducer"
import RootSagas from "./Sagas/RootSagas"
import createSagamiddleware from 'redux-saga'
const saga = createSagamiddleware()

const  Store = configureStore({
     reducer: RootReducer,
     middleware: ()=>[saga]
})
export default Store 

saga.run(RootSagas)



