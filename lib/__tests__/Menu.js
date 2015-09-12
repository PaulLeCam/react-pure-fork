'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactDom = require('react-dom');

jest.dontMock('../Menu');
var Menu = require('../Menu');

describe('Menu', function () {
    it('renders a div with class `pure-menu` by default', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Menu, { className: 'my-menu' }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Menu, { horizontal: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Menu, { scrollable: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-menu pure-menu-scrollable');
    });
});