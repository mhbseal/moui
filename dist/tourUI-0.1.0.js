(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tourUI"] = factory();
	else
		root["tourUI"] = factory();
})(this, function() {
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

	//import Switch from './Switch';
	//export default Switch;
	__webpack_require__(1)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//import React from 'react';
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	//let
	//  Switch, props, state;
	//
	//function noop() {
	//}
	//
	//Switch = React.createClass({
	//  getInitialState() {
	//    props = this.props;
	//    state = this.state;
	//    return {
	//      checked: props.checked || props.defaultChecked || false
	//    };
	//  },
	//  getDefaultProps() {
	//    props = this.props;
	//    state = this.state;
	//    return {
	//      defaultChecked: false,
	//      onChange: noop
	//    };
	//  },
	//  render() {
	//    return (
	//      <i className="icon-switch"></i>
	//    );
	//  },
	//  toggle() {
	//    let checked = !state.checked;
	//    this.setState({ checked: checked });
	//    props.onChange(checked);
	//  }
	//});
	//
	//export default Switch;

/***/ }
/******/ ])
});
;