/**
 * Application Entry Point
 * 
 * This file serves as the entry point for the React application.
 * It renders the main Rout component and sets up performance measurement.
 *
 * @file
 * @requires react
 * @requires react-dom/client
 * @requires ./Rout
 * @requires ./reportWebVitals
 * @requires ../src/styles/index.scss
 * 
 * Key features:
 * 1. Creates the root React element
 * 2. Renders the main Rout component
 * 3. Wraps the app in React.StrictMode for additional checks and warnings
 * 4. Sets up performance measurement with reportWebVitals
 *
 * Styling:
 * - Imports global styles from index.scss 
 */


//Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import Rout from './Rout';
import reportWebVitals from './reportWebVitals';
import "../src/styles/index.scss";


// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
