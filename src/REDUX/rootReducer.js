import {combineReducers} from 'redux'

import goalsReducer from './goalsReducer'
import {firestoreReducer} from 'redux-firestore'




const rootReducer=combineReducers({

goal:goalsReducer,
firestore:firestoreReducer




})


export default rootReducer;