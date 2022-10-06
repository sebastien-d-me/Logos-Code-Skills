"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skill;

require("./Styles/Front.css");

require("./Styles/Back.css");

require("./Styles/Library.css");

require("./Styles/Framework.css");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Style */
var SKILL_TEXT = _styledComponents.default.text(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-weight: 700;\n    text-anchor: middle;\n    text-shadow: 0 0 2.5px #000000;\n"])));

function Skill(_ref) {
  var name = _ref.name,
      parameter = _ref.parameter;

  /** RETURN **/
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    height: parameter.height,
    width: parameter.width,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
      "data-skill": name,
      fill: parameter.backgroundColor,
      height: parameter.height,
      rx: parameter.borderRadius,
      ry: parameter.borderRadius,
      width: parameter.width
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SKILL_TEXT, {
      dominantBaseline: "middle",
      fill: parameter.color,
      x: "50%",
      y: "50%",
      children: name
    })]
  });
}