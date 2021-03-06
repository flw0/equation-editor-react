'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var $ = require('jquery');
require('mathquill/build/mathquill.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var $__default = /*#__PURE__*/_interopDefaultLegacy($);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
window.jQuery = $__default['default'];
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
require("mathquill/build/mathquill");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line no-undef
var mathQuill = MathQuill.getInterface(2);
/**
 * @typedef {EquationEditorProps} props
 * @prop {Function} onChange Triggered when content of the equation editor changes
 * @prop {string} value Content of the equation handler
 * @prop {boolean} spaceBehavesLikeTab Whether spacebar should simulate tab behavior
 * @prop {string} autoCommands List of commands for which you only have to type the name of the
 * command with a \ in front of it. Examples: pi theta rho sum
 * @prop {string} autoOperatorNames List of operators for which you only have to type the name of the
 * operator with a \ in front of it. Examples: sin cos tan
 * @extends {Component<EquationEditorProps>}
 */
var EquationEditor = /** @class */ (function (_super) {
    __extends(EquationEditor, _super);
    // Element needs to be in the class format and thus requires a constructor. The steps that are run
    // in the constructor is to make sure that React can succesfully communicate with the equation
    // editor.
    function EquationEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.element = React.createRef();
        _this.mathField = null;
        // MathJax apparently fire 2 edit events on startup.
        _this.ignoreEditEvents = 2;
        return _this;
    }
    EquationEditor.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, onChange = _a.onChange, value = _a.value, spaceBehavesLikeTab = _a.spaceBehavesLikeTab, autoCommands = _a.autoCommands, autoOperatorNames = _a.autoOperatorNames;
        var config = {
            handlers: {
                edit: function () {
                    if (_this.ignoreEditEvents > 0) {
                        _this.ignoreEditEvents -= 1;
                        return;
                    }
                    if (_this.mathField.latex() !== value) {
                        onChange(_this.mathField.latex());
                    }
                },
            },
            spaceBehavesLikeTab: spaceBehavesLikeTab,
            autoCommands: autoCommands,
            autoOperatorNames: autoOperatorNames,
        };
        this.mathField = mathQuill.MathField(this.element.current, config);
        this.mathField.latex(value || "");
    };
    EquationEditor.prototype.render = function () {
        return (React__default['default'].createElement("span", { ref: this.element, style: { border: "0px", boxShadow: "None" } }));
    };
    return EquationEditor;
}(React.Component));

exports.default = EquationEditor;
//# sourceMappingURL=index.js.map
