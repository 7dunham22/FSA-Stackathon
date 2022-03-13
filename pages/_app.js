import { Provider } from 'react-redux';
import { useStore } from '../store';
import React from 'react';
import styles from '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
