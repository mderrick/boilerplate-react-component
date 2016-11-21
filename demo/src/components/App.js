import React from 'react';
import Component from 'react-component-boilerplate';
import 'react-component-boilerplate/dist/styles.css';

import pkg from './../../../package.json';
import styles from './App.css';

const App = () => (
    <div className={styles.component}>
        <h1 className={styles.copy}>This is a demo for "{pkg.name}".</h1>
        <p>This should demonstrate how to use the below component that we have created.</p>
        <Component />
    </div>
);

export default App;
