import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import registerServiceWorker from '.serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
// registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
