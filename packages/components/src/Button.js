"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
require("./button.css");
const Button = (_a) => {
    var { primary, backgroundColor, size, label } = _a, props = __rest(_a, ["primary", "backgroundColor", "size", "label"]);
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (<button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
      {label}
    </button>);
};
exports.Button = Button;
exports.Button.propTypes = {
    primary: prop_types_1.default.bool,
    backgroundColor: prop_types_1.default.string,
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
    label: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func,
};
exports.Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
//# sourceMappingURL=Button.js.map