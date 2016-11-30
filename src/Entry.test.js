import React from 'react';
import { shallow } from 'enzyme';

import Entry from './Entry';
import styles from './entry.css';

describe('Entry', () => {
    let component;

    beforeEach(() => {
        component = shallow(
      <Entry />
    );
    });

    it('contains text', () => {
        expect(component.text()).toEqual('This is the React component.');
    });

    it('has a className', () => {
        expect(component.prop('className')).toEqual(styles.component);
    });
});
