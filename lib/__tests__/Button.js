'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactDom = require('react-dom');

jest.dontMock('../Button');
var Button = require('../Button');

describe('Button', function () {
    it('renders a button by default', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, null));
        expect((0, _reactDom.findDOMNode)(component)).toBeDefined();
    });

    it('renders an anchor the `href` property is set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { href: '#' }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.tagName).toBe('A');
    });

    it('transfers the `href` property to the anchor', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { href: '#test' }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.href).toMatch(/#test$/);
    });

    it('adds the `pure-button` class', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { className: 'my-button' }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-button my-button');
    });

    it('adds the `pure-button-active` class if the `active` property if set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { active: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-button pure-button-active');
    });

    it('adds the `pure-button-disabled` class if the `disabled` property if set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { disabled: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-button pure-button-disabled');
    });

    it('transfers the `disabled` property to the button', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { disabled: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.disabled).toBe(true);
    });

    it('adds the `pure-button-primary` class if the `primary` property if set', function () {
        var component = (0, _reactLibReactTestUtils.renderIntoDocument)(_react2['default'].createElement(Button, { primary: true }));
        var node = (0, _reactDom.findDOMNode)(component);
        expect(node.className).toBe('pure-button pure-button-primary');
    });
});