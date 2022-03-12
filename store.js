import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux';

let store;

function initStore(initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  // let _store = store ?? initStore(preloadedState);
  let _store = store ? store : initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

/* THE STORE SCRIPT FROM THE VERSION BEFORE IMPLEMENTING NEXT.JS */

// const RESET_STORE = 'RESET_STORE';
// export const resetStore = () => ({ type: RESET_STORE });
// const rootReducer = (state = {}, action) => {
//   if (action.type === RESET_STORE) {
//     state = undefined;
//     return appReducer(state, action);
//   }
//   return appReducer(state, action);
// };

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, createLogger())
// );

// export default store;
