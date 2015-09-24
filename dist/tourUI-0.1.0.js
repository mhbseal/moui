(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["tourUI"] = factory(require("react"));
	else
		root["tourUI"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	var _Switch2 = __webpack_require__(3);

	var _Switch3 = _interopRequireDefault(_Switch2);

	exports.Switch = _Switch3['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactAddons = __webpack_require__(4);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	__webpack_require__(5);

	var Switch = _reactAddons2['default'].createClass({
	  displayName: 'Switch',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      defaultChecked: false,
	      onChange: function onChange() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      checked: this.props.checked || this.props.defaultChecked || false
	    };
	  },
	  render: function render() {
	    var disabled = this.props.disabled,
	        cx = _reactAddons2['default'].addons.classSet,
	        classes = cx({
	      'icon-switch': true,
	      'active': this.state.checked,
	      'disabled': disabled
	    });
	    return _reactAddons2['default'].createElement('i', { className: classes, onClick: disabled ? function () {} : this.toggle });
	  },
	  toggle: function toggle() {
	    var checked = !this.state.checked;
	    this.setState({ checked: checked });
	    this.props.onChange(checked);
	  }
	});

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;