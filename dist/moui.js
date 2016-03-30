/*!
 * moui v0.2.1-rc2
 * (c) 2014-2016 Mu Haibao
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["moui"] = factory(require("react"));
	else
		root["moui"] = factory(root["React"]);
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

	var _Tab2 = __webpack_require__(7);

	var _Tab3 = _interopRequireDefault(_Tab2);

	exports.Tab = _Tab3['default'];

	var _Num2 = __webpack_require__(9);

	var _Num3 = _interopRequireDefault(_Num2);

	exports.Num = _Num3['default'];

	var _Loading2 = __webpack_require__(11);

	var _Loading3 = _interopRequireDefault(_Loading2);

	exports.Loading = _Loading3['default'];

	var _Toast2 = __webpack_require__(16);

	var _Toast3 = _interopRequireDefault(_Toast2);

	exports.Toast = _Toast3['default'];

	var _Alert2 = __webpack_require__(18);

	var _Alert3 = _interopRequireDefault(_Alert2);

	exports.Alert = _Alert3['default'];

	var _LayerList2 = __webpack_require__(20);

	var _LayerList3 = _interopRequireDefault(_LayerList2);

	exports.LayerList = _LayerList3['default'];

	var _Calendar2 = __webpack_require__(22);

	var _Calendar3 = _interopRequireDefault(_Calendar2);

	exports.Calendar = _Calendar3['default'];

	var _Slider2 = __webpack_require__(26);

	var _Slider3 = _interopRequireDefault(_Slider2);

	exports.Slider = _Slider3['default'];

	var _ImgSlider2 = __webpack_require__(29);

	var _ImgSlider3 = _interopRequireDefault(_ImgSlider2);

	exports.ImgSlider = _ImgSlider3['default'];

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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(6);

	var Switch = (function (_Component) {
	  _inherits(Switch, _Component);

	  _createClass(Switch, null, [{
	    key: 'defaultProps',
	    value: {
	      defaultChecked: null,
	      checked: null,
	      onChange: function onChange() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      defaultChecked: _react2['default'].PropTypes.bool,
	      checked: _react2['default'].PropTypes.bool,
	      onChange: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);

	  function Switch(props) {
	    var _this = this;

	    _classCallCheck(this, Switch);

	    _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);

	    this.onChange = function () {
	      var checked = !_this.state.checked;
	      _this.setState({ checked: checked });
	      _this.props.onChange(checked);
	    };

	    var checked = props.checked;

	    var defaultChecked = props.defaultChecked;
	    var ret = false;

	    if (checked != null) {
	      ret = checked;
	    } else if (defaultChecked != null) {
	      ret = defaultChecked;
	    }

	    this.state = {
	      checked: ret
	    };
	  }

	  _createClass(Switch, [{
	    key: 'render',
	    value: function render() {
	      var classesSwitch = (0, _classnames2['default'])('cui-switch', {
	        'current': this.state.checked
	      }),
	          classesSwitchBg = (0, _classnames2['default'])('cui-switch-bg', {
	        'current': this.state.checked
	      });
	      return _react2['default'].createElement(
	        'div',
	        { className: classesSwitch, onClick: this.onChange },
	        _react2['default'].createElement('div', { className: classesSwitchBg }),
	        _react2['default'].createElement('div', { className: 'cui-switch-scroll' })
	      );
	    }
	  }]);

	  return Switch;
	})(_react.Component);

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	'use strict';

	(function () {
		'use strict';

		var hasOwn = ({}).hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(8);

	var Tab = (function (_Component) {
	  _inherits(Tab, _Component);

	  _createClass(Tab, null, [{
	    key: 'defaultProps',
	    value: {
	      data: [],
	      defaultActive: null,
	      active: null,
	      onChange: function onChange() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.array.isRequired,
	      defaultChecked: _react2['default'].PropTypes.bool,
	      checked: _react2['default'].PropTypes.bool,
	      onChange: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);

	  function Tab(props) {
	    var _this = this;

	    _classCallCheck(this, Tab);

	    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this, props);

	    this.onChange = function (item, i) {
	      _this.setState({ active: i });
	      _this.props.onChange(item);
	    };

	    var active = props.active;

	    var defaultActive = props.defaultActive;
	    var ret = 0;

	    if (active != null) {
	      ret = active;
	    } else if (defaultActive != null) {
	      ret = defaultActive;
	    }

	    this.state = {
	      active: ret
	    };
	  }

	  _createClass(Tab, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var data = this.props.data;

	      return _react2['default'].createElement(
	        'ul',
	        { className: 'cui-tab-mod' },
	        data.map(function (item, i) {
	          return _react2['default'].createElement(
	            'li',
	            { key: i, className: i === _this2.state.active ? 'cui-tab-current' : '', onClick: _this2.onChange.bind(null, item, i) },
	            item.name
	          );
	        }),
	        _react2['default'].createElement('i', { className: 'cui-tab-scrollbar cui-tabnum' + data.length })
	      );
	    }
	  }]);

	  return Tab;
	})(_react.Component);

	exports['default'] = Tab;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(10);

	var Num = (function (_Component) {
	  _inherits(Num, _Component);

	  _createClass(Num, null, [{
	    key: 'defaultProps',
	    value: {
	      min: -Infinity,
	      max: Infinity,
	      step: 1,
	      editable: false,
	      defaultValue: 0,
	      value: null,
	      onChange: function onChange() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      min: _react2['default'].PropTypes.number,
	      max: _react2['default'].PropTypes.number,
	      step: _react2['default'].PropTypes.number,
	      editable: _react2['default'].PropTypes.bool,
	      defaultValue: _react2['default'].PropTypes.number,
	      value: _react2['default'].PropTypes.number,
	      onChange: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);

	  function Num(props) {
	    var _this = this;

	    _classCallCheck(this, Num);

	    _get(Object.getPrototypeOf(Num.prototype), 'constructor', this).call(this, props);

	    this.step = function (type) {
	      var _props = _this.props;
	      var step = _props.step;
	      var max = _props.max;

	      var min = _props.min;
	      var value = +_this.state.value;
	      var stepNum = +step || 1;

	      value = type === 'down' ? value - stepNum : value + stepNum;

	      if (value > max || value < min) return;
	      _this.setValue(value);
	    };

	    this.down = function () {
	      _this.step('down');
	    };

	    this.up = function () {
	      _this.step('up');
	    };

	    this.setValue = function (value) {
	      _this.refs.num.value = value;
	      _this.setState({ value: value });
	      _this.props.onChange(value);
	    };

	    this.onBlur = function (e) {
	      var val = +e.target.value.trim();
	      var _props2 = _this.props;
	      var value = _props2.value;
	      var defaultValue = _props2.defaultValue;
	      var max = _props2.max;
	      var min = _props2.min;
	      var ret = undefined;
	      if (isNaN(val)) {
	        // 如果无效数字
	        if (value != null) {
	          ret = value;
	        } else {
	          ret = defaultValue;
	        }
	      } else {
	        if (val > max) {
	          // 大于max
	          ret = max;
	        } else if (val < min) {
	          // 小于min
	          ret = min;
	        } else {
	          ret = val;
	        }
	      }
	      _this.setValue(ret);
	    };

	    var value = props.value;

	    var defaultValue = props.defaultValue;
	    var ret = undefined;

	    if (value != null) {
	      ret = value;
	    } else {
	      ret = defaultValue;
	    }

	    this.state = {
	      value: ret
	    };
	  }

	  _createClass(Num, [{
	    key: 'render',
	    value: function render() {
	      var classesMinus = (0, _classnames2['default'])('cm-adjust-minus', {
	        'disabled': this.props.min === this.state.value
	      }),
	          classesPlus = (0, _classnames2['default'])('cm-adjust-plus', {
	        'disabled': this.props.max === this.state.value
	      }),
	          input = undefined;

	      if (this.props.editable) {
	        input = _react2['default'].createElement('input', { ref: 'num', type: 'tel', className: 'cm-adjust-view', defaultValue: this.state.value, onBlur: this.onBlur });
	      } else {
	        input = _react2['default'].createElement(
	          'span',
	          { ref: 'num', className: 'cm-adjust-view' },
	          this.state.value
	        );
	      }

	      return _react2['default'].createElement(
	        'div',
	        { className: 'cm-num-adjust' },
	        _react2['default'].createElement('span', { className: classesMinus, onClick: this.down }),
	        input,
	        _react2['default'].createElement('span', { className: classesPlus, onClick: this.up })
	      );
	    }
	  }]);

	  return Num;
	})(_react.Component);

	exports['default'] = Num;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Mask = __webpack_require__(12);

	var _Mask2 = _interopRequireDefault(_Mask);

	__webpack_require__(14);

	__webpack_require__(15);

	var Loading = (function (_Component) {
	  _inherits(Loading, _Component);

	  _createClass(Loading, null, [{
	    key: 'defaultProps',
	    value: {
	      needMask: true,
	      maskToHide: false,
	      visible: false,
	      content: '',
	      closeBtn: false
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      needMask: _react2['default'].PropTypes.bool,
	      maskToHide: _react2['default'].PropTypes.bool,
	      visible: _react2['default'].PropTypes.bool,
	      content: _react2['default'].PropTypes.string,
	      closeBtn: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  function Loading(props) {
	    var _this = this;

	    _classCallCheck(this, Loading);

	    _get(Object.getPrototypeOf(Loading.prototype), 'constructor', this).call(this, props);

	    this.hide = function () {
	      _this.setState({ visible: false });
	    };

	    this.state = {
	      visible: props.visible
	    };
	  }

	  _createClass(Loading, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ visible: nextProps.visible });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var content = _props.content;

	      var closeBtn = _props.closeBtn;
	      var hasText = content !== '';
	      var classesGrayload = (0, _classnames2['default'])('cui-grayload-text', {
	        'cui-grayload-text-min': !hasText && !closeBtn
	      });

	      return _react2['default'].createElement(
	        'div',
	        { style: { display: this.state.visible ? 'block' : 'none' } },
	        _react2['default'].createElement(
	          'div',
	          { className: 'cui-layer cui-loading' },
	          _react2['default'].createElement(
	            'div',
	            { className: classesGrayload },
	            _react2['default'].createElement('div', { className: 'cui-i cui-w-loading' }),
	            _react2['default'].createElement('div', { className: 'cui-i cui-m-logo' }),
	            closeBtn ? _react2['default'].createElement('div', { className: 'cui-grayload-close', onClick: this.hide }) : '',
	            hasText ? _react2['default'].createElement(
	              'div',
	              { className: 'cui-grayload-bfont' },
	              content
	            ) : ''
	          )
	        ),
	        _react2['default'].createElement(_Mask2['default'], { layer: this })
	      );
	    }
	  }]);

	  return Loading;
	})(_react.Component);

	exports['default'] = Loading;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(13);

	var Mask = (function (_Component) {
	  _inherits(Mask, _Component);

	  function Mask() {
	    var _this = this;

	    _classCallCheck(this, Mask);

	    _get(Object.getPrototypeOf(Mask.prototype), 'constructor', this).apply(this, arguments);

	    this.onClick = function () {
	      var _props = _this.props;
	      var layer = _props.layer;

	      var callback = _props.callback;
	      var maskToHide = layer.props.maskToHide;

	      maskToHide && layer.setState({ visible: false });
	      callback && callback();
	    };
	  }

	  _createClass(Mask, [{
	    key: 'render',
	    value: function render() {
	      var mask = undefined;
	      if (this.props.layer.props.needMask) {
	        mask = _react2['default'].createElement('div', { className: 'cui-mask', onClick: this.onClick });
	      } else {
	        mask = _react2['default'].createElement('div', null);
	      }
	      return mask;
	    }
	  }]);

	  return Mask;
	})(_react.Component);

	exports['default'] = Mask;
	;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Mask = __webpack_require__(12);

	var _Mask2 = _interopRequireDefault(_Mask);

	__webpack_require__(14);

	__webpack_require__(17);

	var Toast = (function (_Component) {
	  _inherits(Toast, _Component);

	  _createClass(Toast, null, [{
	    key: 'defaultProps',
	    value: {
	      needMask: true,
	      maskToHide: true,
	      visible: false,
	      hideTime: 2000,
	      content: ''
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      needMask: _react2['default'].PropTypes.bool,
	      maskToHide: _react2['default'].PropTypes.bool,
	      visible: _react2['default'].PropTypes.bool,
	      hideTime: _react2['default'].PropTypes.number,
	      content: _react2['default'].PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  function Toast(props) {
	    var _this = this;

	    _classCallCheck(this, Toast);

	    _get(Object.getPrototypeOf(Toast.prototype), 'constructor', this).call(this, props);

	    this.componentDidMount = function () {
	      var layer = _this.refs.layer,
	          h = layer.clientHeight,
	          w = layer.clientWidth;

	      _this.setState({
	        style: {
	          marginTop: -h / 2,
	          marginLeft: -w / 2
	        },
	        visible: _this.props.visible
	      });

	      _this.componentDidUpdate();
	    };

	    this.componentDidUpdate = function () {
	      _this.setTimer();
	    };

	    this.clearTimer = function () {
	      _this.timer && clearTimeout(_this.timer);
	    };

	    this.setTimer = function () {
	      if (_this.state.visible) {
	        _this.timer && clearTimeout(_this.timer);
	        _this.timer = setTimeout(function () {
	          _this.setState({ visible: false });
	        }, _this.props.hideTime);
	      }
	    };

	    this.state = {
	      visible: true
	    };
	  }

	  _createClass(Toast, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ visible: nextProps.visible });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = this.props.content;
	      var _state = this.state;
	      var visible = _state.visible;
	      var style = _state.style;

	      return _react2['default'].createElement(
	        'div',
	        { style: { display: visible ? 'block' : 'none' } },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'layer', className: 'cui-layer cui-toast', style: style },
	          _react2['default'].createElement(
	            'div',
	            { className: 'cui-layer-padding' },
	            content
	          )
	        ),
	        _react2['default'].createElement(_Mask2['default'], { layer: this, callback: this.clearTimer })
	      );
	    }
	  }]);

	  return Toast;
	})(_react.Component);

	exports['default'] = Toast;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Mask = __webpack_require__(12);

	var _Mask2 = _interopRequireDefault(_Mask);

	__webpack_require__(14);

	__webpack_require__(19);

	var Alert = (function (_Component) {
	  _inherits(Alert, _Component);

	  _createClass(Alert, null, [{
	    key: 'defaultProps',
	    value: {
	      needMask: true,
	      maskToHide: false,
	      visible: false,
	      title: '',
	      content: '',
	      btns: []
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      needMask: _react2['default'].PropTypes.bool,
	      maskToHide: _react2['default'].PropTypes.bool,
	      visible: _react2['default'].PropTypes.bool,
	      title: _react2['default'].PropTypes.string,
	      content: _react2['default'].PropTypes.string.isRequired,
	      btns: _react2['default'].PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  function Alert(props) {
	    var _this = this;

	    _classCallCheck(this, Alert);

	    _get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).call(this, props);

	    this.hide = function () {
	      _this.setState({ visible: false });
	    };

	    this.state = {
	      visible: true
	    };
	  }

	  _createClass(Alert, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var layer = this.refs.layer,
	          h = layer.clientHeight,
	          w = layer.clientWidth;

	      this.setState({
	        style: {
	          marginTop: -h / 2,
	          marginLeft: -w / 2
	        },
	        visible: this.props.visible
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ visible: nextProps.visible });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var btns = _props.btns;
	      var title = _props.title;

	      var content = _props.content;
	      var _state = this.state;
	      var visible = _state.visible;
	      var style = _state.style;

	      return _react2['default'].createElement(
	        'div',
	        { style: { display: visible ? 'block' : 'none' } },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'layer', className: 'cui-layer cui-pop-box', style: style },
	          title ? _react2['default'].createElement(
	            'div',
	            { className: 'cui-hd' },
	            title
	          ) : '',
	          _react2['default'].createElement(
	            'div',
	            { className: 'cui-bd' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'cui-error-tips' },
	              content
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'cui-roller-btns' },
	              btns.map(function (btn) {
	                return _react2['default'].createElement(
	                  'div',
	                  { key: btn.name, className: 'cui-flexbd', onClick: btn.handler.bind(_this2, btn) },
	                  btn.name
	                );
	              })
	            )
	          )
	        ),
	        _react2['default'].createElement(_Mask2['default'], { layer: this })
	      );
	    }
	  }]);

	  return Alert;
	})(_react.Component);

	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Mask = __webpack_require__(12);

	var _Mask2 = _interopRequireDefault(_Mask);

	__webpack_require__(14);

	__webpack_require__(21);

	var LayerList = (function (_Component) {
	  _inherits(LayerList, _Component);

	  _createClass(LayerList, null, [{
	    key: 'defaultProps',
	    value: {
	      needMask: true,
	      maskToHide: true,
	      visible: false,
	      items: [],
	      cancelName: '取消',
	      itemAction: function itemAction(item) {},
	      cancelAction: function cancelAction() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      needMask: _react2['default'].PropTypes.bool,
	      maskToHide: _react2['default'].PropTypes.bool,
	      visible: _react2['default'].PropTypes.bool,
	      items: _react2['default'].PropTypes.array.isRequired,
	      cancelName: _react2['default'].PropTypes.string,
	      itemAction: _react2['default'].PropTypes.func.isRequired,
	      cancelAction: _react2['default'].PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);

	  function LayerList(props) {
	    var _this = this;

	    _classCallCheck(this, LayerList);

	    _get(Object.getPrototypeOf(LayerList.prototype), 'constructor', this).call(this, props);

	    this.hide = function () {
	      _this.setState({ visible: false });
	    };

	    this.state = {
	      visible: props.visible
	    };
	  }

	  _createClass(LayerList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ visible: nextProps.visible });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var itemAction = _props.itemAction;
	      var cancelAction = _props.cancelAction;
	      var cancelName = _props.cancelName;
	      var items = _props.items;

	      return _react2['default'].createElement(
	        'div',
	        { style: { display: this.state.visible ? 'block' : 'none' } },
	        _react2['default'].createElement(
	          'div',
	          { className: 'popup-operate' },
	          _react2['default'].createElement(
	            'ul',
	            { className: 'list' },
	            items.map(function (item) {
	              return _react2['default'].createElement(
	                'li',
	                { key: item.name, onClick: itemAction.bind(_this2, item) },
	                item.name
	              );
	            })
	          ),
	          _react2['default'].createElement(
	            'ul',
	            null,
	            _react2['default'].createElement(
	              'li',
	              { className: 'cancel', onClick: cancelAction.bind(this) },
	              cancelName
	            )
	          )
	        ),
	        _react2['default'].createElement(_Mask2['default'], { layer: this, callback: cancelAction.bind(this) })
	      );
	    }
	  }]);

	  return LayerList;
	})(_react.Component);

	exports['default'] = LayerList;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _mo2jsSrcDate = __webpack_require__(23);

	var _mo2jsSrcDate2 = _interopRequireDefault(_mo2jsSrcDate);

	__webpack_require__(25);

	var CaldayComponentendar = (function (_Component) {
	  _inherits(CaldayComponentendar, _Component);

	  _createClass(CaldayComponentendar, null, [{
	    key: 'defaultProps',
	    value: {
	      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
	      displayMonthNum: 3,
	      startTime: null,
	      MonthFormat: 'YYYY年M月',
	      selected: null,
	      specialDates: []
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      weekDays: _react2['default'].PropTypes.array,
	      displayMonthNum: _react2['default'].PropTypes.number,
	      startTime: _react2['default'].PropTypes.object,
	      MonthFormat: _react2['default'].PropTypes.string,
	      selected: _react2['default'].PropTypes.object,
	      specialDates: _react2['default'].PropTypes.array,
	      itemAction: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);

	  function CaldayComponentendar(props) {
	    var _this = this;

	    _classCallCheck(this, CaldayComponentendar);

	    _get(Object.getPrototypeOf(CaldayComponentendar.prototype), 'constructor', this).call(this, props);

	    this.itemAction = function (actionDate) {
	      _this.props.itemAction(actionDate, _mo2jsSrcDate2['default'].format) !== false && _this.setState({ selected: actionDate });
	    };

	    this.getDay = function (dayComponent, year, month, day) {
	      _this.props.specialDates.forEach(function (dates) {
	        for (var key in dates.date) {
	          var ret = dates.handler(key, dates.date[key]);

	          if (ret.year && ret.year != year || ret.month && ret.month - 1 != month || ret.day && ret.day != day) {
	            continue;
	          }

	          dayComponent = ret.render(dayComponent);
	          break;
	        }
	      });
	      return dayComponent;
	    };

	    this.state = {
	      selected: props.selected
	    };
	  }

	  _createClass(CaldayComponentendar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var startTime = _props.startTime;
	      var weekDays = _props.weekDays;
	      var displayMonthNum = _props.displayMonthNum;

	      var MonthFormat = _props.MonthFormat;
	      var monthComponent = [];
	      var sTime = startTime || new Date();
	      var year = sTime.getFullYear();

	      for (var i = 0; i < displayMonthNum; i++) {
	        var key = 0,
	            changedTime = _mo2jsSrcDate2['default'].add(sTime, 'Month', i),
	            changedYear = changedTime.getFullYear(),
	            changedMonth = changedTime.getMonth(),
	            daysComponent = [],
	            dayOfWeekOnFirst = new Date(changedYear, changedMonth, 1).getDay(),
	            days = [31, year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][changedMonth];

	        for (var j = 0; j < dayOfWeekOnFirst; j++) {
	          daysComponent.push(_react2['default'].createElement('li', { key: key++, className: 'cui_invalid' }));
	        }
	        for (var j = 0; j < days; j++) {
	          var actionDate = new Date(changedYear, changedMonth, j + 1),
	              actionClass = +this.state.selected == +actionDate ? 'selected-departdate' : '';

	          daysComponent.push(_react2['default'].createElement(
	            'li',
	            { ref: 'day', key: key++, onClick: this.itemAction.bind(this, actionDate), className: 'cui_calendar_item cui_cld_day_havetxt ' + actionClass },
	            this.getDay(_react2['default'].createElement(
	              'em',
	              null,
	              j + 1
	            ), changedYear, changedMonth, j + 1)
	          ));
	        }
	        monthComponent.push(_react2['default'].createElement(
	          'div',
	          { key: i },
	          _react2['default'].createElement(
	            'h1',
	            { className: 'cui_cldmonth' },
	            _mo2jsSrcDate2['default'].format(changedTime, MonthFormat)
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { className: 'cui_cld_daybox' },
	            daysComponent
	          )
	        ));
	      };

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'ul',
	          { className: 'cui_cldweek', style: { position: 'static' } },
	          weekDays.map(function (weekDay) {
	            return _react2['default'].createElement(
	              'li',
	              { key: weekDay },
	              weekDay
	            );
	          })
	        ),
	        _react2['default'].createElement(
	          'section',
	          { className: 'cui_cldunit' },
	          monthComponent
	        )
	      );
	    }
	  }]);

	  return CaldayComponentendar;
	})(_react.Component);

	exports['default'] = CaldayComponentendar;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * 日期格式化、计算
	 *
	 * @author hbmu
	 * @date   2015/1/29
	 *
	 * @name   date
	 * @example
	 * var
	 *   birthday = new Date(), // 默认值,当前客户端时间Date实例
	 *   birthday2 = '/Date(562941040500+0800)/', // 非JS格式的时间戳,例如.NET
	 *   birthday3 = '1987/11/03 20:30:40', // 需要重新格式化的字符串,注意12小时制不支持
	 *   birthday4 = '1987/11/03', // 需要重新格式化的字符串
	 *   birthday5 = 562941040500, // 时间戳(number/string)
	 *   birthday6 = new Date('1987', '10', '03', '20', '30', '40', '500'); // Date实例
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (util) {
		"use strict";
		// 解析date,大部分
		function dateGetter(name, size, offset, trim) {
			offset = offset || 0;
			return function () {
				var value = this['get' + name]();

				// 这里是为了处理12小时制和month的+1
				if (offset > 0 || value > -offset) value += offset;
				if (value === 0 && offset == -12) value = 12;

				return util.pad(value, size, 0, false, trim);
			};
		};
		// 解析date,星期X
		function dayGetter(index) {
			return function () {
				var value = this.getDay();
				return dateFormats.day[index].split(',')[value];
			};
		};
		// 解析date,上下午
		function ampmGetter(index) {
			return function () {
				var ampm = dateFormats.ampm[index].split(',');
				return this.getHours() < 12 ? ampm[0] : ampm[1];
			};
		};
		// 解析date,季度
		function quarterGetter() {
			return Math.ceil((this.getMonth() + 1) / 3);
		};
		// 解析date,一年中的第几天
		function dayOfyearGetter(size) {
			return function () {
				var monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
				    year = this.getFullYear(),
				    month = this.getMonth(),
				    day = this.getDate(),
				    result = 0,
				    i = 0;

				for (; i < month; i++) {
					result += monthArray[i];
				}
				result += day;

				//判断是否闰年
				if (month > 1 && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
					result += 1;
				}

				return util.pad(result, size, 0);
			};
		};
		// 解析date,获取第几周
		function weekGetter(index, size) {
			// index(0-6, 0为星期天, 把周几当做一周的第一天)
			return function () {
				var firstDayOfFirstWeekOfYear = getFirstDayOfFirstWeekOfYear(this, index),
				    firstDayOfThisWeek = getFirstDayOfThisWeek(this, index),
				    diff = +firstDayOfThisWeek - +firstDayOfFirstWeekOfYear,
				    result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week

				return util.pad(result, size, 0);
			};
		};
		// 获取date所在年份,周的第一天
		function getFirstDayOfFirstWeekOfYear(date, index) {
			var year = date.getFullYear(),
			    dayOfWeekOnFirst = new Date(year, 0, 1).getDay(),
			    diff = index - dayOfWeekOnFirst;

			if (diff > 0) diff -= 7;

			return new Date(year, 0, 1 + diff);
		};
		// 获取date所在周,周的第一天
		function getFirstDayOfThisWeek(date, index) {
			// index 同上
			var diff = index - date.getDay();

			if (diff > 0) diff -= 7;

			return new Date(date.getFullYear(), date.getMonth(), date.getDate() + diff);
		};
		// 处理参数date
		function dateHandler(date) {
			var dArray, // 数组化后的日期
			ret;

			if (typeof date === 'string') {
				// 如果date参数是string类型
				if (rNumberstring.test(date)) {
					// 如果date参数是number string类型
					ret = new Date(date);
				} else {
					// 这里重新格式化,一般都是从服务端过来的数据,必须有年月日,并且顺序是年月日时分秒毫秒,并且7个值之间有间隔符,间隔符为\D
					dArray = date.match(rDatestring); // 从string中提取new Date需要的参数
					if (dArray.length < 3) {
						// 服务端时间戳,例如NET "/Date(562941040500+0800)/"
						ret = new Date(+dArray[0]);
					} else {
						// 格式化过的
						ret = new Date(dArray[0], dArray[1] - 1, dArray[2] || 1, dArray[3] || 0, dArray[4] || 0, dArray[5] || 0, dArray[6] || 0);
					}
				}
			} else if (typeof date === 'number' || Object.prototype.toString.call(date) === '[object Date]') {
				// 如果date参数是number类型、date类型
				ret = new Date(+date);
			} else if (date == null) {
				// 如果不存在date参数
				ret = new Date();
			} else {
				return false;
			}

			return ret;
		}

		var rDatestring = /\d+/g;
		var rNumberstring = /^\d+$/;
		var dateFormats = {
			ampm: ['AM,PM', 'am,am', '上午,下午'],
			day: ['周日,周一,周二,周三,周四,周五,周六', '星期日,星期一,星期二,星期三,星期四,星期五,星期六']
		};

		// token 正则和格式化函数
		var rToken = /(\\?)([MQDdwYAaHhmsS]+)/g;
		var formatTokenFunctions = {
			M: dateGetter('Month', null, 1),
			MM: dateGetter('Month', 2, 1),
			Q: quarterGetter,
			D: dateGetter('Date'),
			DD: dateGetter('Date', 2),
			DDD: dayOfyearGetter(),
			DDDD: dayOfyearGetter(3),
			d: dateGetter('Day'),
			ddd: dayGetter(0),
			dddd: dayGetter(1),
			YY: dateGetter('FullYear', 2, null, true),
			YYYY: dateGetter('FullYear'),
			w: weekGetter(0),
			ww: weekGetter(0, 2),
			A: ampmGetter(0),
			a: ampmGetter(1),
			aa: ampmGetter(2),
			H: dateGetter('Hours'),
			HH: dateGetter('Hours', 2),
			h: dateGetter('Hours', null, -12),
			hh: dateGetter('Hours', 2, -12),
			m: dateGetter('Minutes'),
			mm: dateGetter('Minutes', 2),
			s: dateGetter('Seconds'),
			ss: dateGetter('Seconds', 2),
			S: dateGetter('Milliseconds'),
			SS: dateGetter('Milliseconds', 2),
			SSS: dateGetter('Milliseconds', 3)
		};

		var date = {
			/**
	     * 格式化日期
	     *
	   * @param  {number/string/date} 需要格式化的date
	   * @param  {string} token字符串
	   * @return {string} 格式化后的字符串
	     *
	     * @name    format
	     * @grammar date.format([date,] format)
	     * @example
	     * date.format(birthday6, 'YYYY-MM-DD HH:mm:ss:SSS') => '1987-11-03 20:30:40:500'
	     * date.format(birthday6, 'YY年M月D日 h时m分s秒 S毫秒 ddd') => '87年11月3日 8时30分40秒 500毫秒 周二'
	     * date.format(birthday6, '\\Q\\ww\\a,第Q季度,第ww周季度,A') => 'Qwwa,第4季度,第45周季度,PM'
	     *
	     * @more token映射表 参照 http://momentjs.com/docs/#/displaying/,只引用了其中一部分,涉及到中文的部分稍微有调整
	     * ==================================================================
	     *                          Token       Output
	     * Month                    M           1 2 ... 11 12
	     *                          MM          01 02 ... 11 12
	     * Quarter                  Q           1 2 3 4
	     * Day of Month             D           1 2 ... 30 31
	     *                          DD          01 02 ... 30 31
	     * Day of Year              DDD         1 2 ... 364 365
	     *                          DDDD        001 002 ... 364 365
	     * Day of Week              d           0 1 ... 5 6
	     *                          ddd         周日 周一 ... 周五 周六
	     *                          dddd        星期日 星期一 ... 星期五 星晴六
	     * Week of Year             w           1 2 ... 52 53
	     *                          ww          01 02 ... 52 53
	     * Year                     YY          70 71 ... 29 30
	     *                          YYYY        1970 1971 ... 2029 2030
	     * AM/PM                    A           AM PM
	     *                          a           am pm
	     *                          aa          上午 下午
	     * Hour                     H           0 1 ... 22 23
	     *                          HH          00 01 ... 22 23
	     *                          h           1 2 ... 11 12
	     *                          hh          01 02 ... 11 12
	     * Minute                   m           0 1 ... 58 59
	     *                          mm          00 01 ... 58 59
	     * Second                   s           0 1 ... 58 59
	     *                          ss          00 01 ... 58 59
	     * Fractional Second        S           0 1 ... 8 9
	     *                          SS          0 1 ... 98 99
	     *                          SSS         0 1 ... 998 999
	     * ==================================================================
	   */
			format: function format(date, _format) {
				if (arguments.length === 1) {
					// 修正参数
					_format = date;
					date = null;
				}

				if (!(date = dateHandler(date))) return;

				return _format.replace(rToken, function (match, escape, token) {
					if (escape) {
						// 如果是转义的则忽略，例如'\\Y'
						return token;
					} else {
						return formatTokenFunctions[token].call(date);
					}
				});
			}
		};

		/**
	   * 日期加减计算
	   *
	   * @param  {number|string|date} 需要格式化的date,不传默认为当前时间
	  * @param  {string} 单位['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Time']
	  * @param  {number} n单位
	  * @return {Date} 计算后的结果
	   *
	   * @name    add/sub
	   * @grammar date.add([date,] name, number)/date.sub([date,] name, number)
	   * @example
	   * date.add(birthday6, 'Hours', 1) => Tue Nov 03 1987 21:30:40 GMT+0800 (CST)
	   * date.sub(birthday6, 'Minutes', 1) => Tue Nov 03 1987 20:29:40 GMT+0800 (CST)
	  */
		var computeFactory = function computeFactory(method) {
			date[method] = function (date, name, num) {
				if (arguments.length === 2) {
					// 修正参数
					num = name;
					name = date;
					date = null;
				}
				date = dateHandler(date);
				method === 'sub' && (num = -num);
				date['set' + name](date['get' + name]() + num);
				return date;
			};
		};
		computeFactory('add');
		computeFactory('sub');

		return date;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * 工具方法集
	 *
	 * @author hbmu
	 * @date   2014/10/20
	 *
	 * @name   utils
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		"use strict";
		// 随机生成一个4位字符
		function S4() {
			return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
		}

		var utils = {
			/**
	     * 生成guid
	     *
	     * @return {string} guid
	     *
	     * @name    guid
	     * @grammar util.guid()
	     * @example
	     * util.guid() => 'd42fb5af-9b78-6320-9a79-327cb00ea561'
	   */
			guid: function guid() {
				return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
			},
			/**
	     * 字符串的长度和index计算
	     *
	   * @param  {string} 要计算的字符串
	   * @param  {number} 可选,字符串(双字节长度为2)的index
	   * @return {object} 返回对象
	     *   - length {number} 字符串(双字节长度为2)的长度
	   *   - index  {number} 字符串的index,如果参数index为空,则该字段无返回值
	     *
	     * @name    getByteInfo
	     * @grammar util.getByteInfo(str[, index])
	     * @example
	     * util.getByteInfo('我的生日是1987年11月03日', 5) => Object {length: 24, index: 2}
	     * util.getByteInfo('生日：1987-08-05') => Object {length: 16}
	   */
			getByteInfo: function getByteInfo(str, index) {
				var i = 0,
				    len = str.length,
				    ret = {
					length: 0
				};

				for (; i < len; i++) {
					if (str.charCodeAt(i) > 255) {
						ret.length += 2;
					} else {
						ret.length += 1;
					}
					if (index !== undefined && ret.index === undefined && ret.length > index) {
						ret.index = i;
					}
				}

				return ret;
			},
			/**
	     * 字符串填充
	     *
	     * @param  {string} 需要处理的字符串,非字符串会先转换为字符串
	   * @param  {number} 填充的长度,如果需要处理的字符串大于此参数,则放弃
	   * @param  {string} 可选,填充字符,非字符串会先转换为字符串,默认为空格字符
	   * @param  {boolean} 可选,左边还是右边,默认为false,左边
	   * @param  {boolean} 可选,字符串的长度超过参数len是否截取,默认为false
	   * @return {string} 处理后的字符串
	     *
	     * @name    pad
	     * @grammar util.pad(str, len[, fill][, right])
	     * @example
	     * util.pad('mo', 4, '-') => '--mo'
	     * util.pad(19871103, 14, 0, true) => '19871103000000'
	     * util.pad(19871103, 6, null, false, true) => '871103'
	   */
			pad: function pad(str, len, fill, right, trim) {
				str = str + '';

				if (!len || !trim && str.length >= len) return str;

				fill == null && (fill = '');

				fill = new Array(len + 1).join(fill);
				if (!right) {
					str = (fill + str).substr(-len);
				} else {
					str = (str + fill).substring(0, len);
				}

				return str;
			}
		};
		return utils;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _iscroll = __webpack_require__(27);

	var _iscroll2 = _interopRequireDefault(_iscroll);

	__webpack_require__(28);

	var noop = function noop() {};

	var Slider = (function (_Component) {
	  _inherits(Slider, _Component);

	  _createClass(Slider, null, [{
	    key: 'defaultProps',
	    value: {
	      data: [],
	      wrapperRender: noop,
	      itemRender: noop,
	      iScroll: { // iScorll中对应的参数
	        eventPassthrough: true, // 非iScroll方向保持原生滚动
	        scrollX: true,
	        scrollY: false
	      },
	      active: null,
	      defaultActive: null,
	      itemAction: noop,
	      scale: null // item宽高的比例(无特殊情况，一般用不到这个参数。。。在imgSlider中图片滚动中会用到)
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.array.isRequired,
	      wrapperRender: _react2['default'].PropTypes.func.isRequired,
	      itemRender: _react2['default'].PropTypes.func.isRequired,
	      iScroll: _react2['default'].PropTypes.object,
	      defaultActive: _react2['default'].PropTypes.number,
	      active: _react2['default'].PropTypes.number,
	      itemAction: _react2['default'].PropTypes.func,
	      scale: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);

	  function Slider(props) {
	    var _this = this;

	    _classCallCheck(this, Slider);

	    _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).call(this, props);

	    this.setIndex = function (index) {
	      if (_this.state.active !== index) {
	        _this.setState({ active: index });
	      }
	    };

	    this.getItemDom = function () {
	      return _this.refs.ul.children[0];
	    };

	    var active = props.active;

	    var defaultActive = props.defaultActive;
	    var ret = 0;

	    if (active != null) {
	      ret = active;
	    } else if (defaultActive != null) {
	      ret = defaultActive;
	    }

	    this.state = {
	      active: ret,
	      itemWidth: null,
	      itemHeight: null
	    };
	  }

	  _createClass(Slider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _props = this.props;
	      var scale = _props.scale;

	      var iScroll = _props.iScroll;
	      var itemCss = getComputedStyle(this.getItemDom());
	      var itemWidth = parseInt(itemCss.width);
	      var itemHeight = parseInt(itemCss.height);

	      this.setState({
	        itemWidth: itemWidth,
	        itemHeight: itemHeight
	      }, function () {
	        iScroll.options = iScroll.scrollX ? { startX: -_this2.state.active * itemWidth } : { startY: -_this2.state.active * itemHeight };
	        _this2.scroll = new _iscroll2['default'](_this2.refs.wrapper, iScroll);

	        if (iScroll.snap) {
	          _this2.scroll.on('scrollEnd', function () {
	            _this2.setIndex(iScroll.scrollX ? _this2.scroll.currentPage.pageX : _this2.scroll.currentPage.pageY);
	          });
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.scroll.destroy();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props2 = this.props;
	      var wrapperRender = _props2.wrapperRender;
	      var data = _props2.data;
	      var itemAction = _props2.itemAction;
	      var itemRender = _props2.itemRender;
	      var iScroll = _props2.iScroll;

	      var scale = _props2.scale;
	      var _state = this.state;
	      var itemWidth = _state.itemWidth;
	      var itemHeight = _state.itemHeight;
	      var style = undefined;

	      if (iScroll.scrollX) {
	        style = {
	          width: itemWidth * data.length,
	          height: scale ? itemWidth / scale : itemHeight
	        };
	      } else {
	        style = {
	          width: scale ? itemHeight / scale : itemWidth,
	          height: itemHeight * data.length
	        };
	      }

	      return _react2['default'].createElement(
	        'div',
	        null,
	        wrapperRender(_react2['default'].createElement(
	          'div',
	          { className: 'cm-slide', style: style },
	          _react2['default'].createElement(
	            'ul',
	            { ref: 'ul', className: 'cm-slide-list' },
	            data.map(function (item, i) {
	              return _react2['default'].createElement(
	                'li',
	                { key: i, onClick: itemAction.bind(_this3, item), className: 'cm-slide-item' },
	                itemRender(item)
	              );
	            })
	          )
	        ))
	      );
	    }
	  }]);

	  return Slider;
	})(_react.Component);

	exports['default'] = Slider;
	;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
	'use strict';

	(function (window, document, Math) {
		var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};

		var utils = (function () {
			var me = {};

			var _elementStyle = document.createElement('div').style;
			var _vendor = (function () {
				var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				    transform,
				    i = 0,
				    l = vendors.length;

				for (; i < l; i++) {
					transform = vendors[i] + 'ransform';
					if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
				}

				return false;
			})();

			function _prefixStyle(style) {
				if (_vendor === false) return false;
				if (_vendor === '') return style;
				return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
			}

			me.getTime = Date.now || function getTime() {
				return new Date().getTime();
			};

			me.extend = function (target, obj) {
				for (var i in obj) {
					target[i] = obj[i];
				}
			};

			me.addEvent = function (el, type, fn, capture) {
				el.addEventListener(type, fn, !!capture);
			};

			me.removeEvent = function (el, type, fn, capture) {
				el.removeEventListener(type, fn, !!capture);
			};

			me.prefixPointerEvent = function (pointerEvent) {
				return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
			};

			me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
				var distance = current - start,
				    speed = Math.abs(distance) / time,
				    destination,
				    duration;

				deceleration = deceleration === undefined ? 0.0006 : deceleration;

				destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
				duration = speed / deceleration;

				if (destination < lowerMargin) {
					destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
					distance = Math.abs(destination - current);
					duration = distance / speed;
				} else if (destination > 0) {
					destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
					distance = Math.abs(current) + destination;
					duration = distance / speed;
				}

				return {
					destination: Math.round(destination),
					duration: duration
				};
			};

			var _transform = _prefixStyle('transform');

			me.extend(me, {
				hasTransform: _transform !== false,
				hasPerspective: _prefixStyle('perspective') in _elementStyle,
				hasTouch: 'ontouchstart' in window,
				hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
				hasTransition: _prefixStyle('transition') in _elementStyle
			});

			// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
			me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);

			me.extend(me.style = {}, {
				transform: _transform,
				transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
				transitionDuration: _prefixStyle('transitionDuration'),
				transitionDelay: _prefixStyle('transitionDelay'),
				transformOrigin: _prefixStyle('transformOrigin')
			});

			me.hasClass = function (e, c) {
				var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
				return re.test(e.className);
			};

			me.addClass = function (e, c) {
				if (me.hasClass(e, c)) {
					return;
				}

				var newclass = e.className.split(' ');
				newclass.push(c);
				e.className = newclass.join(' ');
			};

			me.removeClass = function (e, c) {
				if (!me.hasClass(e, c)) {
					return;
				}

				var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
				e.className = e.className.replace(re, ' ');
			};

			me.offset = function (el) {
				var left = -el.offsetLeft,
				    top = -el.offsetTop;

				// jshint -W084
				while (el = el.offsetParent) {
					left -= el.offsetLeft;
					top -= el.offsetTop;
				}
				// jshint +W084

				return {
					left: left,
					top: top
				};
			};

			me.preventDefaultException = function (el, exceptions) {
				for (var i in exceptions) {
					if (exceptions[i].test(el[i])) {
						return true;
					}
				}

				return false;
			};

			me.extend(me.eventType = {}, {
				touchstart: 1,
				touchmove: 1,
				touchend: 1,

				mousedown: 2,
				mousemove: 2,
				mouseup: 2,

				pointerdown: 3,
				pointermove: 3,
				pointerup: 3,

				MSPointerDown: 3,
				MSPointerMove: 3,
				MSPointerUp: 3
			});

			me.extend(me.ease = {}, {
				quadratic: {
					style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
					fn: function fn(k) {
						return k * (2 - k);
					}
				},
				circular: {
					style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
					fn: function fn(k) {
						return Math.sqrt(1 - --k * k);
					}
				},
				back: {
					style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
					fn: function fn(k) {
						var b = 4;
						return (k = k - 1) * k * ((b + 1) * k + b) + 1;
					}
				},
				bounce: {
					style: '',
					fn: function fn(k) {
						if ((k /= 1) < 1 / 2.75) {
							return 7.5625 * k * k;
						} else if (k < 2 / 2.75) {
							return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
						} else if (k < 2.5 / 2.75) {
							return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
						} else {
							return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
						}
					}
				},
				elastic: {
					style: '',
					fn: function fn(k) {
						var f = 0.22,
						    e = 0.4;

						if (k === 0) {
							return 0;
						}
						if (k == 1) {
							return 1;
						}

						return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
					}
				}
			});

			me.tap = function (e, eventName) {
				var ev = document.createEvent('Event');
				ev.initEvent(eventName, true, true);
				ev.pageX = e.pageX;
				ev.pageY = e.pageY;
				e.target.dispatchEvent(ev);
			};

			me.click = function (e) {
				var target = e.target,
				    ev;

				if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
					ev = document.createEvent('MouseEvents');
					ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);

					ev._constructed = true;
					target.dispatchEvent(ev);
				}
			};

			return me;
		})();

		function IScroll(el, options) {
			this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
			this.scroller = this.wrapper.children[0];
			this.scrollerStyle = this.scroller.style; // cache style for better performance

			this.options = {

				resizeScrollbars: true,

				mouseWheelSpeed: 20,

				snapThreshold: 0.334,

				// INSERT POINT: OPTIONS

				startX: 0,
				startY: 0,
				scrollY: true,
				directionLockThreshold: 5,
				momentum: true,

				bounce: true,
				bounceTime: 600,
				bounceEasing: '',

				preventDefault: true,
				preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

				HWCompositing: true,
				useTransition: true,
				useTransform: true
			};

			for (var i in options) {
				this.options[i] = options[i];
			}

			// Normalize options
			this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

			this.options.useTransition = utils.hasTransition && this.options.useTransition;
			this.options.useTransform = utils.hasTransform && this.options.useTransform;

			this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
			this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

			// If you want eventPassthrough I have to lock one of the axes
			this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
			this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

			// With eventPassthrough we also need lockDirection mechanism
			this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
			this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

			this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

			this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

			if (this.options.tap === true) {
				this.options.tap = 'tap';
			}

			if (this.options.shrinkScrollbars == 'scale') {
				this.options.useTransition = false;
			}

			this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

			// INSERT POINT: NORMALIZATION

			// Some defaults	
			this.x = 0;
			this.y = 0;
			this.directionX = 0;
			this.directionY = 0;
			this._events = {};

			// INSERT POINT: DEFAULTS

			this._init();
			this.refresh();

			this.scrollTo(this.options.startX, this.options.startY);
			this.enable();
		}

		IScroll.prototype = {
			version: '5.1.3',

			_init: function _init() {
				this._initEvents();

				if (this.options.scrollbars || this.options.indicators) {
					this._initIndicators();
				}

				if (this.options.mouseWheel) {
					this._initWheel();
				}

				if (this.options.snap) {
					this._initSnap();
				}

				if (this.options.keyBindings) {
					this._initKeys();
				}

				// INSERT POINT: _init
			},

			destroy: function destroy() {
				this._initEvents(true);

				this._execEvent('destroy');
			},

			_transitionEnd: function _transitionEnd(e) {
				if (e.target != this.scroller || !this.isInTransition) {
					return;
				}

				this._transitionTime();
				if (!this.resetPosition(this.options.bounceTime)) {
					this.isInTransition = false;
					this._execEvent('scrollEnd');
				}
			},

			_start: function _start(e) {
				// React to left mouse button only
				if (utils.eventType[e.type] != 1) {
					if (e.button !== 0) {
						return;
					}
				}

				if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
					e.preventDefault();
				}

				var point = e.touches ? e.touches[0] : e,
				    pos;

				this.initiated = utils.eventType[e.type];
				this.moved = false;
				this.distX = 0;
				this.distY = 0;
				this.directionX = 0;
				this.directionY = 0;
				this.directionLocked = 0;

				this._transitionTime();

				this.startTime = utils.getTime();

				if (this.options.useTransition && this.isInTransition) {
					this.isInTransition = false;
					pos = this.getComputedPosition();
					this._translate(Math.round(pos.x), Math.round(pos.y));
					this._execEvent('scrollEnd');
				} else if (!this.options.useTransition && this.isAnimating) {
					this.isAnimating = false;
					this._execEvent('scrollEnd');
				}

				this.startX = this.x;
				this.startY = this.y;
				this.absStartX = this.x;
				this.absStartY = this.y;
				this.pointX = point.pageX;
				this.pointY = point.pageY;

				this._execEvent('beforeScrollStart');
			},

			_move: function _move(e) {
				if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault) {
					// increases performance on Android? TODO: check!
					e.preventDefault();
				}

				var point = e.touches ? e.touches[0] : e,
				    deltaX = point.pageX - this.pointX,
				    deltaY = point.pageY - this.pointY,
				    timestamp = utils.getTime(),
				    newX,
				    newY,
				    absDistX,
				    absDistY;

				this.pointX = point.pageX;
				this.pointY = point.pageY;

				this.distX += deltaX;
				this.distY += deltaY;
				absDistX = Math.abs(this.distX);
				absDistY = Math.abs(this.distY);

				// We need to move at least 10 pixels for the scrolling to initiate
				if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
					return;
				}

				// If you are scrolling in one direction lock the other
				if (!this.directionLocked && !this.options.freeScroll) {
					if (absDistX > absDistY + this.options.directionLockThreshold) {
						this.directionLocked = 'h'; // lock horizontally
					} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
							this.directionLocked = 'v'; // lock vertically
						} else {
								this.directionLocked = 'n'; // no lock
							}
				}

				if (this.directionLocked == 'h') {
					if (this.options.eventPassthrough == 'vertical') {
						e.preventDefault();
					} else if (this.options.eventPassthrough == 'horizontal') {
						this.initiated = false;
						return;
					}

					deltaY = 0;
				} else if (this.directionLocked == 'v') {
					if (this.options.eventPassthrough == 'horizontal') {
						e.preventDefault();
					} else if (this.options.eventPassthrough == 'vertical') {
						this.initiated = false;
						return;
					}

					deltaX = 0;
				}

				deltaX = this.hasHorizontalScroll ? deltaX : 0;
				deltaY = this.hasVerticalScroll ? deltaY : 0;

				newX = this.x + deltaX;
				newY = this.y + deltaY;

				// Slow down if outside of the boundaries
				if (newX > 0 || newX < this.maxScrollX) {
					newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
				}
				if (newY > 0 || newY < this.maxScrollY) {
					newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
				}

				this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
				this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

				if (!this.moved) {
					this._execEvent('scrollStart');
				}

				this.moved = true;

				this._translate(newX, newY);

				/* REPLACE START: _move */

				if (timestamp - this.startTime > 300) {
					this.startTime = timestamp;
					this.startX = this.x;
					this.startY = this.y;
				}

				/* REPLACE END: _move */
			},

			_end: function _end(e) {
				if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
					e.preventDefault();
				}

				var point = e.changedTouches ? e.changedTouches[0] : e,
				    momentumX,
				    momentumY,
				    duration = utils.getTime() - this.startTime,
				    newX = Math.round(this.x),
				    newY = Math.round(this.y),
				    distanceX = Math.abs(newX - this.startX),
				    distanceY = Math.abs(newY - this.startY),
				    time = 0,
				    easing = '';

				this.isInTransition = 0;
				this.initiated = 0;
				this.endTime = utils.getTime();

				// reset if we are outside of the boundaries
				if (this.resetPosition(this.options.bounceTime)) {
					return;
				}

				this.scrollTo(newX, newY); // ensures that the last position is rounded

				// we scrolled less than 10 pixels
				if (!this.moved) {
					if (this.options.tap) {
						utils.tap(e, this.options.tap);
					}

					if (this.options.click) {
						utils.click(e);
					}

					this._execEvent('scrollCancel');
					return;
				}

				if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
					this._execEvent('flick');
					return;
				}

				// start momentum animation if needed
				if (this.options.momentum && duration < 300) {
					momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
					momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
					newX = momentumX.destination;
					newY = momentumY.destination;
					time = Math.max(momentumX.duration, momentumY.duration);
					this.isInTransition = 1;
				}

				if (this.options.snap) {
					var snap = this._nearestSnap(newX, newY);
					this.currentPage = snap;
					time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
					newX = snap.x;
					newY = snap.y;

					this.directionX = 0;
					this.directionY = 0;
					easing = this.options.bounceEasing;
				}

				// INSERT POINT: _end

				if (newX != this.x || newY != this.y) {
					// change easing function when scroller goes out of the boundaries
					if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
						easing = utils.ease.quadratic;
					}

					this.scrollTo(newX, newY, time, easing);
					return;
				}

				this._execEvent('scrollEnd');
			},

			_resize: function _resize() {
				var that = this;

				clearTimeout(this.resizeTimeout);

				this.resizeTimeout = setTimeout(function () {
					that.refresh();
				}, this.options.resizePolling);
			},

			resetPosition: function resetPosition(time) {
				var x = this.x,
				    y = this.y;

				time = time || 0;

				if (!this.hasHorizontalScroll || this.x > 0) {
					x = 0;
				} else if (this.x < this.maxScrollX) {
					x = this.maxScrollX;
				}

				if (!this.hasVerticalScroll || this.y > 0) {
					y = 0;
				} else if (this.y < this.maxScrollY) {
					y = this.maxScrollY;
				}

				if (x == this.x && y == this.y) {
					return false;
				}

				this.scrollTo(x, y, time, this.options.bounceEasing);

				return true;
			},

			disable: function disable() {
				this.enabled = false;
			},

			enable: function enable() {
				this.enabled = true;
			},

			refresh: function refresh() {
				var rf = this.wrapper.offsetHeight; // Force reflow

				this.wrapperWidth = this.wrapper.clientWidth;
				this.wrapperHeight = this.wrapper.clientHeight;

				/* REPLACE START: refresh */

				this.scrollerWidth = this.scroller.offsetWidth;
				this.scrollerHeight = this.scroller.offsetHeight;

				this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
				this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

				/* REPLACE END: refresh */

				this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
				this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

				if (!this.hasHorizontalScroll) {
					this.maxScrollX = 0;
					this.scrollerWidth = this.wrapperWidth;
				}

				if (!this.hasVerticalScroll) {
					this.maxScrollY = 0;
					this.scrollerHeight = this.wrapperHeight;
				}

				this.endTime = 0;
				this.directionX = 0;
				this.directionY = 0;

				this.wrapperOffset = utils.offset(this.wrapper);

				this._execEvent('refresh');

				this.resetPosition();

				// INSERT POINT: _refresh
			},

			on: function on(type, fn) {
				if (!this._events[type]) {
					this._events[type] = [];
				}

				this._events[type].push(fn);
			},

			off: function off(type, fn) {
				if (!this._events[type]) {
					return;
				}

				var index = this._events[type].indexOf(fn);

				if (index > -1) {
					this._events[type].splice(index, 1);
				}
			},

			_execEvent: function _execEvent(type) {
				if (!this._events[type]) {
					return;
				}

				var i = 0,
				    l = this._events[type].length;

				if (!l) {
					return;
				}

				for (; i < l; i++) {
					this._events[type][i].apply(this, [].slice.call(arguments, 1));
				}
			},

			scrollBy: function scrollBy(x, y, time, easing) {
				x = this.x + x;
				y = this.y + y;
				time = time || 0;

				this.scrollTo(x, y, time, easing);
			},

			scrollTo: function scrollTo(x, y, time, easing) {
				easing = easing || utils.ease.circular;

				this.isInTransition = this.options.useTransition && time > 0;

				if (!time || this.options.useTransition && easing.style) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
					this._translate(x, y);
				} else {
					this._animate(x, y, time, easing.fn);
				}
			},

			scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
				el = el.nodeType ? el : this.scroller.querySelector(el);

				if (!el) {
					return;
				}

				var pos = utils.offset(el);

				pos.left -= this.wrapperOffset.left;
				pos.top -= this.wrapperOffset.top;

				// if offsetX/Y are true we center the element to the screen
				if (offsetX === true) {
					offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
				}
				if (offsetY === true) {
					offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
				}

				pos.left -= offsetX || 0;
				pos.top -= offsetY || 0;

				pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
				pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

				time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

				this.scrollTo(pos.left, pos.top, time, easing);
			},

			_transitionTime: function _transitionTime(time) {
				time = time || 0;

				this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
				}

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].transitionTime(time);
					}
				}

				// INSERT POINT: _transitionTime
			},

			_transitionTimingFunction: function _transitionTimingFunction(easing) {
				this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].transitionTimingFunction(easing);
					}
				}

				// INSERT POINT: _transitionTimingFunction
			},

			_translate: function _translate(x, y) {
				if (this.options.useTransform) {

					/* REPLACE START: _translate */

					this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

					/* REPLACE END: _translate */
				} else {
						x = Math.round(x);
						y = Math.round(y);
						this.scrollerStyle.left = x + 'px';
						this.scrollerStyle.top = y + 'px';
					}

				this.x = x;
				this.y = y;

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].updatePosition();
					}
				}

				// INSERT POINT: _translate
			},

			_initEvents: function _initEvents(remove) {
				var eventType = remove ? utils.removeEvent : utils.addEvent,
				    target = this.options.bindToWrapper ? this.wrapper : window;

				eventType(window, 'orientationchange', this);
				eventType(window, 'resize', this);

				if (this.options.click) {
					eventType(this.wrapper, 'click', this, true);
				}

				if (!this.options.disableMouse) {
					eventType(this.wrapper, 'mousedown', this);
					eventType(target, 'mousemove', this);
					eventType(target, 'mousecancel', this);
					eventType(target, 'mouseup', this);
				}

				if (utils.hasPointer && !this.options.disablePointer) {
					eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
					eventType(target, utils.prefixPointerEvent('pointermove'), this);
					eventType(target, utils.prefixPointerEvent('pointercancel'), this);
					eventType(target, utils.prefixPointerEvent('pointerup'), this);
				}

				if (utils.hasTouch && !this.options.disableTouch) {
					eventType(this.wrapper, 'touchstart', this);
					eventType(target, 'touchmove', this);
					eventType(target, 'touchcancel', this);
					eventType(target, 'touchend', this);
				}

				eventType(this.scroller, 'transitionend', this);
				eventType(this.scroller, 'webkitTransitionEnd', this);
				eventType(this.scroller, 'oTransitionEnd', this);
				eventType(this.scroller, 'MSTransitionEnd', this);
			},

			getComputedPosition: function getComputedPosition() {
				var matrix = window.getComputedStyle(this.scroller, null),
				    x,
				    y;

				if (this.options.useTransform) {
					matrix = matrix[utils.style.transform].split(')')[0].split(', ');
					x = +(matrix[12] || matrix[4]);
					y = +(matrix[13] || matrix[5]);
				} else {
					x = +matrix.left.replace(/[^-\d.]/g, '');
					y = +matrix.top.replace(/[^-\d.]/g, '');
				}

				return { x: x, y: y };
			},

			_initIndicators: function _initIndicators() {
				var interactive = this.options.interactiveScrollbars,
				    customStyle = typeof this.options.scrollbars != 'string',
				    indicators = [],
				    indicator;

				var that = this;

				this.indicators = [];

				if (this.options.scrollbars) {
					// Vertical scrollbar
					if (this.options.scrollY) {
						indicator = {
							el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
							interactive: interactive,
							defaultScrollbars: true,
							customStyle: customStyle,
							resize: this.options.resizeScrollbars,
							shrink: this.options.shrinkScrollbars,
							fade: this.options.fadeScrollbars,
							listenX: false
						};

						this.wrapper.appendChild(indicator.el);
						indicators.push(indicator);
					}

					// Horizontal scrollbar
					if (this.options.scrollX) {
						indicator = {
							el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
							interactive: interactive,
							defaultScrollbars: true,
							customStyle: customStyle,
							resize: this.options.resizeScrollbars,
							shrink: this.options.shrinkScrollbars,
							fade: this.options.fadeScrollbars,
							listenY: false
						};

						this.wrapper.appendChild(indicator.el);
						indicators.push(indicator);
					}
				}

				if (this.options.indicators) {
					// TODO: check concat compatibility
					indicators = indicators.concat(this.options.indicators);
				}

				for (var i = indicators.length; i--;) {
					this.indicators.push(new Indicator(this, indicators[i]));
				}

				// TODO: check if we can use array.map (wide compatibility and performance issues)
				function _indicatorsMap(fn) {
					for (var i = that.indicators.length; i--;) {
						fn.call(that.indicators[i]);
					}
				}

				if (this.options.fadeScrollbars) {
					this.on('scrollEnd', function () {
						_indicatorsMap(function () {
							this.fade();
						});
					});

					this.on('scrollCancel', function () {
						_indicatorsMap(function () {
							this.fade();
						});
					});

					this.on('scrollStart', function () {
						_indicatorsMap(function () {
							this.fade(1);
						});
					});

					this.on('beforeScrollStart', function () {
						_indicatorsMap(function () {
							this.fade(1, true);
						});
					});
				}

				this.on('refresh', function () {
					_indicatorsMap(function () {
						this.refresh();
					});
				});

				this.on('destroy', function () {
					_indicatorsMap(function () {
						this.destroy();
					});

					delete this.indicators;
				});
			},

			_initWheel: function _initWheel() {
				utils.addEvent(this.wrapper, 'wheel', this);
				utils.addEvent(this.wrapper, 'mousewheel', this);
				utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

				this.on('destroy', function () {
					utils.removeEvent(this.wrapper, 'wheel', this);
					utils.removeEvent(this.wrapper, 'mousewheel', this);
					utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
				});
			},

			_wheel: function _wheel(e) {
				if (!this.enabled) {
					return;
				}

				e.preventDefault();
				e.stopPropagation();

				var wheelDeltaX,
				    wheelDeltaY,
				    newX,
				    newY,
				    that = this;

				if (this.wheelTimeout === undefined) {
					that._execEvent('scrollStart');
				}

				// Execute the scrollEnd event after 400ms the wheel stopped scrolling
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = setTimeout(function () {
					that._execEvent('scrollEnd');
					that.wheelTimeout = undefined;
				}, 400);

				if ('deltaX' in e) {
					if (e.deltaMode === 1) {
						wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
						wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
					} else {
						wheelDeltaX = -e.deltaX;
						wheelDeltaY = -e.deltaY;
					}
				} else if ('wheelDeltaX' in e) {
					wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
					wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
				} else if ('wheelDelta' in e) {
					wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
				} else if ('detail' in e) {
					wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
				} else {
					return;
				}

				wheelDeltaX *= this.options.invertWheelDirection;
				wheelDeltaY *= this.options.invertWheelDirection;

				if (!this.hasVerticalScroll) {
					wheelDeltaX = wheelDeltaY;
					wheelDeltaY = 0;
				}

				if (this.options.snap) {
					newX = this.currentPage.pageX;
					newY = this.currentPage.pageY;

					if (wheelDeltaX > 0) {
						newX--;
					} else if (wheelDeltaX < 0) {
						newX++;
					}

					if (wheelDeltaY > 0) {
						newY--;
					} else if (wheelDeltaY < 0) {
						newY++;
					}

					this.goToPage(newX, newY);

					return;
				}

				newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
				newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

				if (newX > 0) {
					newX = 0;
				} else if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
				}

				if (newY > 0) {
					newY = 0;
				} else if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
				}

				this.scrollTo(newX, newY, 0);

				// INSERT POINT: _wheel
			},

			_initSnap: function _initSnap() {
				this.currentPage = {};

				if (typeof this.options.snap == 'string') {
					this.options.snap = this.scroller.querySelectorAll(this.options.snap);
				}

				this.on('refresh', function () {
					var i = 0,
					    l,
					    m = 0,
					    n,
					    cx,
					    cy,
					    x = 0,
					    y,
					    stepX = this.options.snapStepX || this.wrapperWidth,
					    stepY = this.options.snapStepY || this.wrapperHeight,
					    el;

					this.pages = [];

					if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
						return;
					}

					if (this.options.snap === true) {
						cx = Math.round(stepX / 2);
						cy = Math.round(stepY / 2);

						while (x > -this.scrollerWidth) {
							this.pages[i] = [];
							l = 0;
							y = 0;

							while (y > -this.scrollerHeight) {
								this.pages[i][l] = {
									x: Math.max(x, this.maxScrollX),
									y: Math.max(y, this.maxScrollY),
									width: stepX,
									height: stepY,
									cx: x - cx,
									cy: y - cy
								};

								y -= stepY;
								l++;
							}

							x -= stepX;
							i++;
						}
					} else {
						el = this.options.snap;
						l = el.length;
						n = -1;

						for (; i < l; i++) {
							if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
								m = 0;
								n++;
							}

							if (!this.pages[m]) {
								this.pages[m] = [];
							}

							x = Math.max(-el[i].offsetLeft, this.maxScrollX);
							y = Math.max(-el[i].offsetTop, this.maxScrollY);
							cx = x - Math.round(el[i].offsetWidth / 2);
							cy = y - Math.round(el[i].offsetHeight / 2);

							this.pages[m][n] = {
								x: x,
								y: y,
								width: el[i].offsetWidth,
								height: el[i].offsetHeight,
								cx: cx,
								cy: cy
							};

							if (x > this.maxScrollX) {
								m++;
							}
						}
					}

					this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

					// Update snap threshold if needed
					if (this.options.snapThreshold % 1 === 0) {
						this.snapThresholdX = this.options.snapThreshold;
						this.snapThresholdY = this.options.snapThreshold;
					} else {
						this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
						this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
					}
				});

				this.on('flick', function () {
					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

					this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
				});
			},

			_nearestSnap: function _nearestSnap(x, y) {
				if (!this.pages.length) {
					return { x: 0, y: 0, pageX: 0, pageY: 0 };
				}

				var i = 0,
				    l = this.pages.length,
				    m = 0;

				// Check if we exceeded the snap threshold
				if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
					return this.currentPage;
				}

				if (x > 0) {
					x = 0;
				} else if (x < this.maxScrollX) {
					x = this.maxScrollX;
				}

				if (y > 0) {
					y = 0;
				} else if (y < this.maxScrollY) {
					y = this.maxScrollY;
				}

				for (; i < l; i++) {
					if (x >= this.pages[i][0].cx) {
						x = this.pages[i][0].x;
						break;
					}
				}

				l = this.pages[i].length;

				for (; m < l; m++) {
					if (y >= this.pages[0][m].cy) {
						y = this.pages[0][m].y;
						break;
					}
				}

				if (i == this.currentPage.pageX) {
					i += this.directionX;

					if (i < 0) {
						i = 0;
					} else if (i >= this.pages.length) {
						i = this.pages.length - 1;
					}

					x = this.pages[i][0].x;
				}

				if (m == this.currentPage.pageY) {
					m += this.directionY;

					if (m < 0) {
						m = 0;
					} else if (m >= this.pages[0].length) {
						m = this.pages[0].length - 1;
					}

					y = this.pages[0][m].y;
				}

				return {
					x: x,
					y: y,
					pageX: i,
					pageY: m
				};
			},

			goToPage: function goToPage(x, y, time, easing) {
				easing = easing || this.options.bounceEasing;

				if (x >= this.pages.length) {
					x = this.pages.length - 1;
				} else if (x < 0) {
					x = 0;
				}

				if (y >= this.pages[x].length) {
					y = this.pages[x].length - 1;
				} else if (y < 0) {
					y = 0;
				}

				var posX = this.pages[x][y].x,
				    posY = this.pages[x][y].y;

				time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

				this.currentPage = {
					x: posX,
					y: posY,
					pageX: x,
					pageY: y
				};

				this.scrollTo(posX, posY, time, easing);
			},

			next: function next(time, easing) {
				var x = this.currentPage.pageX,
				    y = this.currentPage.pageY;

				x++;

				if (x >= this.pages.length && this.hasVerticalScroll) {
					x = 0;
					y++;
				}

				this.goToPage(x, y, time, easing);
			},

			prev: function prev(time, easing) {
				var x = this.currentPage.pageX,
				    y = this.currentPage.pageY;

				x--;

				if (x < 0 && this.hasVerticalScroll) {
					x = 0;
					y--;
				}

				this.goToPage(x, y, time, easing);
			},

			_initKeys: function _initKeys(e) {
				// default key bindings
				var keys = {
					pageUp: 33,
					pageDown: 34,
					end: 35,
					home: 36,
					left: 37,
					up: 38,
					right: 39,
					down: 40
				};
				var i;

				// if you give me characters I give you keycode
				if (typeof this.options.keyBindings == 'object') {
					for (i in this.options.keyBindings) {
						if (typeof this.options.keyBindings[i] == 'string') {
							this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
						}
					}
				} else {
					this.options.keyBindings = {};
				}

				for (i in keys) {
					this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
				}

				utils.addEvent(window, 'keydown', this);

				this.on('destroy', function () {
					utils.removeEvent(window, 'keydown', this);
				});
			},

			_key: function _key(e) {
				if (!this.enabled) {
					return;
				}

				var snap = this.options.snap,
				    // we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				    newY = snap ? this.currentPage.pageY : this.y,
				    now = utils.getTime(),
				    prevTime = this.keyTime || 0,
				    acceleration = 0.250,
				    pos;

				if (this.options.useTransition && this.isInTransition) {
					pos = this.getComputedPosition();

					this._translate(Math.round(pos.x), Math.round(pos.y));
					this.isInTransition = false;
				}

				this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

				switch (e.keyCode) {
					case this.options.keyBindings.pageUp:
						if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
							newX += snap ? 1 : this.wrapperWidth;
						} else {
							newY += snap ? 1 : this.wrapperHeight;
						}
						break;
					case this.options.keyBindings.pageDown:
						if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
							newX -= snap ? 1 : this.wrapperWidth;
						} else {
							newY -= snap ? 1 : this.wrapperHeight;
						}
						break;
					case this.options.keyBindings.end:
						newX = snap ? this.pages.length - 1 : this.maxScrollX;
						newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
						break;
					case this.options.keyBindings.home:
						newX = 0;
						newY = 0;
						break;
					case this.options.keyBindings.left:
						newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.up:
						newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.right:
						newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.down:
						newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					default:
						return;
				}

				if (snap) {
					this.goToPage(newX, newY);
					return;
				}

				if (newX > 0) {
					newX = 0;
					this.keyAcceleration = 0;
				} else if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
					this.keyAcceleration = 0;
				}

				if (newY > 0) {
					newY = 0;
					this.keyAcceleration = 0;
				} else if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
					this.keyAcceleration = 0;
				}

				this.scrollTo(newX, newY, 0);

				this.keyTime = now;
			},

			_animate: function _animate(destX, destY, duration, easingFn) {
				var that = this,
				    startX = this.x,
				    startY = this.y,
				    startTime = utils.getTime(),
				    destTime = startTime + duration;

				function step() {
					var now = utils.getTime(),
					    newX,
					    newY,
					    easing;

					if (now >= destTime) {
						that.isAnimating = false;
						that._translate(destX, destY);

						if (!that.resetPosition(that.options.bounceTime)) {
							that._execEvent('scrollEnd');
						}

						return;
					}

					now = (now - startTime) / duration;
					easing = easingFn(now);
					newX = (destX - startX) * easing + startX;
					newY = (destY - startY) * easing + startY;
					that._translate(newX, newY);

					if (that.isAnimating) {
						rAF(step);
					}
				}

				this.isAnimating = true;
				step();
			},
			handleEvent: function handleEvent(e) {
				switch (e.type) {
					case 'touchstart':
					case 'pointerdown':
					case 'MSPointerDown':
					case 'mousedown':
						this._start(e);
						break;
					case 'touchmove':
					case 'pointermove':
					case 'MSPointerMove':
					case 'mousemove':
						this._move(e);
						break;
					case 'touchend':
					case 'pointerup':
					case 'MSPointerUp':
					case 'mouseup':
					case 'touchcancel':
					case 'pointercancel':
					case 'MSPointerCancel':
					case 'mousecancel':
						this._end(e);
						break;
					case 'orientationchange':
					case 'resize':
						this._resize();
						break;
					case 'transitionend':
					case 'webkitTransitionEnd':
					case 'oTransitionEnd':
					case 'MSTransitionEnd':
						this._transitionEnd(e);
						break;
					case 'wheel':
					case 'DOMMouseScroll':
					case 'mousewheel':
						this._wheel(e);
						break;
					case 'keydown':
						this._key(e);
						break;
					case 'click':
						if (!e._constructed) {
							e.preventDefault();
							e.stopPropagation();
						}
						break;
				}
			}
		};
		function createDefaultScrollbar(direction, interactive, type) {
			var scrollbar = document.createElement('div'),
			    indicator = document.createElement('div');

			if (type === true) {
				scrollbar.style.cssText = 'position:absolute;z-index:9999';
				indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
			}

			indicator.className = 'iScrollIndicator';

			if (direction == 'h') {
				if (type === true) {
					scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
					indicator.style.height = '100%';
				}
				scrollbar.className = 'iScrollHorizontalScrollbar';
			} else {
				if (type === true) {
					scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
					indicator.style.width = '100%';
				}
				scrollbar.className = 'iScrollVerticalScrollbar';
			}

			scrollbar.style.cssText += ';overflow:hidden';

			if (!interactive) {
				scrollbar.style.pointerEvents = 'none';
			}

			scrollbar.appendChild(indicator);

			return scrollbar;
		}

		function Indicator(scroller, options) {
			this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
			this.wrapperStyle = this.wrapper.style;
			this.indicator = this.wrapper.children[0];
			this.indicatorStyle = this.indicator.style;
			this.scroller = scroller;

			this.options = {
				listenX: true,
				listenY: true,
				interactive: false,
				resize: true,
				defaultScrollbars: false,
				shrink: false,
				fade: false,
				speedRatioX: 0,
				speedRatioY: 0
			};

			for (var i in options) {
				this.options[i] = options[i];
			}

			this.sizeRatioX = 1;
			this.sizeRatioY = 1;
			this.maxPosX = 0;
			this.maxPosY = 0;

			if (this.options.interactive) {
				if (!this.options.disableTouch) {
					utils.addEvent(this.indicator, 'touchstart', this);
					utils.addEvent(window, 'touchend', this);
				}
				if (!this.options.disablePointer) {
					utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
					utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
				}
				if (!this.options.disableMouse) {
					utils.addEvent(this.indicator, 'mousedown', this);
					utils.addEvent(window, 'mouseup', this);
				}
			}

			if (this.options.fade) {
				this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
				this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
				this.wrapperStyle.opacity = '0';
			}
		}

		Indicator.prototype = {
			handleEvent: function handleEvent(e) {
				switch (e.type) {
					case 'touchstart':
					case 'pointerdown':
					case 'MSPointerDown':
					case 'mousedown':
						this._start(e);
						break;
					case 'touchmove':
					case 'pointermove':
					case 'MSPointerMove':
					case 'mousemove':
						this._move(e);
						break;
					case 'touchend':
					case 'pointerup':
					case 'MSPointerUp':
					case 'mouseup':
					case 'touchcancel':
					case 'pointercancel':
					case 'MSPointerCancel':
					case 'mousecancel':
						this._end(e);
						break;
				}
			},

			destroy: function destroy() {
				if (this.options.interactive) {
					utils.removeEvent(this.indicator, 'touchstart', this);
					utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
					utils.removeEvent(this.indicator, 'mousedown', this);

					utils.removeEvent(window, 'touchmove', this);
					utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
					utils.removeEvent(window, 'mousemove', this);

					utils.removeEvent(window, 'touchend', this);
					utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
					utils.removeEvent(window, 'mouseup', this);
				}

				if (this.options.defaultScrollbars) {
					this.wrapper.parentNode.removeChild(this.wrapper);
				}
			},

			_start: function _start(e) {
				var point = e.touches ? e.touches[0] : e;

				e.preventDefault();
				e.stopPropagation();

				this.transitionTime();

				this.initiated = true;
				this.moved = false;
				this.lastPointX = point.pageX;
				this.lastPointY = point.pageY;

				this.startTime = utils.getTime();

				if (!this.options.disableTouch) {
					utils.addEvent(window, 'touchmove', this);
				}
				if (!this.options.disablePointer) {
					utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
				}
				if (!this.options.disableMouse) {
					utils.addEvent(window, 'mousemove', this);
				}

				this.scroller._execEvent('beforeScrollStart');
			},

			_move: function _move(e) {
				var point = e.touches ? e.touches[0] : e,
				    deltaX,
				    deltaY,
				    newX,
				    newY,
				    timestamp = utils.getTime();

				if (!this.moved) {
					this.scroller._execEvent('scrollStart');
				}

				this.moved = true;

				deltaX = point.pageX - this.lastPointX;
				this.lastPointX = point.pageX;

				deltaY = point.pageY - this.lastPointY;
				this.lastPointY = point.pageY;

				newX = this.x + deltaX;
				newY = this.y + deltaY;

				this._pos(newX, newY);

				// INSERT POINT: indicator._move

				e.preventDefault();
				e.stopPropagation();
			},

			_end: function _end(e) {
				if (!this.initiated) {
					return;
				}

				this.initiated = false;

				e.preventDefault();
				e.stopPropagation();

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				if (this.scroller.options.snap) {
					var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

					if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
						this.scroller.directionX = 0;
						this.scroller.directionY = 0;
						this.scroller.currentPage = snap;
						this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
					}
				}

				if (this.moved) {
					this.scroller._execEvent('scrollEnd');
				}
			},

			transitionTime: function transitionTime(time) {
				time = time || 0;
				this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
				}
			},

			transitionTimingFunction: function transitionTimingFunction(easing) {
				this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
			},

			refresh: function refresh() {
				this.transitionTime();

				if (this.options.listenX && !this.options.listenY) {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
				} else if (this.options.listenY && !this.options.listenX) {
					this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
				} else {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
				}

				if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
					utils.addClass(this.wrapper, 'iScrollBothScrollbars');
					utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

					if (this.options.defaultScrollbars && this.options.customStyle) {
						if (this.options.listenX) {
							this.wrapper.style.right = '8px';
						} else {
							this.wrapper.style.bottom = '8px';
						}
					}
				} else {
					utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
					utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

					if (this.options.defaultScrollbars && this.options.customStyle) {
						if (this.options.listenX) {
							this.wrapper.style.right = '2px';
						} else {
							this.wrapper.style.bottom = '2px';
						}
					}
				}

				var r = this.wrapper.offsetHeight; // force refresh

				if (this.options.listenX) {
					this.wrapperWidth = this.wrapper.clientWidth;
					if (this.options.resize) {
						this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
						this.indicatorStyle.width = this.indicatorWidth + 'px';
					} else {
						this.indicatorWidth = this.indicator.clientWidth;
					}

					this.maxPosX = this.wrapperWidth - this.indicatorWidth;

					if (this.options.shrink == 'clip') {
						this.minBoundaryX = -this.indicatorWidth + 8;
						this.maxBoundaryX = this.wrapperWidth - 8;
					} else {
						this.minBoundaryX = 0;
						this.maxBoundaryX = this.maxPosX;
					}

					this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
				}

				if (this.options.listenY) {
					this.wrapperHeight = this.wrapper.clientHeight;
					if (this.options.resize) {
						this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
						this.indicatorStyle.height = this.indicatorHeight + 'px';
					} else {
						this.indicatorHeight = this.indicator.clientHeight;
					}

					this.maxPosY = this.wrapperHeight - this.indicatorHeight;

					if (this.options.shrink == 'clip') {
						this.minBoundaryY = -this.indicatorHeight + 8;
						this.maxBoundaryY = this.wrapperHeight - 8;
					} else {
						this.minBoundaryY = 0;
						this.maxBoundaryY = this.maxPosY;
					}

					this.maxPosY = this.wrapperHeight - this.indicatorHeight;
					this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
				}

				this.updatePosition();
			},

			updatePosition: function updatePosition() {
				var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

				if (!this.options.ignoreBoundaries) {
					if (x < this.minBoundaryX) {
						if (this.options.shrink == 'scale') {
							this.width = Math.max(this.indicatorWidth + x, 8);
							this.indicatorStyle.width = this.width + 'px';
						}
						x = this.minBoundaryX;
					} else if (x > this.maxBoundaryX) {
						if (this.options.shrink == 'scale') {
							this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
							this.indicatorStyle.width = this.width + 'px';
							x = this.maxPosX + this.indicatorWidth - this.width;
						} else {
							x = this.maxBoundaryX;
						}
					} else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
						this.width = this.indicatorWidth;
						this.indicatorStyle.width = this.width + 'px';
					}

					if (y < this.minBoundaryY) {
						if (this.options.shrink == 'scale') {
							this.height = Math.max(this.indicatorHeight + y * 3, 8);
							this.indicatorStyle.height = this.height + 'px';
						}
						y = this.minBoundaryY;
					} else if (y > this.maxBoundaryY) {
						if (this.options.shrink == 'scale') {
							this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
							this.indicatorStyle.height = this.height + 'px';
							y = this.maxPosY + this.indicatorHeight - this.height;
						} else {
							y = this.maxBoundaryY;
						}
					} else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
						this.height = this.indicatorHeight;
						this.indicatorStyle.height = this.height + 'px';
					}
				}

				this.x = x;
				this.y = y;

				if (this.scroller.options.useTransform) {
					this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
				} else {
					this.indicatorStyle.left = x + 'px';
					this.indicatorStyle.top = y + 'px';
				}
			},

			_pos: function _pos(x, y) {
				if (x < 0) {
					x = 0;
				} else if (x > this.maxPosX) {
					x = this.maxPosX;
				}

				if (y < 0) {
					y = 0;
				} else if (y > this.maxPosY) {
					y = this.maxPosY;
				}

				x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
				y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

				this.scroller.scrollTo(x, y);
			},

			fade: function fade(val, hold) {
				if (hold && !this.visible) {
					return;
				}

				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;

				var time = val ? 250 : 500,
				    delay = val ? 0 : 300;

				val = val ? '1' : '0';

				this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

				this.fadeTimeout = setTimeout((function (val) {
					this.wrapperStyle.opacity = val;
					this.visible = +val;
				}).bind(this, val), delay);
			}
		};

		IScroll.utils = utils;

		if (typeof module != 'undefined' && module.exports) {
			module.exports = IScroll;
		} else {
			window.IScroll = IScroll;
		}
	})(window, document, Math);

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Slider2 = __webpack_require__(26);

	var _Slider3 = _interopRequireDefault(_Slider2);

	__webpack_require__(30);

	var ImgSlider = (function (_Slider) {
	  _inherits(ImgSlider, _Slider);

	  function ImgSlider() {
	    var _this = this;

	    _classCallCheck(this, ImgSlider);

	    _get(Object.getPrototypeOf(ImgSlider.prototype), 'constructor', this).apply(this, arguments);

	    this.getItemDom = function () {
	      return _this.refs.wrapper;
	    };
	  }

	  _createClass(ImgSlider, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var wrapperRender = _props.wrapperRender;
	      var data = _props.data;
	      var itemAction = _props.itemAction;
	      var itemRender = _props.itemRender;
	      var iScroll = _props.iScroll;

	      var scale = _props.scale;
	      var _state = this.state;
	      var active = _state.active;
	      var itemWidth = _state.itemWidth;
	      var itemHeight = _state.itemHeight;
	      var len = data.length;
	      var style = {
	        width: itemWidth * data.length,
	        height: scale ? itemWidth / scale : itemHeight
	      };

	      return _react2['default'].createElement(
	        'div',
	        { style: { position: 'relative' } },
	        _react2['default'].createElement(
	          'div',
	          { style: { color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001', left: (itemWidth - 18 * len) / 2 } },
	          data.map(function (item, i) {
	            return _react2['default'].createElement('span', { key: i, className: 'cui-slide-nav-item ' + (i === active ? 'cui-slide-nav-item-current' : '') });
	          })
	        ),
	        wrapperRender(_react2['default'].createElement(
	          'div',
	          { className: 'cm-slide cm-slide--full-img', style: style },
	          _react2['default'].createElement(
	            'ul',
	            { className: 'cm-slide-list' },
	            data.map(function (item, i) {
	              return _react2['default'].createElement(
	                'li',
	                { style: { width: itemWidth }, key: i, onClick: itemAction.bind(_this2, item), className: 'cm-slide-item' },
	                itemRender(item)
	              );
	            })
	          )
	        ))
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      iScroll: {
	        eventPassthrough: true, // 非iScroll方向保持原生滚动
	        scrollX: true,
	        scrollY: false,
	        momentum: false, // 快速触摸屏幕
	        snap: true
	      }
	    },
	    enumerable: true
	  }]);

	  return ImgSlider;
	})(_Slider3['default']);

	exports['default'] = ImgSlider;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;