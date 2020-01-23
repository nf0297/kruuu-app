import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import ReducerJob from '../_reducer/ReducerJob';
import ReducerTalent from '../_reducer/ReducerTalent';
import reducerCompany from '../_reducer/reducerCompany';
import reducerUser from '../_reducer/reducerUser';

const middlewares = [logger, promiseMiddleware];

const reducers = combineReducers ({
    ReducerJob,
    ReducerTalent,
    reducerCompany,
    reducerUser
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store; 