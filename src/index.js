import React from 'react';
import App from "./App";
import './index.module.css';

// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';



const rootElem = document.querySelector("#root");
const root = createRoot(rootElem);


// ReactDOM.render(   // root.render(...)
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     rootElem
// );


root.render(   // root.render(...)
    <React.StrictMode>
        <App />
        {/* <TestApp /> */}
    </React.StrictMode>
);


if (module.hot) {
    module.hot.accept();
}