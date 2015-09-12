import React from 'react';
import { renderIntoDocument } from 'react/lib/ReactTestUtils';
import { findDOMNode } from 'react-dom';

jest.dontMock('../Menu');
const Menu = require('../Menu');

describe('Menu', () => {
    it('renders a div with class `pure-menu` by default', () => {
        const component = renderIntoDocument(<Menu className='my-menu' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', () => {
        const component = renderIntoDocument(<Menu horizontal />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', () => {
        const component = renderIntoDocument(<Menu scrollable />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-scrollable');
    });
});
