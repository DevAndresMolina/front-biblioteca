import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store'
import { RouterProvider} from 'react-router-dom';
import './App.scss';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <RouterProvider router={AppRoutes} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
