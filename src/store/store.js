import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'

import { rootSaga } from './root-saga';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean)
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);