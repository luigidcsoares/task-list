import React from 'react';
import ReactDOM from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import App from './App';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
} else {
  console.error('Service Worker not found!');
}

ReactDOM.render(<App />, document.getElementById('root'));
