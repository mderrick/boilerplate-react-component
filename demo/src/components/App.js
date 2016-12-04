import React from 'react';
import Component from 'boilerplate-react-component';
import 'boilerplate-react-component/dist/styles.css';

import pkg from './../../../package.json';
import styles from './App.css';

const App = () => (
    <div className={styles.component}>
        <h1 className={styles.copy}>This is a demo for "{pkg.name}".</h1>
        <p className={styles.copy}>This should demonstrate how to use the below component.</p>
        <Component />
    </div>
);

export default App;
