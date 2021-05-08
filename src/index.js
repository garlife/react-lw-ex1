import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//рендерится страница 1 раз
//для перерендеринга конкретного элемента нужно к нему обратиться
function HelloTimer() {
  const hello = <h1>Hello, {new Date().toLocaleTimeString()}</h1>;

  ReactDOM.render(hello, document.getElementById("root"));
}

setInterval(HelloTimer, 1000);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
