'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactDom = require('react-dom');

jest.dontMock('../Table');
var Table = require('../Table');

describe('Table', function () {
    it('renders a table with class `pure-table` by default', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Table, { className: 'my-table' }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-table my-table');
    });

    it('adds the `pure-table-bordered` class if the `bordered` property is set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Table, { bordered: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-table pure-table-bordered');
    });

    it('adds the `pure-table-horizontal` class if the `horizontal` property is set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Table, { horizontal: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-table pure-table-horizontal');
    });

    it('adds the `pure-table-striped` class if the `striped` property is set to true', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Table, { striped: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-table pure-table-striped');
    });
});