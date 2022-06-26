import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stocksReducer from './stocks/stocks';
import sectorsReducer from './sectors/sectors';

const rootReducer = combineReducers({
  stocks: stocksReducer,
  sectors: sectorsReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
