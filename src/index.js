import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
      { id: 1, message: 'Hi!', likesCount: 5 },
      { id: 2, message: 'This is my first post!', likesCount: 12 },
];

let dialogs = [
      { id: 1, name: 'Den' },
      { id: 2, name: 'Rex' },
      { id: 3, name: 'Danya' },
      { id: 4, name: 'Vika' },
      { id: 5, name: 'Sanya' },
];

let messages = [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Yooo!!' },
      { id: 4, message: 'Bla Bla!' },
      { id: 5, message: 'Ohoo hooo!' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <App posts={posts} dialogs={dialogs} messages={messages} />
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
