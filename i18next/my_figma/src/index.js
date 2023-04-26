import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App';
import Figma from './componenet/figma/Figma';
import './i18n'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense
       
    >
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index path='/' element={<Figma/>}/>

        </Route>
      </Routes>
     </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);


