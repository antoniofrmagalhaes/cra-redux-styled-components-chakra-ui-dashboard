import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import { rootReducers } from './modules/rootReducers'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const persistConfig = {
  key: 'dashboard',
  storage,
  whitelist: ['authentication', 'profile']
}

const persisted = persistReducer(persistConfig, rootReducers)

const store = createStore(persisted, applyMiddleware(...middlewares))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
