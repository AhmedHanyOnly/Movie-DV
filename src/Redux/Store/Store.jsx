import  {createStore, applyMiddleware}  from 'redux'
import thunk from 'redux-thunk';
import {MovieReducer} from '../Reducer/MovieReducer';
//import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(MovieReducer, applyMiddleware(thunk));
