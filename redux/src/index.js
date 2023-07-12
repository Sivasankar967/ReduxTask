import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import CakeShop from './reduxStuff/CakeShop';
import store from './reduxStuff/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <CakeShop/>
</Provider>,

);


