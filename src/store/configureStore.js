import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (history, preloadedState) => {

   const initialState = {}

   const middleware = [thunk];

   const store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
      ),
   )

   if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
         const nextRootReducer = require('../reducers').default;
         store.replaceReducer(nextRootReducer);
      });
   }
   return store;
}

export default configureStore;