/*!
 * tourUI v0.1.0
 * (c) 2014-2015 Ctrip Tour
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["tourUI"] = factory(require("react"));
	else
		root["tourUI"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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

	var _fastclick = __webpack_require__(3);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	window.addEventListener('load', function () {
	  _fastclick2['default'].attach(document.body);
	});

	var _Switch2 = __webpack_require__(4);

	var _Switch3 = _interopRequireDefault(_Switch2);

	exports.Switch = _Switch3['default'];

	var _Tab2 = __webpack_require__(7);

	var _Tab3 = _interopRequireDefault(_Tab2);

	exports.Tab = _Tab3['default'];

	var _Num2 = __webpack_require__(8);

	var _Num3 = _interopRequireDefault(_Num2);

	exports.Num = _Num3['default'];

	var _Loading2 = __webpack_require__(9);

	var _Loading3 = _interopRequireDefault(_Loading2);

	exports.Loading = _Loading3['default'];

	var _Toast2 = __webpack_require__(12);

	var _Toast3 = _interopRequireDefault(_Toast2);

	exports.Toast = _Toast3['default'];

	var _Alert2 = __webpack_require__(13);

	var _Alert3 = _interopRequireDefault(_Alert2);

	exports.Alert = _Alert3['default'];

	var _LayerList2 = __webpack_require__(14);

	var _LayerList3 = _interopRequireDefault(_LayerList2);

	exports.LayerList = _LayerList3['default'];

	var _Calendar2 = __webpack_require__(15);

	var _Calendar3 = _interopRequireDefault(_Calendar2);

	exports.Calendar = _Calendar3['default'];

	var _Slider2 = __webpack_require__(17);

	var _Slider3 = _interopRequireDefault(_Slider2);

	exports.Slider = _Slider3['default'];

	var _ImageSlider = __webpack_require__(19);

	var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

	exports.ImgSlider = _ImageSlider2['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	;(function () {
		'use strict';

		/**
	  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	  *
	  * @codingstandard ftlabs-jsv2
	  * @copyright The Financial Times Limited [All Rights Reserved]
	  * @license MIT License (see LICENSE.txt)
	  */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/

		/**
	  * Instantiate fast-clicking listeners on the specified layer.
	  *
	  * @constructor
	  * @param {Element} layer The layer to listen on
	  * @param {Object} [options={}] The options to override the defaults
	  */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
	   * Whether a click is currently being tracked.
	   *
	   * @type boolean
	   */
			this.trackingClick = false;

			/**
	   * Timestamp for when click tracking started.
	   *
	   * @type number
	   */
			this.trackingClickStart = 0;

			/**
	   * The element being tracked for a click.
	   *
	   * @type EventTarget
	   */
			this.targetElement = null;

			/**
	   * X-coordinate of touch start event.
	   *
	   * @type number
	   */
			this.touchStartX = 0;

			/**
	   * Y-coordinate of touch start event.
	   *
	   * @type number
	   */
			this.touchStartY = 0;

			/**
	   * ID of the last touch, retrieved from Touch.identifier.
	   *
	   * @type number
	   */
			this.lastTouchIdentifier = 0;

			/**
	   * Touchmove boundary, beyond which a click will be cancelled.
	   *
	   * @type number
	   */
			this.touchBoundary = options.touchBoundary || 10;

			/**
	   * The FastClick layer.
	   *
	   * @type Element
	   */
			this.layer = layer;

			/**
	   * The minimum time between tap(touchstart and touchend) events
	   *
	   * @type number
	   */
			this.tapDelay = options.tapDelay || 200;

			/**
	   * The maximum time for a tap
	   *
	   * @type number
	   */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function () {
					return method.apply(context, arguments);
				};
			}

			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function (type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function (type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function (event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
	 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	 *
	 * @type boolean
	 */
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
	  * Android requires exceptions.
	  *
	  * @type boolean
	  */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

		/**
	  * iOS requires exceptions.
	  *
	  * @type boolean
	  */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

		/**
	  * iOS 4 requires an exception for select elements.
	  *
	  * @type boolean
	  */
		var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

		/**
	  * iOS 6.0-7.* requires the target element to be manually derived
	  *
	  * @type boolean
	  */
		var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

		/**
	  * BlackBerry requires exceptions.
	  *
	  * @type boolean
	  */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
	  * Determine whether a given element requires a native click.
	  *
	  * @param {EventTarget|Element} target Target DOM element
	  * @returns {boolean} Returns true if the element needs a native click
	  */
		FastClick.prototype.needsClick = function (target) {
			switch (target.nodeName.toLowerCase()) {

				// Don't send a synthetic click to disabled inputs (issue #62)
				case 'button':
				case 'select':
				case 'textarea':
					if (target.disabled) {
						return true;
					}

					break;
				case 'input':

					// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
					if (deviceIsIOS && target.type === 'file' || target.disabled) {
						return true;
					}

					break;
				case 'label':
				case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
				case 'video':
					return true;
			}

			return (/\bneedsclick\b/.test(target.className)
			);
		};

		/**
	  * Determine whether a given element requires a call to focus to simulate click into element.
	  *
	  * @param {EventTarget|Element} target Target DOM element
	  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	  */
		FastClick.prototype.needsFocus = function (target) {
			switch (target.nodeName.toLowerCase()) {
				case 'textarea':
					return true;
				case 'select':
					return !deviceIsAndroid;
				case 'input':
					switch (target.type) {
						case 'button':
						case 'checkbox':
						case 'file':
						case 'image':
						case 'radio':
						case 'submit':
							return false;
					}

					// No point in attempting to focus disabled inputs
					return !target.disabled && !target.readOnly;
				default:
					return (/\bneedsfocus\b/.test(target.className)
					);
			}
		};

		/**
	  * Send a click event to the specified element.
	  *
	  * @param {EventTarget|Element} targetElement
	  * @param {Event} event
	  */
		FastClick.prototype.sendClick = function (targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function (targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};

		/**
	  * @param {EventTarget|Element} targetElement
	  */
		FastClick.prototype.focus = function (targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};

		/**
	  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	  *
	  * @param {EventTarget|Element} targetElement
	  */
		FastClick.prototype.updateScrollParent = function (targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};

		/**
	  * @param {EventTarget} targetElement
	  * @returns {Element|EventTarget}
	  */
		FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};

		/**
	  * On touch start, record the position and scroll offset.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onTouchStart = function (event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if (event.timeStamp - this.lastClickTime < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};

		/**
	  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.touchHasMoved = function (event) {
			var touch = event.changedTouches[0],
			    boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};

		/**
	  * Update the last position.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onTouchMove = function (event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};

		/**
	  * Attempt to find the labelled control for the given label element.
	  *
	  * @param {EventTarget|HTMLLabelElement} labelElement
	  * @returns {Element|null}
	  */
		FastClick.prototype.findControl = function (labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};

		/**
	  * On touch end, determine whether to send a click event at once.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onTouchEnd = function (event) {
			var forElement,
			    trackingClickStart,
			    targetTagName,
			    scrollParent,
			    touch,
			    targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if (event.timeStamp - this.lastClickTime < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};

		/**
	  * On touch cancel, stop tracking the click.
	  *
	  * @returns {void}
	  */
		FastClick.prototype.onTouchCancel = function () {
			this.trackingClick = false;
			this.targetElement = null;
		};

		/**
	  * Determine mouse events which should be permitted.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onMouse = function (event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};

		/**
	  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	  * an actual click which should be permitted.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onClick = function (event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};

		/**
	  * Remove all FastClick's event listeners.
	  *
	  * @returns {void}
	  */
		FastClick.prototype.destroy = function () {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};

		/**
	  * Check whether FastClick is needed.
	  *
	  * @param {Element} layer The layer to listen on
	  */
		FastClick.notNeeded = function (layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

					// Chrome desktop doesn't need FastClick (issue #15)
				} else {
						return true;
					}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};

		/**
	  * Factory method for creating a FastClick object
	  *
	  * @param {Element} layer The layer to listen on
	  * @param {Object} [options={}] The options to override the defaults
	  */
		FastClick.attach = function (layer, options) {
			return new FastClick(layer, options);
		};

		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Switch = _react2['default'].createClass({
	  displayName: 'Switch',

	  propTypes: {
	    onChange: _react2['default'].PropTypes.func,
	    checked: _react2['default'].PropTypes.bool,
	    defaultChecked: _react2['default'].PropTypes.bool
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultChecked: null,
	      checked: null,
	      onChange: function onChange() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var checked = _props.checked;

	    var defaultChecked = _props.defaultChecked;
	    var ret = false;

	    if (checked != null) {
	      ret = checked;
	    } else if (defaultChecked != null) {
	      ret = defaultChecked;
	    }

	    return { checked: ret };
	  },
	  render: function render() {
	    var classes1 = (0, _classnames2['default'])('cui-switch', {
	      'current': this.state.checked
	    }),
	        classes2 = (0, _classnames2['default'])('cui-switch-bg', {
	      'current': this.state.checked
	    });
	    return _react2['default'].createElement(
	      'div',
	      { className: classes1, onClick: this.onChange },
	      _react2['default'].createElement('div', { className: classes2 }),
	      _react2['default'].createElement('div', { className: 'cui-switch-scroll' })
	    );
	  },
	  onChange: function onChange() {
	    var checked = !this.state.checked;
	    this.setState({ checked: checked });
	    this.props.onChange(checked);
	  }
	});

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	'use strict';

	(function () {
		'use strict';

		var hasOwn = ({}).hasOwnProperty;

		function classNames() {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var Tab = _react2['default'].createClass({
	  displayName: 'Tab',

	  propTypes: {
	    onChange: _react2['default'].PropTypes.func,
	    data: _react2['default'].PropTypes.array.isRequired
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      data: [],
	      defaultActive: null,
	      active: null,
	      onChange: function onChange() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var active = _props.active;

	    var defaultActive = _props.defaultActive;
	    var ret = 0;

	    if (active != null) {
	      ret = active;
	    } else if (defaultActive != null) {
	      ret = defaultActive;
	    }

	    return { active: ret };
	  },
	  render: function render() {
	    var _this = this;

	    var data = this.props.data;

	    return _react2['default'].createElement(
	      'ul',
	      { className: 'cui-tab-mod' },
	      data.map(function (v, i) {
	        return _react2['default'].createElement(
	          'li',
	          { key: i, className: i === _this.state.active ? 'cui-tab-current' : '', onClick: _this.onChange.bind(null, v, i) },
	          v.name
	        );
	      }),
	      _react2['default'].createElement('i', { className: 'cui-tab-scrollbar cui-tabnum' + data.length })
	    );
	  },
	  onChange: function onChange(v, i) {
	    this.setState({ active: i });
	    this.props.onChange(v);
	  }
	});

	exports['default'] = Tab;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Num = _react2['default'].createClass({
	  displayName: 'Num',

	  propTypes: {
	    onChange: _react2['default'].PropTypes.func,
	    min: _react2['default'].PropTypes.number,
	    max: _react2['default'].PropTypes.number,
	    step: _react2['default'].PropTypes.number,
	    editable: _react2['default'].PropTypes.bool,
	    defaultValue: _react2['default'].PropTypes.number,
	    value: _react2['default'].PropTypes.number
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      min: -Infinity,
	      max: Infinity,
	      step: 1,
	      editable: true,
	      defaultValue: null,
	      value: null,
	      onChange: function onChange() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var value = _props.value;

	    var defaultValue = _props.defaultValue;
	    var ret = 0;

	    if (value != null) {
	      ret = value;
	    } else if (defaultValue != null) {
	      ret = defaultValue;
	    }

	    return { value: ret };
	  },
	  render: function render() {
	    var classes1 = (0, _classnames2['default'])('cm-adjust-minus', {
	      'disabled': this.props.min === this.state.value
	    }),
	        classes2 = (0, _classnames2['default'])('cm-adjust-plus', {
	      'disabled': this.props.max === this.state.value
	    }),
	        input = undefined;

	    if (this.props.editable) {
	      input = _react2['default'].createElement('input', { type: 'tel', className: 'cm-adjust-view', value: this.state.value, onChange: this.onChange, onBlur: this.onBlur });
	    } else {
	      input = _react2['default'].createElement(
	        'span',
	        { className: 'cm-adjust-view' },
	        this.state.value
	      );
	    }

	    return _react2['default'].createElement(
	      'div',
	      { className: 'cm-num-adjust' },
	      _react2['default'].createElement('span', { className: classes1, onClick: this.down }),
	      input,
	      _react2['default'].createElement('span', { className: classes2, onClick: this.up })
	    );
	  },
	  step: function step(type) {
	    var props = this.props,
	        value = +this.state.value,
	        stepNum = +props.step || 1;

	    value = type === 'down' ? value - stepNum : value + stepNum;

	    this.setValue(value);
	  },
	  down: function down() {
	    this.step('down');
	  },
	  up: function up() {
	    this.step('up');
	  },
	  setValue: function setValue(value) {
	    var props = this.props;
	    if (value !== '' && (value > props.max || value < props.min)) return;
	    this.setState({ value: value });
	    props.onChange(value);
	  },
	  onChange: function onChange(e) {
	    var value = e.target.value.trim();
	    if (value === '') {
	      this.setValue('');
	    } else if (!isNaN(value)) {
	      this.setValue(+value);
	    }
	  },
	  onBlur: function onBlur(e) {
	    if (e.target.value.trim() === '') {
	      var value = this.getInitialState().value;
	      value !== '' && this.setValue(value);
	    }
	  }
	});

	exports['default'] = Num;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Layer = __webpack_require__(10);

	var _Layer2 = _interopRequireDefault(_Layer);

	var Loading = _react2['default'].createClass({
	  displayName: 'Loading',

	  mixins: [_Layer2['default']],
	  propTypes: {
	    content: _react2['default'].PropTypes.string,
	    closeBtn: _react2['default'].PropTypes.bool
	  },
	  render: function render() {
	    var _props = this.props;
	    var content = _props.content;

	    var closeBtn = _props.closeBtn;
	    var hasText = content !== '';
	    var style = undefined;

	    if (!hasText && !closeBtn) {
	      style = {
	        width: 80,
	        height: 70
	      };
	    };

	    return _react2['default'].createElement(
	      'div',
	      { style: { display: this.state.visible ? 'block' : 'none' } },
	      _react2['default'].createElement(
	        'div',
	        { className: 'cui-layer cui-loading' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'cui-grayload-text', style: style },
	          _react2['default'].createElement('div', { className: 'cui-i cui-w-loading' }),
	          _react2['default'].createElement('div', { className: 'cui-i cui-m-logo' }),
	          closeBtn ? _react2['default'].createElement('div', { className: 'cui-grayload-close', onClick: this.onClick }) : '',
	          hasText ? _react2['default'].createElement(
	            'div',
	            { className: 'cui-grayload-bfont' },
	            content
	          ) : ''
	        )
	      ),
	      this.createMask()
	    );
	  },
	  onClick: function onClick() {
	    this.hide();
	  }
	});

	exports['default'] = Loading;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Mask = __webpack_require__(11);

	var _Mask2 = _interopRequireDefault(_Mask);

	var Layer = {
	  propTypes: {
	    needMask: _react2['default'].PropTypes.bool,
	    maskToHide: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      needMask: true,
	      maskToHide: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      visible: this.props.visible
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({ visible: nextProps.visible });
	  },
	  maskToHide: function maskToHide() {
	    var _props = this.props;
	    var needMask = _props.needMask;
	    var maskToHide = _props.maskToHide;

	    needMask && maskToHide && this.setState({ visible: false });
	  },
	  createMask: function createMask() {
	    if (this.props.needMask) {
	      return _react2['default'].createElement(_Mask2['default'], { onClick: this.maskToHide });
	    }
	  },
	  hide: function hide() {
	    this.setState({ visible: false });
	  },
	  show: function show() {
	    this.setState({ visible: true });
	  }
	};

	exports['default'] = Layer;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var Mask = _react2['default'].createClass({
	  displayName: 'Mask',

	  render: function render() {
	    var style = {
	      width: '100%',
	      height: document.documentElement.scrollHeight || document.body.scrollHeight,
	      position: 'absolute',
	      left: 0,
	      top: 0
	    };
	    return _react2['default'].createElement('div', { className: 'cui-mask', style: style, onClick: this.props.onClick });
	  }
	});

	exports['default'] = Mask;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Layer = __webpack_require__(10);

	var _Layer2 = _interopRequireDefault(_Layer);

	var Toast = _react2['default'].createClass({
	  displayName: 'Toast',

	  mixins: [_Layer2['default']],
	  propTypes: {
	    hideTime: _react2['default'].PropTypes.number,
	    content: _react2['default'].PropTypes.string.isRequired
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      hideTime: 2000
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.setTimer();
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: { display: this.state.visible ? 'block' : 'none' } },
	      _react2['default'].createElement(
	        'div',
	        { className: 'cui-layer cui-toast' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'cui-layer-padding' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'cui-layer-content' },
	            this.props.content
	          )
	        )
	      ),
	      this.createMask()
	    );
	  },
	  setTimer: function setTimer() {
	    var _this = this;

	    if (this.state.visible) {
	      this.timer && clearTimeout(this.timer);
	      this.timer = setTimeout(function () {
	        return _this.hide();
	      }, this.props.hideTime);
	    }
	  },
	  onClick: function onClick() {
	    this.timer && clearTimeout(this.timer);
	    this.hide();
	  }
	});

	exports['default'] = Toast;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Layer = __webpack_require__(10);

	var _Layer2 = _interopRequireDefault(_Layer);

	var Alert = _react2['default'].createClass({
	  displayName: 'Alert',

	  mixins: [_Layer2['default']],
	  propTypes: {
	    title: _react2['default'].PropTypes.string,
	    content: _react2['default'].PropTypes.string.isRequired,
	    btns: _react2['default'].PropTypes.array.isRequired
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var btns = _props.btns;
	    var title = _props.title;
	    var content = _props.content;

	    return _react2['default'].createElement(
	      'div',
	      { style: { display: this.state.visible ? 'block' : 'none' } },
	      _react2['default'].createElement(
	        'div',
	        { className: 'cui-pop-box' },
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
	                { key: btn.name, className: 'cui-flexbd', onClick: btn.handler.bind(_this, btn) },
	                btn.name
	              );
	            })
	          )
	        )
	      ),
	      this.createMask()
	    );
	  }
	});

	exports['default'] = Alert;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Layer = __webpack_require__(10);

	var _Layer2 = _interopRequireDefault(_Layer);

	var LayerList = _react2['default'].createClass({
	  displayName: 'LayerList',

	  mixins: [_Layer2['default']],
	  propTypes: {
	    items: _react2['default'].PropTypes.array.isRequired,
	    cancelName: _react2['default'].PropTypes.string.isRequired,
	    itemAction: _react2['default'].PropTypes.func.isRequired,
	    cancelAction: _react2['default'].PropTypes.func.isRequired
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      cancelName: '取消'
	    };
	  },
	  render: function render() {
	    var _this = this;

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
	              { key: item.name, onClick: itemAction.bind(_this, item) },
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
	      this.createMask()
	    );
	  }
	});

	exports['default'] = LayerList;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _mo2js = __webpack_require__(16);

	var Calendar = _react2['default'].createClass({
	  displayName: 'Calendar',

	  propTypes: {
	    weekDays: _react2['default'].PropTypes.array,
	    displayMonthNum: _react2['default'].PropTypes.number,
	    startTime: _react2['default'].PropTypes.object,
	    MonthFormat: _react2['default'].PropTypes.string,
	    selected: _react2['default'].PropTypes.object,
	    specialDates: _react2['default'].PropTypes.array,
	    itemAction: _react2['default'].PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
	      displayMonthNum: 3,
	      startTime: null,
	      MonthFormat: 'YYYY年M月',
	      selected: null,
	      specialDates: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      selected: this.props.selected
	    };
	  },
	  getDay: function getDay(dayComponent, year, month, day) {
	    this.props.specialDates.forEach(function (dates) {
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
	  },
	  render: function render() {
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
	          changedTime = _mo2js.date.add(sTime, 'Month', i),
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
	          _mo2js.date.format(changedTime, MonthFormat)
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
	  },
	  itemAction: function itemAction(actionDate) {
	    this.props.itemAction(actionDate, _mo2js.date.format) !== false && this.setState({ selected: actionDate });
	  }
	});

	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mo.js v0.2.0
	 * http://mhbseal.com/api/mojs.html
	 * (c) 2014-2015 Mu Haibao
	 */
	'use strict';

	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["mo"] = factory();else root["mo"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * webpack打包目前不能暴漏多个模块，并且他的requrie解析是静态的，所以这里暂时把全部模块挂在mo下，然后输出mo
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					"use strict";
					return {
						AbstractStorage: __webpack_require__(1),
						AbstractStore: __webpack_require__(3),
						LocalStore: __webpack_require__(5),
						SessionStore: __webpack_require__(6),
						common: __webpack_require__(2),
						Cookie: __webpack_require__(7),
						date: __webpack_require__(9),
						es5: __webpack_require__(8),
						IdCard: __webpack_require__(11),
						objectPath: __webpack_require__(4),
						ParseUrl: __webpack_require__(12),
						pubSub: __webpack_require__(13),
						rules: __webpack_require__(14),
						util: __webpack_require__(10)
					};
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 1 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * storage的抽象类,主要存储的时候多些例如：tag、timeout、oldValue等字段，来强化storage.
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2015/4/9
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c) {
					"use strict";

					/**
	     * 保存缓存的失效时间
	      *
	     * @param {storage} 缓存代理
	     * @param {string} 保存所有缓存的失效时间map的缓存的key
	     * @param {string} 要保存失效时间的key
	     * @param {number} 失效时间
	     */
					function saveCacheTime(storage, timeMapKey, key, timeout) {
						var timeMapStr = storage.getItem(timeMapKey),
						    timeMap = JSON.parse(timeMapStr) || [],
						    isNewObj = true,
						    i = 0,
						    obj = {
							key: key,
							timeout: timeout
						};

						// 循环keys，如果有key则更新timeMap对应的key
						for (; i < timeMap.length; i++) {
							if (timeMap[i].key === key) {
								timeMap[i] = obj;
								isNewObj = false;
							}
						}

						isNewObj && timeMap.push(obj); // 如果是新的key，则push到timeMap中

						storage.setItem(timeMapKey, JSON.stringify(timeMap));
					}

					/**
	     * 在设置storage时超出容量时，删除离过期时间最近的缓存
	      *
	     * @param {storage} 缓存代理
	     * @param {string} 保存所有缓存的失效时间map的缓存的key
	     * @param {number} 删除的缓存的个数，默认5
	     */
					function removeOldestCache(storage, timeMapKey, num) {
						var i = 0,
						    timeMapStr,
						    timeMap,
						    deletedKey,
						    len;

						if (timeMapStr = storage.getItem(timeMapKey)) {
							// 存在timeMapKey的情况
							timeMap = JSON.parse(timeMapStr);
							if (num == null) num = 5; // 默认删除5个

							// 排序，排序比较耗时
							timeMap.sort(function (a, b) {
								return a.timeout - b.timeout;
							});

							// 删除N个缓存
							deletedKey = timeMap.splice(0, num);
							for (len = deletedKey.length; i < num; i++) {
								storage.removeItem(deletedKey[i].key);
							}

							// 将剩余的key存入缓存中，没有则删除timeMap这个key
							timeMap.length ? storage.setItem(timeMapKey, JSON.stringify(timeMap)) : storage.removeItem(timeMapKey);
						} else {
							// 不存在timeMapKey的情况，则清除整个storage
							storage.clear();
						}
					}

					/**
	     * 构造最终存入对应key的value值
	      *
	     * @param  {string} value
	     * @param  {string} tag
	     * @param  {string} timeout
	     * @param  {string} 设置的是否是回滚数据
	     * @return {object} 包含2个param的对象
	     */
					function buildStorageObj(value, oldValue, tag, timeout) {
						var result = {
							timeout: timeout
						};
						if (value != null) result.value = value;
						if (oldValue != null) result.oldValue = oldValue;
						if (tag != null) result.tag = tag;
						return result;
					}

					var AbstractStorage = c.baseClass(function (options) {
						this.options = c.extend({
							storage: null,
							timeMapKey: 'CACHE_TIME_MAP'
						}, options);
					}, {
						/**
	      * 设置数据
	         *
	      * @param  {string} key
	      * @param  {*} value
	      * @param  {string} 可选,tag标识,如果传递tag,get时会比较tag标识,不一致返回null
	      * @param  {number} 可选,失效时间,默认 now+1天的时间戳
	      * @param  {string} 可选,默认false,是否设置回滚数据
	      * @return {boolean} 成功true,失败false
	      */
						set: function set(key, value, tag, timeout, isOld) {
							// 参数校正
							var now = +new Date(),
							    storage = this.options.storage,
							    otherValue,
							    oldValue;

							if (timeout == null) timeout = now + 24 * 60 * 60 * 1000; // 默认 now+1天
							if (tag == null || this.getTag(key) === tag) otherValue = this.get(key, tag, !isOld);

							if (isOld) {
								// 设置回滚数据
								oldValue = value;
								value = otherValue;
							} else {
								oldValue = otherValue;
							};

							try {
								storage.setItem(key, JSON.stringify(buildStorageObj(value, oldValue, tag, timeout)));
								saveCacheTime(storage, this.options.timeMapKey, key, timeout); // 保存缓存的失效时间
								return true;
							} catch (e) {
								if (e.name === 'QuotaExceededError') {
									// localstorage写满时，选择离过期时间最近的数据删除，但是如果缓存过多，此过程相对来说比较耗时，也可以选择写满时清除全部
									removeOldestCache(storage, this.options.timeMapKey);
									this.set(key, value, tag, timeout, isOld);
								}
								return false;
							}
						},
						/**
	      * 读取数据
	         *
	      * @param  {string} key
	      * @param  {string} tag标识,如果传递tag,get时会比较tag标识,不一致返回null
	      * @param  {boolean} 可选,默认false,是否读取回滚数据
	      * @return {*} 读取保存的数据
	      */
						get: function get(key, tag, isOld) {
							var obj = this.options.storage.getItem(key),
							    value = null;

							if (obj) {
								obj = JSON.parse(obj);
								if (obj.timeout >= +new Date()) {
									if (tag == null || tag && tag === obj.tag) {
										value = isOld ? obj.oldValue : obj.value;
									}
								}
							}

							return value;
						},
						/**
	      * 返回key的tag
	         *
	      * @param  {string} key
	      * @return {string} tag
	      */
						getTag: function getTag(key) {
							var obj = this.options.storage.getItem(key);
							return obj ? JSON.parse(obj).tag : null;
						},
						/**
	      * 设置key的失效时间
	         *
	      * @param  {string} key
	         * @param  {number} timeout
	      * @return {boolean} 成功true,失败false
	      */
						setExpireTime: function setExpireTime(key, timeout) {
							var obj = this.options.storage.getItem(key);
							if (obj) {
								obj = JSON.parse(obj);
								return this.set(key, obj.value, obj.tag, timeout);
							}
							return false;
						},
						/**
	      * 读取key的失效时间
	         *
	      * @param  {string} key
	      * @return {number} timeout
	      */
						getExpireTime: function getExpireTime(key) {
							var obj = this.options.storage.getItem(key);
							return obj ? JSON.parse(obj).timeout : null;
						},
						/**
	      * 清除指定key
	         *
	      * @param {string} key
	      */
						remove: function remove(key) {
							return this.options.storage.removeItem(key);
						},
						/**
	      * 清空所有storage内容
	      */
						clear: function clear() {
							return this.options.storage.clear();
						},
						/**
	      * 垃圾回收,清除掉过期数据和空数据(只处理通过AbstracStorage存储过的)
	      */
						gc: function gc() {
							var timeMapKey = this.options.timeMapKey,
							    storage = this.options.storage,
							    timeMapStr,
							    timeMap,
							    i = 0,
							    len,
							    key,
							    value,
							    TimeMapResult = [];

							if (timeMapStr = storage.getItem(timeMapKey)) {
								timeMap = JSON.parse(timeMapStr);
								len = timeMap.length;
								for (; i < len; i++) {
									value = timeMap[i];
									key = value.key;
									if (key !== 'GUID' && !this.get(key) && !this.get(key, null, true)) {
										this.remove(key);
									} else {
										TimeMapResult.push(value);
									}
								}
								// 将剩余的key存入缓存中，没有则删除timeMap这个key
								TimeMapResult.length ? storage.setItem(timeMapKey, JSON.stringify(TimeMapResult)) : storage.removeItem(timeMapKey);
							}
						}
					});

					return AbstractStorage;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 2 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * 一些底层的方法
	                                      *
	                                      * @author hbmu
	                                      * @date   2015/2/3
	                                      *
	                                      * @name   common
	                                      * @example
	                                      * var foo, obj1, obj2, obj3;
	                                      *
	                                      * function Foo () {
	                                      *   this.a = 1
	                                      * };
	                                      * Foo.prototype.b = 2;
	                                      * foo = new Foo();
	                                      *
	                                      * obj1 = {
	                                      *   a: 1,
	                                      *   b: 2,
	                                      *   toString: 3,
	                                      *   isPrototypeOf: 4,
	                                      *   constructor: 5
	                                      * };
	                                      * obj2 = {
	                                      *   b: 22,
	                                      *   c: {
	                                      *     d: 6
	                                      *   }
	                                      * };
	                                      * obj3 = {
	                                      *   c: {
	                                      *     e: 7,
	                                      *     f: {
	                                      *       g: 8,
	                                      *       h: 9
	                                      *     }
	                                      *   }
	                                      * };
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					"use strict";

					var common = {},
					    class2type = {},
					    Ctor = function Ctor() {},
					    ArrayProto = Array.prototype,
					    StrProto = String.prototype,
					    ObjProto = Object.prototype,
					    nativeTrim = StrProto.trim,
					    nativeKeys = Object.keys,
					    toString = ObjProto.toString,
					    hasOwn = ObjProto.hasOwnProperty,
					    nativeCreate = Object.create,
					    nativeIsArray = ArrayProto.isArray,
					    rWord = /[^,| ]+/g,
					   
					// 在<IE9下，不枚举的bug
					hasEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
					    nonEnumerableProps = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']; // 分隔符正则

					// 判断数据类型基础方法
					function _type(obj) {
						return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] : typeof obj;
					};

					'Boolean Number String Function Date RegExp Object Array'.replace(rWord, function (name) {
						var lowerName = name.toLowerCase();
						class2type['[object ' + name + ']'] = lowerName; // for common.type method
						common['is' + name] = function (obj) {
							return _type(obj) === lowerName;
						};
					});

					/**
	     * 判断是否是非继承属性
	     *
	     * @name has
	     * @grammar c.has(obj, key)
	     * @example
	     * c.has(foo, 'a') => true
	     * c.has(foo, 'b') => false
	     */
					common.has = function (obj, key) {
						return hasOwn.call(obj, key);
					};

					/**
	      * 兼容 IE8- 下有些不枚举的属性，例如'toString',	'toLocaleString', 'valueOf', 'hasOwnProperty',	'isPrototypeOf', 'propertyIsEnumerable', 'constructor'
	      *
	     * @param {object} obj
	     * @param {function} iteratee
	     *   - param {*} value
	     *   - param {*} key
	     *   - param {object} forIn的第一个参数obj
	     * @param {object} iteratee的上下文,可选
	      *
	      * @name    forIn
	      * @grammar c.forIn(obj, iteratee[, context])
	      * @example
	      * c.forIn(obj1, function(v, k) {
	      *   console.log(k + ':' + v)
	      * })
	      * => 依次输出: 'a: 1', 'b: 2', 'toString: 3', 'isPrototypeOf: 4', 'constructor: 5'
	     */
					common.forIn = function (obj, cb, context) {
						for (var key in obj) if (cb.call(context, obj[key], key, obj) === false) return; // normal

						if (hasEnumBug) {
							// nonEnumerableProps
							var index = 0,
							    len = nonEnumerableProps.length;

							for (; index < len; index++) {
								if (common.has(obj, nonEnumerableProps[index]) && cb.call(context, obj[nonEnumerableProps[index]], nonEnumerableProps[index], obj) === false) return;
							}
						}
					};

					/**
	      * 合并对象到第一个obj
	      *
	     * @param   {boolean} 是否深度复制,可选
	     * @param   {object|array} 目标对象
	     * @param.. {object|array} 需要extend的对象,可多个参数
	     * @return  {object|array} extend后的object
	      *
	      * @name    extend
	      * @grammar c.extend([isDeep,] obj1, obj2, obj3...)
	      * @example
	      * c.extend(obj1, obj2) => {a: 1, b: 22, c: {d: 6}, toString: 3, isPrototypeOf: 4, constructor: 5}
	      * // 浅拷贝
	      * c.extend(obj2, obj3) => {b: 22, c: {e: 7, f: {g: 8, h: 9}}}
	      * // 深度拷贝
	      * c.extend(true, obj1, obj2, obj3)
	      * => {a: 1, b: 22, c: {d: 6, e: 7, f: {g: 8, h: 9}}, toString: 3, isPrototypeOf: 4, constructor: 5}
	     */
					common.extend = function () {
						var src,
						    source,
						    deep,
						    srcType,
						    copyType,
						    clone,
						    copyIsArray,
						    index = 1,
						    args = arguments,
						    len = args.length,
						    target = args[0];

						// 校正参数
						deep = typeof target === 'boolean';
						if (deep) {
							index++;
							target = args[1];
						}

						// 如果只有一个参数,直接合并到调用的对象上
						if (index === len) {
							target = this;
							index--;
						}

						for (; index < len; index++) {
							source = arguments[index]; // 需要extend的参数

							if (source != null) {
								this.forIn(source, function (copy, prop) {
									src = target[prop];

									// 防止循环引用
									if (target === copy) {
										return false;
									}

									if (deep && (copyType = copy && _type(copy)) && (copyType === 'object' && this.has(source, prop) || (copyIsArray = copyType === 'array'))) {
										// 深拷贝
										srcType = src && _type(src);
										if (copyIsArray) {
											copyIsArray = false;
											clone = srcType === 'array' ? src : [];
										} else {
											clone = srcType === 'object' ? src : {};
										}
										target[prop] = this.extend(deep, clone, copy);
									} else {
										// 浅拷贝
										if (copy !== undefined) {
											target[prop] = copy;
										}
									}
								}, this);
							}
						}

						return target;
					};

					common.extend({
						/**
	      * 判断对象的类型
	      *
	      * @name    type
	      * @grammar c.type(*)
	      * @example
	      * c.type({a: 1}) => 'object'
	      * c.type('mojs') => 'string'
	      * c.type(2) => 'number'
	      */
						type: function type(obj) {
							if (obj == null) {
								return obj + '';
							}
							return _type(obj);
						},
						/**
	      * 是否是Boolean类型
	      *
	      * @name isBoolean
	      * @grammar c.isBoolean(*)
	      * @example
	      * c.isBoolean({a: 1}) => false
	      */
						/**
	      * 是否是Number类型
	      *
	      * @name isNumber
	      * @grammar c.isNumber(*)
	      */
						/**
	      * 是否是String类型
	      *
	      * @name isString
	      * @grammar c.isString(*)
	      */
						/**
	      * 是否是Function类型
	      *
	      * @name isFunction
	      * @grammar c.isFunction(*)
	      */
						/**
	      * 是否是Date类型
	      *
	      * @name isDate
	      * @grammar c.isDate(*)
	      */
						/**
	      * 是否是RegExp类型
	      *
	      * @name isRegExp
	      * @grammar c.isRegExp(*)
	      */
						/**
	      * 是否是Object类型
	      *
	      * @name isObject
	      * @grammar c.isObject(*)
	      */
						/**
	      * 是否是数组
	      *
	      * @name isArray
	      * @grammar c.isArray(*)
	      */
						isArray: nativeIsArray || function (obj) {
							return _type(obj) === 'array';
						},
						/**
	      * 是否是类数组, 例如nodelist,arguments,具有length并且keys为0.1.2...的obj
	      *
	      * @name    isArraylike
	      * @grammar c.isArraylike(*)
	      * @example
	      * c.isArraylike([1, 2, 3]) => true
	      * c.isArraylike({1: 1, 2: 2, 3: 3, length: 3}) => true
	      * c.isArraylike({1: 1, 2: 2, 3: 3}) => false
	      */
						isArraylike: function isArraylike(obj) {
							var len = obj.length,
							    type = this.type(obj);

							return !!len || type === 'array' || typeof len === 'number' && len > 0 && len - 1 in obj || len === 0;
						},
						/**
	      * 判断是否为NaN
	      *
	      * @name isNaN
	      * @grammar c.isNaN(*)
	      * @example
	      * c.isNaN(NaN) => true
	      * c.isNaN(undefined) => false
	      */
						isNaN: (function (_isNaN) {
							function isNaN(_x) {
								return _isNaN.apply(this, arguments);
							}

							isNaN.toString = function () {
								return _isNaN.toString();
							};

							return isNaN;
						})(function (obj) {
							return obj === undefined ? false : isNaN(obj);
						}),
						/**
	      * 返回obj的长度
	      *
	      * @name size
	      * @grammar c.size(obj)
	      * @example
	      * c.size([1, 2, 3]) => 3
	      * c.size({a: 1, b: 2}) => 2
	      */
						size: function size(obj) {
							if (obj == null) return 0;
							return this.isArraylike(obj) ? obj.length : this.keys(obj).length;
						},
						/**
	      * 去掉字符串前后的空
	      * @name    trim
	      * @grammar c.trim(text)
	      * @example
	      * c.trim(' abc defg ') => 'abc defg'
	      */
						trim: function trim(text) {
							if (nativeTrim) return nativeTrim.call(text);

							text.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
						},
						/**
	      * 获取对象的key集合
	      *
	      * @name keys
	      * @grammar c.keys(obj)
	      * @example
	      * c.keys({a: 1, b: 2}) => ['a', 'b']
	      */
						keys: function keys(obj) {
							var keys;
							if (nativeKeys) return nativeKeys(obj);
							keys = [];

							this.forIn(obj, function (value, key) {
								if (this.has(obj, key)) keys.push(key);
							});

							return keys;
						},
						/**
	      * 当前时间戳
	      *
	      * @name    now
	      * @grammar c.now()
	      */
						now: Date.now || function () {
							return +new Date();
						},
						/**
	      * 同console.log()
	      *
	      * @name log
	      * @grammar c.log(*)
	      */
						log: function log() {
							window.console && Function.apply.call(console.log, console, arguments);
						},
						/**
	      * 同Object.create(prototype)
	      *
	      * @param  {object} prototype
	      * @return {object} 原型为参数prototype的对象
	      *
	      * @name    baseCreate
	      * @grammar c.baseCreate(prototype)
	      * @example
	      * c.baseCreate() => {}
	      * c.baseCreate({ a: Foo }).a => Foo
	      */
						baseCreate: function baseCreate(prototype) {
							if (!this.isObject(prototype)) return {};
							if (nativeCreate) return nativeCreate(prototype);
							Ctor.prototype = prototype;
							var result = new Ctor();
							Ctor.prototype = null;
							return result;
						},
						/**
	        * 创建一个构造函数(继承、原型方法都可选,继承可以通过新构造函数的superCtor访问父级构造函数)
	        *
	      * @param  {function} (子级)构造函数
	      * @param  {object} 原型的方法集，可选
	      * @param  {function} 父级构造函数，可选
	      * @return {function} 新的构造函数
	        *
	        * @name    baseClass
	        * @grammar c.baseClass(subCtor, prototypes, superCtor)
	        * @example
	        * c.baseClass(A, {a: function() {}, b: function(){}}, B) => A继承B,并且prototype上添加方法a和b
	        * c.baseClass(A, {a: function() {}, b: function(){}}) => A的prototype上添加方法a和b
	        * c.baseClass(A, B) => A继承B
	      */
						baseClass: function baseClass(subCtor, prototypes, superCtor) {
							var noProtos = typeof arguments[1] !== 'object',
							    Ctor,
							    isInherit;

							// 参数校正
							if (noProtos) superCtor = prototypes;
							// 是否是调用继承
							isInherit = superCtor != null;

							// 输出的构造函数
							Ctor = function () {
								if (arguments.length) {
									isInherit && superCtor.apply(this, arguments);
									subCtor.apply(this, arguments);
								} else {
									isInherit && superCtor.call(this);
									subCtor.call(this);
								}
							};

							// subCtor继承superCtor的prototypes
							if (isInherit) {
								Ctor.superCtor = superCtor;
								Ctor.prototype = common.baseCreate(superCtor.prototype);
								Ctor.prototype.constructor = Ctor;
							}

							// 自定义的prototypes
							common.forIn(prototypes, function (prototype, name) {
								Ctor.prototype[name] = prototype;
							});

							return Ctor;
						}
					});

					return common;
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 3 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * store的抽象类,针对storage中的key,一般不使用该类,常用他的子类LocalStore(options.storage = window.localStorage)、SessionStore(options.storage = window.sessionStorage)
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2015/4/10
	                                                                    *
	                                                                    * @name   AbstractStore
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c, objectPath, AbstractStorage) {
					"use strict";

					/**
	     * 根据liftTime 计算要增加的毫秒数
	      *
	     * @param   {string} liftTime 单位D,H,M,S. eg. '24H'
	     * @return  {number} 根据liftTime计算要增加的毫秒数
	     */
					function getLifeTime(lifeTime) {
						var timeout,
						    unit = lifeTime.charAt(lifeTime.length - 1),
						    num = parseInt(lifeTime);

						unit = typeof unit === 'number' ? 'D' : unit.toUpperCase(); // 如果没有单位，给个默认值 ‘天’

						switch (unit) {
							case 'H':
								// 小时
								timeout = num * 60 * 60 * 1000;
								break;
							case 'M':
								// 分钟
								timeout = num * 60 * 1000;
								break;
							case 'S':
								// 秒
								timeout = num * 1000;
								break;
							default:
								// 默认为‘天’
								timeout = num * 24 * 60 * 60 * 1000;
						}

						return timeout;
					}

					/**
	     * 构造函数
	     *
	     * @param {object} options
	     *   - storage         {storage} window.localStorage/window.sessionStorage
	     *   - key             {string} key
	     *   - lifetime        {string} 生命周期,默认'1H' 单位D,H,M,S. eg. '24H'
	     *   - rollbackEnabled {boolean} 是否回滚
	     *
	     * @name    AbstractStore
	     * @grammar new AbstractStore(options)
	     * @example
	     * var store = new AbstractStore({
	     *   storage: window.localStorage,
	     *   key: 'USER'
	     * }))
	     */
					var AbstractStore = c.baseClass(function (options) {
						this.options = c.extend({
							storage: null,
							key: null,
							lifeTime: '1H',
							rollbackEnabled: false
						}, options);

						this.init = function () {
							this.proxy = new AbstractStorage({
								storage: this.options.storage
							});
						};

						this.init();
					}, {
						/**
	         * 设置this.key下的value
	         *
	      * @param  {*} value
	      * @param  {string} 可选,tag标识,如果传递tag,get时会比较tag标识,不一致返回null
	      * @param  {string} 可选,默认false,是否设置回滚数据
	      * @return {boolean} 成功true,失败false
	         *
	         * @name    set
	         * @grammar store.set(value[, tag][, isOld])
	      */
						set: function set(value, tag, isOld) {
							if (!this.options.rollbackEnabled && isOld) throw 'param rollbackEnabled is false'; // 如果不允许roolback,则不能设置回滚数据
							var timeout = +new Date() + getLifeTime(this.options.lifeTime);
							return this.proxy.set(this.options.key, value, tag, timeout, isOld);
						},
						/**
	         * 设置this.key下的value中name的value
	         *
	      * @param  {String} name 支持通过路径的方式，如'a.b.c'
	      * @param  {*} value
	      * @param  {string} 可选,tag标识,如果传递tag,get时会比较tag标识,不一致返回null
	      * @param  {string} 可选,默认false,是否设置回滚数据
	      * @return {boolean} 成功true,失败false
	         *
	         * @name    setAttr
	         * @grammar store.setAttr(name, value[, tag][, isOld])
	      */
						setAttr: function setAttr(name, value, tag, isOld) {
							if (!this.options.rollbackEnabled && isOld) throw 'param rollbackEnabled is false'; // 如果不允许roolback,则不能设置回滚数据

							var i, objValue;

							// name是object时,遍历name执行setAttr然后return
							if (typeof name === 'object') {
								for (i in name) {
									if (name.hasOwnProperty(i)) this.setAttr(i, name[i], tag, isOld);
								}
								return;
							}

							objValue = this.get(tag, isOld) || {};
							objectPath.set(objValue, name, value);

							return this.set(objValue, tag, isOld);
						},
						/**
	         * 读取this.key下的value
	         *
	      * @param  {string} 可选,tag标识,如果传递tag,get时会比较tag标识,不一致返回null
	      * @param  {string} 可选,默认false,是否设置回滚数据
	      * @return {*} value
	         *
	         * @name    get
	         * @grammar store.get([tag][, isOld])
	      */
						get: function get(tag, isOld) {
							return this.proxy.get(this.options.key, tag, isOld);
						},
						/**
	         * 读取this.key下的value中name的value
	         *
	      * @param  {String} name 支持通过路径的方式，如'a.b.c'
	      * @param  {string} 可选,tag标识,如果传递tag,get时会比较tag标识,不一致返回null
	      * @param  {string} 可选,默认false,是否设置回滚数据
	      * @return {*} value
	         *
	         * @name    getAttr
	         * @grammar store.getAttr(name[, tag][, isOld])
	      */
						getAttr: function getAttr(name, tag, isOld) {
							return objectPath.get(this.get(tag, isOld), name);
						},
						/**
	         * 获取tag
	         *
	         * @name    getTag
	         * @grammar store.getTag()
	      */
						getTag: function getTag() {
							return this.proxy.getTag(this.options.key);
						},
						/**
	         * 移除存储对象
	         *
	         * @name    remove
	         * @grammar store.remove()
	      */
						remove: function remove() {
							return this.proxy.remove(this.options.key);
						},
						/**
	         * 设置失效时间
	         *
	         * @param  {number} timeout
	         *
	         * @name    setExpireTime
	         * @grammar store.setExpireTime()
	      */
						setExpireTime: function setExpireTime(timeout) {
							return this.proxy.setExpireTime(this.options.key, timeout);
						},
						/**
	         * 返回失效时间
	         *
	         * @name    getExpireTime
	         * @grammar store.getExpireTime()
	      */
						getExpireTime: function getExpireTime() {
							return this.proxy.getExpireTime(this.options.key);
						},
						/**
	         * 回滚至上个版本
	         *
	      * @param  {string} 可选,默认false,回滚后是否清除回滚数据
	      * @return {boolean} 成功true,失败false
	         *
	         * @name    rollback
	         * @grammar store.rollback([isClearOld])
	      */
						rollback: function rollback(isClearOld) {
							var tag = this.getTag();
							if (this.options.rollbackEnabled) {
								if (this.set(this.get(null, true), tag)) {
									// 回滚成功
									isClearOld && this.set(null, tag, true); // 需要清除oldVlue
									return true;
								}
							} else {
								throw 'param rollbackEnabled is false';
							}
						}
					});

					return AbstractStore;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 4 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * 读取或设置object path下的value
	                                      *
	                                      * @author hbmu
	                                      * @date   2014/4/13
	                                      *
	                                      * @name   objectPath
	                                      * @example
	                                      * var obj = { f: { g: 'blog' } };
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					"use strict";

					var objectPath = {
						/**
	        * 设置object path下的value
	        *
	      * @param  {object} obj
	      * @param  {string} path
	      * @param  {*} value
	      * @return {boolean} 成功true,失败false
	        *
	        * @name    set
	        * @grammar objectPath.set(obj, path, value)
	        * @example
	        * objectPath.set(obj, 'a.d', 'mojs') => obj.a.d = 'mojs'
	        * objectPath.set(obj, 'a.b.e', 'modoc') => obj.a.b.e = 'modoc'
	      */
						set: function set(obj, path, value) {
							if (!obj || !path) return false;

							var pathArr = path.split('.'),
							    i = 0,
							    len = pathArr.length;

							while (i < len - 1) {
								// 遍历
								var key = pathArr[i];
								if (obj[key] == null) obj[key] = {};
								if (typeof obj[key] !== 'object') return false; // 如果遍历到的value不是object、undefined、null则放弃操作
								obj = obj[key];
								i++;
							}

							if (value != null) {
								obj[pathArr[i]] = value;
							} else {
								delete obj[pathArr[i]];
							}

							return true;
						},
						/**
	        * 读取object path下的value
	        *
	      * @param  {object} obj
	      * @param  {string} path
	      * @return {*} value
	        *
	        * @name    get
	        * @grammar objectPath.set(obj, path)
	        * @example
	        * objectPath.get(obj, 'f.g') => 'blog'
	        * objectPath.get(obj, 'a.b.e') => 'mojs'
	      */
						get: function get(obj, path) {
							if (!obj || !path) return null;

							var pathArr = path.split('.'),
							    i = 0,
							    len = pathArr.length;

							while (i < len) {
								// 遍历 .
								if ((obj = obj[pathArr[i++]]) == null) return null;
							}

							return obj;
						}
					};

					return objectPath;
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 5 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * AbstractStore的子类
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2015/4/17
	                                                                    *
	                                                                    * @name   LocalStore
	                                                                    * @example
	                                                                    * var store = new AbstractStore({
	                                                                    *   key: 'USER'
	                                                                    * })
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c, AbstractStore) {
					"use strict";

					var LocalStore = c.baseClass(function (options) {
						c.extend(this.options, options, {
							storage: window.localStorage
						});

						this.init();
					}, AbstractStore);

					return LocalStore;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 6 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * AbstractStore的子类
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2015/4/17
	                                                                    *
	                                                                    * @name   SessionStore
	                                                                    * @example
	                                                                    * var store = new AbstractStore({
	                                                                    *   key: 'USER'
	                                                                    * })
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c, AbstractStore) {
					"use strict";

					var SessionStore = c.baseClass(function (options) {
						c.extend(this.options, options, {
							proxy: window.sessionStorage
						});

						this.init();
					}, AbstractStore);

					return SessionStore;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 7 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * 操作cookie的方法
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2014/09/12
	                                                                    *
	                                                                    * @name   Cookie
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c, es5) {
					"use strict";

					function encode(str, isRaw) {
						return isRaw ? str : encodeURIComponent(str);
					};
					function decode(str, isRaw) {
						return isRaw ? str : decodeURIComponent(str);
					};
					function stringifyCookie(obj, isJson) {
						return encode(isJson ? JSON.stringify(obj) : String(obj));
					};
					function parseCookie(str, isJson) {
						return isJson ? JSON.parse(decode(str)) : decode(str);
					};

					/**
	      * 构造函数
	      *
	     * @param {object} options
	     *   - isRaw {boolean} 是否原生字符（不转码）, 默认为false
	     *   - isJson {boolean} 是否str->json, 默认为false
	      *
	      * @name Cookie
	      * @grammar new Cookie(options)
	      * @example
	      * var
	      *   cookie = new Cookie(),
	      *   cookie2 = new Cookie({isRaw: true, isJson: true});
	     */
					function Cookie(options) {
						this.options = c.extend({
							isRaw: false,
							isJson: false
						}, options);
					};

					/**
	     * 设置cookie
	     *
	     * @param {string} name
	     * @param {*} value
	     * @param {obj} options
	     *   - expires {number|string} 失效时长,单位 ‘天’, 默认为Session
	     *   - path    {string} 路径,path只能设置当前path的子path, 默认为当前path
	     *   - domain  {string} 域,domain只能设置当前domain的子domain, 默认为当前domain
	     *   - secure  {boolean} 安全策略,只有https下能设置 ture or false, 默认为false
	     *
	     * @name    set
	     * @grammar cookie.set(name, value[, options])
	     * @example
	     * cookie.set('user', 'mo');
	     * cookie2.set('user2', {a: 'mojs', b: 'modoc'}, {expires: 1});
	     */
					Cookie.prototype.set = function (name, value, options) {
						var options = options || {},
						    expires = new Date();

						if (options.expires) expires.setTime(+expires + +options.expires * 864e+5);

						document.cookie = [encode(name, this.options.isRaw), '=', stringifyCookie(value, this.options.isJson), options.expires ? '; expires=' + expires : '', // use expires attribute, max-age is not supported by IE
						options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
					};

					/**
	      * 读取cookie
	      *
	     * @param  {string} cookie的name
	     * @return {*} cookie的value
	      *
	      * @name    get
	      * @grammar cookie.get(name)
	      * @example
	      * cookie.get('user') => 'mo'
	      * cookie2.get('user2') => {a: 'mojs', b: 'modoc'}
	     */
					Cookie.prototype.get = function (name) {
						var cookieStr = document.cookie,
						    cookies = cookieStr ? cookieStr.split('; ') : [],
						    result = ''; // safari下remove cookie只会把值设为空

						es5.each(cookies, function (cookie) {
							var parts = cookie.split('='),
							    key = decode(parts[0], this.options.isRaw);

							if (name === key) {
								result = parseCookie(parts[1], this.options.isJson);
								return false;
							}
						}, this);

						return result;
					};

					/**
	      * 删除cookie
	      *
	     * @param {string} cookie的name
	      *
	      * @name    remove
	      * @grammar cookie.remove(name)
	      * @example
	      * cookie.remove('user')
	     */
					Cookie.prototype.remove = function (name) {
						this.set(name, '', { expires: -1 });
					};

					return Cookie;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 8 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * es5 shim
	                                                                    * 其中each,map,filter,some,every可以应用到类数组,对象
	                                                                    * indexOf,lastIndexOf,reduce,reduceRight可以应用到类数组
	                                                                    *
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2015/2/3
	                                                                    *
	                                                                    * @name   es5
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c) {
					"use strict";

					var es5 = {},
					   
					// 原型
					ArrayProto = Array.prototype,
					    FuncProto = Function.prototype,
					   
					// 原型方法
					slice = ArrayProto.slice,
					    nativeBind = FuncProto.bind;

					// for reduce, reduceRight
					function createReduce(dir) {
						return function (array, cb, memo, context) {

							var len = array.length,
							    index = dir > 0 ? 0 : len - 1;

							if (arguments.length < 3) {
								// 如果不存在memo,则把array[index]赋值给memo,并且跳过index这次iteratee
								memo = array[index];
								index += dir;
							}

							for (; index >= 0 && index < len; index += dir) {
								memo = cb.call(context, memo, array[index], index, array);
							}

							return memo;
						};
					};

					es5 = {
						/**
	        * 遍历类数组或者对象,如果想终止循环return false即可
	        *
	      * @param {arraylike|object} 类数组或者对象
	      * @param {function} 迭代函数
	      *   - param {*} value
	      *   - param {*} index|key
	      *   - param {array|object} each的第一个参数
	      * @param {object} iteratee的上下文,可选
	        *
	        * @name    each
	        * @grammar es5.each(obj, iteratee[, context])
	      */
						each: function each(obj, cb, context) {
							var index = 0,
							    len = obj.length;

							if (c.isArraylike(obj)) {
								// 类数组
								for (; index < len; index++) if (cb.call(context, obj[index], index, obj) === false) break; //执行并且判断返回是否为false,如果false则终止循环
							} else {
									// 对象
									c.forIn(obj, function (value, key) {
										if (c.has(obj, key) && cb.call(context, value, key, obj) === false) return false;
									});
								}
						},
						/**
	        * 遍历类数组或者对象,返回一个新数组(obj执行iteratee后的返回值的集合)
	        *
	      * @param  {arraylike|object} 类数组或者对象
	      * @param  {function} 迭代函数
	      *   - param {*} value
	      *   - param {*} index/key
	      *   - param {array|object} map的第一个参数
	      * @param  {object} iteratee的上下文,可选
	      * @return {array} 结果
	        *
	        * @name    map
	        * @grammar es5.map(obj, iteratee[, context])
	      */
						map: function map(obj, cb, context) {
							var results = [];

							this.each(obj, function (value, index, obj) {
								results.push(cb.call(context, value, index, obj));
							});

							return results;
						},
						/**
	        * 遍历类数组或者对象,返回一个新数组(obj执行iteratee后返回值为真的value的元素的集合),其他同map
	        *
	        * @name filter
	      */
						filter: function filter(obj, cb, context) {
							var results = [];

							this.each(obj, function (value, index, obj) {
								cb.call(context, value, index, obj) && results.push(value);
							});

							return results;
						},
						/**
	        * 遍历类数组或者对象,obj执行iteratee后返回值如果有一个为真,则返回true,否则返回false,其他同map
	        *
	        * @name some
	      */
						some: function some(obj, cb, context) {
							var result = false;

							this.each(obj, function (value, index, obj) {
								if (cb.call(context, value, index, obj) === true) {
									result = true;
									return false;
								}
							});

							return result;
						},
						/**
	        * 遍历类数组或者对象,obj执行iteratee后返回值如果全为真,则返回true,否则返回false,其他同map
	        *
	        * @name every
	      */
						every: function every(obj, cb, context) {
							var result = true;

							this.each(obj, function (value, index, obj) {
								if (cb.call(context, value, index, obj) !== true) {
									return result = false;
								}
							});

							return result;
						},
						/**
	        * 返回item在arraylike中的索引值(从0开始找),如果item不存在arraylike中就返回-1,原生不支持NaN
	        *
	      * @param  {arraylike} 需要查找的类数组
	      * @param  {*} 需要查找的元素
	      * @param  {number} 开始索引,可选
	      * @return {number} 查找到元素的索引值
	        *
	        * @name    indexOf
	        * @grammar es5.indexOf(array, item[, from])
	      */
						indexOf: function indexOf(array, item, from) {
							var index = 0,
							    len = array.length;

							if (typeof from === 'number') {
								index = from < 0 ? Math.max(0, len + from) : from;
							}

							if (item !== item) {
								// 查找NaN(注：原生indexOf不能查找出NaN)
								for (; index < len; index++) if (c.isNaN(array[index])) return index;
							} else {
								for (; index < len; index++) if (array[index] === item) return index;
							}

							return -1;
						},
						/**
	        * 同indexOf,区别是从arraylike的末尾开始(从右到左)
	        *
	      * @name lastIndexOf
	      */
						lastIndexOf: function lastIndexOf(array, item, from) {
							var index = array ? array.length : 0;

							if (typeof from == 'number') {
								index = from < 0 ? index + from + 1 : Math.min(index, from + 1);
							}

							if (item !== item) {
								while (--index >= 0) if (c.isNaN(array[index])) return index;
							} else {
								while (--index >= 0) if (array[index] === item) return index;
							}

							return -1;
						},
						/**
	        * 函数绑定
	        *
	      * @param   {function} 需要绑定上下文或者是添加参数的函数
	      * @param   {object} func的上下文
	      * @param.. {*} 需要添加的n个参数
	      * @return  {function} 绑定上下文或者是添加参数后函数
	        *
	        * @name    bind
	        * @grammar es5.bind(func, context[, arg1] [, arg2...])
	      */
						bind: function bind(func, context) {
							if (nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
							if (!c.isFunction(func)) throw new TypeError('Bind must be called on a function');
							// bind返回的函数应用分为普通函数和构造函数,如果以构造函数应用,则以构造函数原型创建的对象的实例为上下文,如果apply后,返回对象不是Object,则返回构造函数原型创建的对象
							var args = slice.call(arguments, 2),
							    executeBound = function executeBound(bound, args) {
								var self = c.baseCreate(func.prototype),
								    retult = func.apply(func instanceof bound ? self : context, args);

								return c.isObject(retult) ? retult : self;
							},
							    bound = function bound() {
								return executeBound(bound, args.concat(slice.call(arguments)));
							};

							return bound;
						},
						/**
	        * 接收一个函数作为累加器,类数组中的每个值从左到右开始缩减，最终为一个值
	        *
	        * @param {arraylike} 类数组
	        * @param {function} 迭代函数
	        *   - param {*} previousValue
	        *   - param {*} currentValue
	        *   - param {*} index/key
	        *   - param {array|object} reduce的第一个参数
	        * @param {*} 可选,作为第一次调用iteratee的第一个参数,如果不存在,则把第一次要iteratee的value复制给memo,并且跳过index这次iteratee
	        * @param {object} iteratee的上下文,可选
	        *
	        * @name    reduce
	        * @grammar es5.reduce(arraylike, iteratee[, memo][, context])
	      */
						reduce: createReduce(1),
						/**
	        * 同reduce,区别是从类数组的末尾开始(从右到左)
	        *
	      * @name reduceRight
	      */
						reduceRight: createReduce(-1)
					};

					return es5;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 9 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
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
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (util) {
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
							if (month > 1 && (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
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
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 10 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * 工具方法集
	                                      *
	                                      * @author hbmu
	                                      * @date   2014/10/20
	                                      *
	                                      * @name   utils
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
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
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 11 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * 身份证的校验以及从从身份证号码中获取一些信息，例如出生日期，性别
	                                      *
	                                      * @author hbmu
	                                      * @date   2014/10/21
	                                      *
	                                      * @name   IdCard
	                                      * @more  身份证规则
	                                      * =====================================================================
	                                      * 身份证15位编码规则 -- dddddd yymmdd xx p
	                                      * dddddd : 地区码
	                                      * yymmdd : 出生年月日
	                                      * xx     : 顺序类编码，无法确定
	                                      * p      : 性别，奇数为男，偶数为女
	                                      *
	                                      * 身份证18位编码规则 -- dddddd yyyymmdd xxx y
	                                      * dddddd   : 地区码
	                                      * yyyymmdd : 出生年月日
	                                      * xxx      : 顺序类编码，无法确定，奇数为男，偶数为女
	                                      * y        : 校验码，该位数值可通过前17位计算获得
	                                      *
	                                      * 18位号码加权因子为          : WI = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
	                                      * 校验位集合                  : CODE = [1, 0, 'x', 9, 8, 7, 6, 5, 4, 3, 2]
	                                      * 校验位index计算公式         : index = mod(∑(ai×Wi), 11)
	                                      * =====================================================================
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					"use strict";

					var WI = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1],
					    CODE = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

					/**
	      * 构造函数
	      *
	     * @param {string} 身份证号,这里必须是string格式,因为身份证号超出了js的整数精度范围
	      *
	      * @name    IdCard
	      * @grammar new IdCard(num)
	      * @example
	      * var idCard = new IdCard('610125198711037137');
	     */
					function IdCard(num) {
						this.num = num;
					};

					/**
	      * 验证校验位,针对18位
	      *
	     * @return {boolean}
	      *
	      * @name checkCode
	      * @example
	      * idCard.checkCode() => true
	     */
					IdCard.prototype.checkCode = function () {
						var num = this.num;
						if (num.length === 18) {
							var sum = 0,
							    i = 0;

							for (; i < 17; i++) {
								sum += WI[i] * num[i];
							};

							if (num[17].toUpperCase() !== String(CODE[sum % 11])) return false;
						}
						return true;
					};
					/**
	      * 验证出生日期
	      *
	     * @return {boolean}
	      *
	      * @name checkBirth
	      * @example
	      * idCard.checkBirth() => true
	     */
					IdCard.prototype.checkBirth = function () {
						var birth = this.getBirth(),
						    date = new Date(birth.year, birth.month - 1, birth.day),
						    newYear = date.getFullYear(),
						    newMonth = date.getMonth() + 1,
						    newDay = date.getDate(),
						    now = new Date();
						if (+birth.year !== newYear || +birth.month !== newMonth || +birth.day !== newDay || date > now) return false;
						return true;
					};
					/**
	      * 获取出生日期
	      *
	     * @return {object} 返回对象
	     *   - year  {number}
	     *   - month {number}
	     *   - day   {number}
	      *
	      * @name getBirth
	      * @example
	      * idCard.getBirth() => {year: '1987', month: '11', day: '03'}
	     */
					IdCard.prototype.getBirth = function () {
						var num = this.num;
						if (num.length === 15) num = num.slice(0, 6) + "19" + num.slice(6, 16); // 修正15位的年月日
						return {
							year: num.slice(6, 10),
							month: num.slice(10, 12),
							day: num.slice(12, 14)
						};
					};
					/**
	      * 获取性别
	      *
	     * @return {string}
	      *
	      * @name getSex
	      * @example
	      * idCard.getSex() => '男'
	     */
					IdCard.prototype.getSex = function () {
						var sex,
						    num = this.num;
						if (num.length === 18) {
							sex = num.substr(-2, 1) % 2;
						} else {
							sex = num.substr(-1, 1) % 2;
						}
						return sex ? '男' : '女';
					};

					return IdCard;
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 12 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * 解析url
	                                      * @author hbmu
	                                      * @date   2014/11/7
	                                      *
	                                      * @name   ParseUrl
	                                      * @more   url注解
	                                      * =====================================================================
	                                      *
	                                      * http://username:password&#64;www.example.com:80/path/file.name?query=string#anchor
	                                      * |__|   |______| |______| |_____________||_||___||________||___________||_____|
	                                      *  |        |        |            |       |   |         |         |        |
	                                      * protocol user   password      host  port directory  file      query   anchor
	                                      *       |_______________|                   |_____________|
	                                      *               |                                 |
	                                      *            userInfo                           path
	                                      *      |___________________________________||_________________________________|
	                                      *                        |                                   |
	                                      *                    authority                          relative
	                                      * |___________________________________________________________________________|
	                                      *                                         |
	                                      *                                       source
	                                      *
	                                      * =====================================================================
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					"use strict";

					var names = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
					   
					// 匹配正则来自https://github.com/allmarkedup/purl/blob/master/purl.js中parser.loose
					rUrl = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

					/**
	     * 构造函数
	     *
	     * @param {string} 默认为location.href
	     *
	     * @name    ParseUrl
	     * @grammar new ParseUrl(url)
	     * @example
	     * var parseUrl = new ParseUrl('http://username:password&#64;www.example.com:80/path/file.name?query=string#anchor');
	     */
					function ParseUrl(url) {
						if (!url) url = window.location.href;

						var resources = rUrl.exec(url),
						    result = this.result = { Attr: {}, Param: {} },
						    query,
						    i = 14;

						while (i--) result.Attr[names[i]] = resources[i] || '';

						if (query = result.Attr['query']) {
							query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
								if ($1) result.Param[$1] = $2;
							});
						};
					};

					/**
	      * 读取url中的attr,name为空,则返回所有attr
	      *
	     * @param  {string} name,可选 范围"source", "protocol", "authority", "userInfo", "user",
	      * "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"
	     * @return {string} value
	      *
	      * @name    getAttr
	      * @grammar parseUrl.getAttr([name])
	      * @example
	      * parseUrl.getAttr('port') => '80'
	      * url.getAttr('protocol') => 'http'
	     */
					ParseUrl.prototype.getAttr = function (name) {
						var attrs = this.result.Attr;
						return name ? attrs[name] : attrs;
					};

					/**
	      * 读取url中的param,name为空,则返回所有param
	      *
	     * @param  {string} name
	     * @return {string} value
	      *
	      * @name    getParam
	      * @grammar parseUrl.getParam([name])
	      * @example
	      * parseUrl.getParam() => {query: 'string'}
	      * parseUrl.getParam('query') => 'string'
	     */
					ParseUrl.prototype.getParam = function (name) {
						var params = this.result.Param;
						return name ? params[name] : params;
					};

					return ParseUrl;
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 13 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                                                    * pub/sub 发布订阅
	                                                                    *
	                                                                    * @author hbmu
	                                                                    * @date   2015/4/30
	                                                                    *
	                                                                    * @name   pubSub
	                                                                    * @example
	                                                                    * var
	                                                                    *   data = [{
	                                                                    *     name: '熊大',
	                                                                    *     job: '阻止光头强砍树'
	                                                                    *   }, {
	                                                                    *     name: '熊二',
	                                                                    *     job: '调戏光头强'
	                                                                    *   }, {
	                                                                    *     name: '光头强',
	                                                                    *     job: '伐木'
	                                                                    *   }],
	                                                                    *   handler = handler = function(data) {
	                                                                    *     console.log(data.name + '应该' + data.job);
	                                                                    *   },
	                                                                    *   handler2 = function(data) {
	                                                                    *     console.log(data.name + '喜欢' + data.job);
	                                                                    *   };
	                                                                    */
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (es5, objectPath) {
					"use strict";

					var messages = {},
					    // 消息集合
					id = 0; // 处理句柄的id标识

					/**
	     * 订阅,私有方法
	      *
	     * @param {object} 消息集合(messages或者包含子message的message)
	     * @param {string} 消息
	     * @param {*} 执行订阅的handler时传入的data
	     */
					function _publish(messages, message, data) {
						var handlers = objectPath.get(messages, message);

						if (handlers) {
							es5.each(handlers, function (v, k) {
								// 循环messages, 若果key字符中包含'id_',则认为它是处理句柄handler,否则认为它是子message的obj,则再次调用pulish
								~k.indexOf('id_') ? v.handler.call(v.context, data) : _publish(handlers, k, data);
							}, this);
						}
					};

					var pubSub = {
						/**
	        * 发布
	        *
	      * @param {string} 消息,支持子message. eg. 'a.b.c'
	      * @param {*} 执行订阅的handler时传入的data
	        *
	        * @name    publish
	        * @grammar pubSub.publish(message, data)
	      */
						publish: function publish(message, data) {
							_publish(messages, message, data);
						},
						/**
	        * 订阅(注意,message不要包含'id_', eg. '...id_...')
	        *
	      * @param {string} 消息
	      * @param {function} 处理句柄
	      * @param {object} handler执行的上下文,可选
	        *
	        * @name    subscribe
	        * @grammar pubSub.subscribe(message, handler[, context])
	        * @example
	        * pubSub.subscribe('a', handler);
	        * pubSub.subscribe('a', handler2);
	        * pubSub.publish('a', data[0]);
	        * => '熊大应该阻止光头强砍树'
	        * => '熊大喜欢阻止光头强砍树'
	        * pubSub.subscribe('b', handler);
	        * pubSub.subscribe('b.b', handler2);
	        * pubSub.publish('b', data[1]);
	        * => '熊二应该调戏光头强'
	        * => '熊二喜欢调戏光头强'
	        * pubSub.subscribe('c', handler);
	        * pubSub.publish('c', data[2]);
	        * => '光头强应该伐木'
	      */
						subscribe: function subscribe(message, handler, context) {
							var handlers = objectPath.get(messages, message);

							if (handlers == null) objectPath.set(messages, message, handlers = {});
							handlers['id_' + id++] = {
								handler: handler,
								context: context
							};
						},
						/**
	        * 取消订阅(只能取消此message上的handler,不能作用于子message)
	        *
	      * @param {string} 消息
	      * @param {function} 处理句柄,可选,如果为空则清除message上的所有handler
	        *
	        * @name    unsubscribe
	        * @grammar pubSub.unsubscribe(message, handler)
	        * @example
	        * pubSub.unsubscribe('a', handler2);
	        * pubSub.publish('a', data[0]);
	        * => '熊大应该阻止光头强砍树'
	        * pubSub.unsubscribe('b');
	        * pubSub.publish('b', data[1]);
	        * => '熊二喜欢调戏光头强'
	      */
						unsubscribe: function unsubscribe(message, handler) {
							var handlers = objectPath.get(messages, message),
							    result = {};

							if (handlers) {
								if (handler) {
									// handler存在则循环message,从handlers找出handler并删除.
									es5.each(handlers, function (v, k) {
										if (v.handler === handler) {
											delete handlers[k];
											return false;
										}
									});
								} else {
									// handler不存在则循环message,找出所有子message,最后重新set message.
									es5.each(handlers, function (v, k) {
										if (! ~k.indexOf('id_')) result[k] = v;
									});
									objectPath.set(messages, message, result);
								}
							}
						},
						/**
	        * 清除某个message(包含子message)或者所有message的订阅
	        *
	      * @param {string} 消息,可选,如果message为空,则清除所有message.
	        *
	        * @name    clear
	        * @grammar pubSub.unsubscribe(message)
	        * @example
	        * pubSub.clear('b');
	        * pubSub.publish('b', data[1]);
	        * pubSub.clear();
	        * pubSub.publish('c', data[2]);
	      */
						clear: function clear(message) {
							if (message) {
								objectPath.set(messages, message, null);
							} else {
								messages = {};
							}
						}
					};

					return pubSub;
				}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			},
			/* 14 */
			function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_RESULT__; /**
	                                      * 常用的正则校验规则
	                                      *
	                                      * @author hbmu
	                                      * @date   2014/11/20
	                                      *
	                                      * @name   rules
	                                      * @example
	                                      * // 校验，返回值为true/false
	                                      * rules.isRequired('校验文本') // 必填
	                                      * rules.isChinese(..) // 中文
	                                      * rules.isDoubleByte(..) // 双字节
	                                      * rules.isZipcode(..) // 邮政编码
	                                      * rules.isQq(..) // QQ
	                                      * rules.isPicture(..) // 图片
	                                      * rules.isRar(..) // 压缩文件
	                                      * rules.isMobile(..) // 手机号
	                                      * rules.isMoney(..) // 金额（不能包含分隔符）
	                                      * rules.isEnglish(..) // 英文字母
	                                      * rules.isLowerCase(..) // 英文小写
	                                      * rules.isUpperCase(..) // 英文大写
	                                      * rules.isNumber(..) // 纯数字
	                                      * rules.isInteger(..) // 整数
	                                      * rules.isFloat(..) // 浮点数
	                                      * rules.isRealName(..) // 姓名（中英文）
	                                      * rules.isEmail(..) // 邮箱
	                                      * rules.isUrl(..) // 网址 http://mhbsesal.com
	                                      * rules.isIdCard(..) // 身份证
	                                      * rules.isPhone(..) // 座机（区号-主号-分机号）029-8784326-11316
	                                      * rules.isAreaNum(..) // 座机-区号
	                                      * rules.isHostNum(..) // 座机-主号
	                                      * rules.isExtensionNum(..) // 座机-分机号
	                                      * rules.isIp(..) // IP地址
	                                      */
				!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
					"use strict";

					var rules = {
						isRequired: function isRequired(val) {
							return val !== '';
						},
						isChinese: function isChinese(val) {
							return (/^[\u4e00-\u9fa5]+$/.test(val)
							);
						},
						isDoubleByte: function isDoubleByte(val) {
							return (/[^\x00-\xff]/.test(val)
							);
						},
						isZipcode: function isZipcode(val) {
							return (/^\d{6}$/.test(val)
							);
						},
						isQq: function isQq(val) {
							return (/^[1-9]\d{4,9}$/.test(val)
							);
						},
						isPicture: function isPicture(val) {
							return (/\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val)
							);
						},
						isRar: function isRar(val) {
							return (/\.(rar|zip|7zip|tgz|)$/.test(val)
							);
						},
						isMobile: function isMobile(val) {
							return (/^1[34578]\d{9}$/.test(val)
							);
						},
						isMoney: function isMoney(val) {
							return (/^([1-9]\d*(\.\d{1,2})?|0\.\d{1,2})$/.test(val)
							);
						},
						isEnglish: function isEnglish(val) {
							return (/^[A-Za-z]+$/.test(val)
							);
						},
						isLowerCase: function isLowerCase(val) {
							return (/^[a-z]+$/.test(val)
							);
						},
						isUpperCase: function isUpperCase(val) {
							return (/^[A-Z]+$/.test(val)
							);
						},
						isNumber: function isNumber(val) {
							return (/^\d+$/.test(val)
							);
						},
						isInteger: function isInteger(val) {
							return (/^-?[1-9]\d*$/.test(val)
							);
						},
						isFloat: function isFloat(val) {
							return (/^-?([1-9]\d*|0)\.\d+$/.test(val)
							);
						},
						isRealName: function isRealName(val) {
							return (/^[a-zA-Z\u4e00-\u9fa5]+$/.test(val)
							);
						},
						isEmail: function isEmail(val) {
							return (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val)
							);
						},
						isUrl: function isUrl(val) {
							return (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(val)
							);
						},
						isIdCard: function isIdCard(val) {
							return (/^(\d{15}|\d{17}[0-9a-zA-Z])$/.test(val)
							);
						},
						isPhone: function isPhone(val) {
							return (/^(\d{3,4}-)\d{7,8}(-\d{1,6})?$/.test(val)
							);
						},
						isAreaNum: function isAreaNum(val) {
							return (/^\d{3,4}$/.test(val)
							);
						},
						isHostNum: function isHostNum(val) {
							return (/^\d{7,8}$/.test(val)
							);
						},
						isExtensionNum: function isExtensionNum(val) {
							return (/^\d{1,6}$/.test(val)
							);
						},
						isIp: function isIp(val) {
							return (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(val)
							);
						}
					};

					return rules;
				}).call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

				/***/
			}
			/******/])
		);
	});
	;
	/***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _iscroll = __webpack_require__(18);

	var _iscroll2 = _interopRequireDefault(_iscroll);

	var noop = function noop() {};

	var Slider = (function (_React$Component) {
	  _inherits(Slider, _React$Component);

	  _createClass(Slider, null, [{
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.array.isRequired,
	      wrapperRender: _react2['default'].PropTypes.func.isRequired,
	      itemRender: _react2['default'].PropTypes.func.isRequired,
	      iScroll: _react2['default'].PropTypes.object,
	      defaultActive: _react2['default'].PropTypes.number,
	      active: _react2['default'].PropTypes.number,
	      scale: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      data: [],
	      wrapperRender: noop,
	      itemRender: noop,
	      iScroll: {
	        scrollX: true
	      },
	      active: null,
	      defaultActive: null,
	      scale: null // w/h
	    },
	    enumerable: true
	  }]);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      active: this.props.active || this.props.defaultActive || 0,
	      itemWidth: null,
	      itemHeight: null
	    };
	  }

	  _createClass(Slider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;

	      var _props = this.props;
	      var scale = _props.scale;

	      var iScroll = _props.iScroll;
	      var itemWidth = parseInt(getComputedStyle(this.getItemDom()).width); // 计算单位宽度

	      this.setState({
	        itemWidth: itemWidth,
	        itemHeight: itemWidth / scale
	      }, function () {
	        _this.scroll = new _iscroll2['default'](_this.refs.wrapper, Object.assign({}, iScroll, { startX: -_this.state.active * itemWidth }));
	        _this.scroll.on('scrollEnd', function () {
	          _this.setIndex(_this.scroll.currentPage.pageX);
	        });
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
	      var _this2 = this;

	      var _props2 = this.props;
	      var wrapperRender = _props2.wrapperRender;
	      var data = _props2.data;
	      var itemAction = _props2.itemAction;
	      var itemRender = _props2.itemRender;

	      return _react2['default'].createElement(
	        'div',
	        null,
	        wrapperRender(_react2['default'].createElement(
	          'div',
	          { className: 'cm-slide', style: { width: this.state.itemWidth * data.length } },
	          _react2['default'].createElement(
	            'ul',
	            { ref: 'ul', className: 'cm-slide-list' },
	            data.map(function (item) {
	              return _react2['default'].createElement(
	                'li',
	                { key: item.name, onClick: itemAction.bind(_this2, item), className: 'cm-slide-item' },
	                itemRender(item)
	              );
	            })
	          )
	        ))
	      );
	    }
	  }, {
	    key: 'setIndex',
	    value: function setIndex(index) {
	      if (this.state.active !== index) {
	        this.setState({ active: index });
	      }
	    }
	  }, {
	    key: 'getItemDom',
	    value: function getItemDom() {
	      return this.refs.ul.children[0];
	    }
	  }]);

	  return Slider;
	})(_react2['default'].Component);

	;

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 18 */
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
				if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Slider2 = __webpack_require__(17);

	var _Slider3 = _interopRequireDefault(_Slider2);

	var ImgSlider = (function (_Slider) {
	  _inherits(ImgSlider, _Slider);

	  function ImgSlider() {
	    _classCallCheck(this, ImgSlider);

	    _get(Object.getPrototypeOf(ImgSlider.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ImgSlider, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var _state = this.state;
	      var active = _state.active;
	      var itemWidth = _state.itemWidth;

	      var itemHeight = _state.itemHeight;
	      var _props = this.props;
	      var wrapperRender = _props.wrapperRender;
	      var itemAction = _props.itemAction;
	      var itemRender = _props.itemRender;
	      var data = this.props.data;
	      var len = data.length;

	      return _react2['default'].createElement(
	        'div',
	        { style: { position: 'relative' } },
	        _react2['default'].createElement(
	          'div',
	          { className: 'cui-navContainer', style: { color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001', left: (itemWidth - 18 * len) / 2 } },
	          data.map(function (item, i) {
	            return _react2['default'].createElement('span', { key: i, className: 'cui-slide-nav-item ' + (i === active ? 'cui-slide-nav-item-current' : '') });
	          })
	        ),
	        wrapperRender(_react2['default'].createElement(
	          'div',
	          { className: 'cm-slide cm-slide--full-img', style: { width: itemWidth * len, height: itemHeight } },
	          _react2['default'].createElement(
	            'ul',
	            { className: 'cm-slide-list' },
	            data.map(function (item, i) {
	              return _react2['default'].createElement(
	                'li',
	                { style: { width: itemWidth }, key: i, onClick: itemAction.bind(_this, item), className: 'cm-slide-item' },
	                itemRender(item)
	              );
	            })
	          )
	        ))
	      );
	    }
	  }, {
	    key: 'getItemDom',
	    value: function getItemDom() {
	      return this.refs.wrapper;
	    }
	  }]);

	  return ImgSlider;
	})(_Slider3['default']);

	ImgSlider.defaultProps.iScroll.snap = true;

	exports['default'] = ImgSlider;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;