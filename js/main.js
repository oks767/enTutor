/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/component.js":
/*!****************************************!*\
  !*** ./src/js/components/component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

 //export default class Component extends Emitter {

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    //super();
    if (arguments.length === 2) {
      this.root = arguments.length <= 0 ? undefined : arguments[0];
      this.options = Object.assign({}, this._defaultOptions, arguments.length <= 1 ? undefined : arguments[1]);
    } else if (arguments.length === 1) {
      if (Component.isjQuery(arguments.length <= 0 ? undefined : arguments[0])) {
        this.root = arguments.length <= 0 ? undefined : arguments[0];
      } else {
        this.options = Object.assign({}, this._defaultOptions, arguments.length <= 0 ? undefined : arguments[0]);
      }
    }
  }

  _createClass(Component, [{
    key: "initialize",
    value: function initialize() {
      this._cacheNodes();

      this._bindEvents();

      this._ready();
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {}
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {}
  }, {
    key: "_ready",
    value: function _ready() {}
  }], [{
    key: "isjQuery",
    value: function isjQuery(object) {
      return object instanceof (jquery__WEBPACK_IMPORTED_MODULE_0___default());
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/js/components/lightbox.js":
/*!***************************************!*\
  !*** ./src/js/components/lightbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lightbox)
/* harmony export */ });
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Lightbox = /*#__PURE__*/function (_Component) {
  _inherits(Lightbox, _Component);

  var _super = _createSuper(Lightbox);

  function Lightbox(root, options) {
    var _this;

    _classCallCheck(this, Lightbox);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Lightbox, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        defaults: {
          lang: 'ru',
          transitionEffect: 'slide',
          backFocus: false,
          buttons: ['close'],
          i18n: {
            ru: {
              CLOSE: 'Закрыть',
              NEXT: 'Дальше',
              PREV: 'Назад',
              ERROR: 'Не удается загрузить. <br/> Попробуйте позднее.',
              PLAY_START: 'Начать слайдшоу',
              PLAY_STOP: 'Остановить слайдшоу',
              FULL_SCREEN: 'На весь экран',
              THUMBS: 'Превью',
              DOWNLOAD: 'Скачать',
              SHARE: 'Поделиться',
              ZOOM: 'Увеличить'
            }
          }
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Lightbox.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {
        link: $('.js-link-modal')
      };
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.nodes.link.on('click', function (event) {
        event.preventDefault();
        var $link = $(event.currentTarget);
        $.fancybox.open({
          src: $link.data('src'),
          type: 'inline',
          opts: {
            touch: false,
            autoFocus: false,
            closeExisting: true,
            animationEffect: false,
            beforeLoad: function beforeLoad(event) {
              event.current.$slide.addClass('fancybox-modal');
            }
          }
        });
      });
    }
  }, {
    key: "_ready",
    value: function _ready() {
      $.fancybox.defaults.i18n.ru = this.options.defaults.i18n.ru;
      $.fancybox.defaults.lang = this.options.defaults.lang;
      $.fancybox.defaults.buttons = this.options.defaults.buttons;
      $.fancybox.defaults.transitionEffect = this.options.defaults.transitionEffect;
      $.fancybox.defaults.backFocus = this.options.defaults.backFocus;
    }
  }]);

  return Lightbox;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/components/scrolltotop-btn.js":
/*!**********************************************!*\
  !*** ./src/js/components/scrolltotop-btn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollToTopBtn)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// кнопка наверх


var ScrollToTopBtn = /*#__PURE__*/function (_Component) {
  _inherits(ScrollToTopBtn, _Component);

  var _super = _createSuper(ScrollToTopBtn);

  function ScrollToTopBtn(root, options) {
    var _this;

    _classCallCheck(this, ScrollToTopBtn);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(ScrollToTopBtn, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(ScrollToTopBtn.prototype), "initialize", this).call(this);

      this.setToTopButton();
    }
  }, {
    key: "setToTopButton",
    value: function setToTopButton() {
      var $scrollTopBtn = $('<a rel="nofollow" href="#" id="scroll-top" class="scrolltotop-btn"><i></i></a>').appendTo('body');
      $scrollTopBtn.on('click', function () {
        $('html:not(:animated),body:not(:animated)').animate({
          scrollTop: 0
        }, 300);
        return false;
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $scrollTopBtn.addClass('top-btn-show');
        } else {
          $scrollTopBtn.removeClass('top-btn-show');
        }
      });

      if ($scrollTopBtn.hasClass('top-btn-show')) {
        $scrollTopBtn.removeClass('top-btn-show');
      }
    }
  }]);

  return ScrollToTopBtn;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(root, options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Slider, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        rows: 0,
        counter: false,
        prevArrow: '<button class="slider-prev"><span class="icon-left"></span></button>',
        nextArrow: '<button class="slider-next"><span class="icon-right"></span></button>'
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Slider.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {};
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.root.on('init', this.addCounter);
      this.root.on('beforeChange', this.changeCounter);
      this.root.on('breakpoint', this.addCounter);
    }
  }, {
    key: "_ready",
    value: function _ready() {
      this.root.slick(this.options);
    }
  }, {
    key: "addCounter",
    value: function addCounter(event, slick) {
      if (slick.options.counter === true && slick.slideCount > slick.options.slidesToShow) {
        var $counter = $('<div class="slick-counter slick-cloned"><div class="slick-counter__inner">' + '<span class="slick-counter__current">' + (slick.currentSlide + 1) + '</span>' + '<span role="separator" class="slick-counter__divider"></span>' + '<span class="slick-counter__count">' + (slick.getDotCount() + 1) + '</span></div></div>');
        $counter.appendTo(slick.$slider);
      }
    }
  }, {
    key: "changeCounter",
    value: function changeCounter(event, slick, currentSlide, nextSlide) {
      slick.$slider.find('.slick-counter__current').html(Math.floor(nextSlide / slick.options.slidesToScroll) + 1);
    }
  }]);

  return Slider;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/jquery.autoHeight.js":
/*!*************************************!*\
  !*** ./src/js/jquery.autoHeight.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function () {
  var $;
  $ = jQuery, $.fn.autoHeight = function (t) {
    var e, i, n, r, h;
    return n = this, h = null, r = $.extend({
      selector: "> *"
    }, t), i = function i() {
      var t, e, i, h, o, s, u, l, f, c, a, g, d, p;
      if (u = [], $.isArray(r.selector)) for (p = r.selector, l = 0, a = p.length; a > l; l++) {
        s = p[l], u.push($(s, n));
      } else "string" == typeof r.selector && u.push($(r.selector, n));

      for (f = 0, g = u.length; g > f; f++) {
        if (e = u[f], e.length > 1 && (h = 0, o = parseInt(n.innerWidth(), 10), i = [], e.each(function () {
          var t;
          return t = parseInt($(this).outerWidth(), 10), $(this).height("auto"), o > t && (i.push($(this)), $(this).height() > h) ? h = $(this).height() : void 0;
        }), h > 0)) for (c = 0, d = i.length; d > c; c++) {
          t = i[c], t.height(h);
        }
      }

      return n.trigger("autoHeightComplete", r);
    }, e = function e() {
      return h = h || setTimeout(function () {
        return i(), h = null;
      }, 200);
    }, i(), "function" == typeof window.addResizeListener ? n.resize(e) : $(window).resize(e), this;
  };
}).call(this);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lightbox */ "./src/js/components/lightbox.js");
/* harmony import */ var _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scrolltotop-btn */ "./src/js/components/scrolltotop-btn.js");
/* harmony import */ var _jquery_autoHeight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jquery.autoHeight.js */ "./src/js/jquery.autoHeight.js");
/* harmony import */ var _jquery_autoHeight_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jquery_autoHeight_js__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var Application = /*#__PURE__*/function () {
  function Application() {
    _classCallCheck(this, Application);

    this.initCommon();
    this.initSliders();
    this.initMobileViewPortHeight();
  } // Инициализации


  _createClass(Application, [{
    key: "initCommon",
    value: function initCommon() {
      new _components_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"]();
      new _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__["default"]();
      $('.card-wrap').autoHeight({
        selector: '.card__bottom'
      });
      $('.rew-inner').autoHeight({
        selector: '.rew-item__body'
      });
      $('.sc-price').autoHeight({
        selector: '.price'
      });
      $('.js-open-menu').on('click', function (e) {
        $('body').toggleClass('menu-open');
      }); // отправка формы через ajax

      $('.form').submit(function () {
        $('.js-success').hide();
        $('.js-failed').hide();
        var $this = $(this);
        $.post('mail.php', // адрес обработчика
        $(this).serialize(), // отправляемые данные  		
        function (msg) {
          // получен ответ сервера  
          console.log(msg.result);

          if (msg.result) {
            $this.find('.js-success').show();
          } else {
            $this.find('.js-failed').show();
          }
        });
        return false;
      });
      $('.custom-checkbox__input').change(function () {
        if (this.checked) {
          $(this).parents('.form').find('.btn').removeAttr('disabled');
        } else {
          $(this).parents('.form').find('.btn').attr('disabled', 'disabled');
        }
      }); // // Плавная прокрутка при переходе по якорю

      var $root = $('html, body');
      $('.main-menu a').click(function () {
        $('body').removeClass('menu-open');
        var href = $.attr(this, 'href');
        href = href.substring(1, href.length); //console.log(href);

        $root.animate({
          scrollTop: $(href).offset().top
        }, 1500, function () {
          window.location.hash = href;
        });
        return false;
      });
    } // Инициализация всех слайдеров

  }, {
    key: "initSliders",
    value: function initSliders() {
      // Slider in content
      var $slider = $('.slider');

      if ($slider.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
          counter: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        });
      } // Carousel in content


      var $carousel = $('.carousel');

      if ($carousel.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_0__["default"]($carousel, {
          counter: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="carousel-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="carousel-next"><span class="icon-right"></span></button>',
          adaptiveHeight: true,
          responsive: [{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          }]
        });
      }
    } // 100vh для мобильников

  }, {
    key: "initMobileViewPortHeight",
    value: function initMobileViewPortHeight() {
      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

      /*
      Прмиер как использовать эту фичу в стилях
      .module {
          height: 100vh; //Use vh as a fallback for browsers that do not support Custom Properties
          height: calc(var(--vh, 1vh) * 100);
          margin: 0 auto;
          max-width: 30%;
      }
      */
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      var document_width = window.innerWidth; // We listen to the resize event (а ресайз в мобилках срабатывает и при скроле, когда исчезает строка ввода адреса в браузере)

      window.addEventListener('resize', function () {
        // We execute the same script as before
        if (document_width != window.innerWidth) {
          document_width = window.innerWidth;

          var _vh = window.innerHeight * 0.01;

          document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
        }
      });
    }
  }]);

  return Application;
}(); // запуск приложения


$(function () {
  new Application();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhtml_start"] = self["webpackChunkhtml_start"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0bi5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvanF1ZXJ5LmF1dG9IZWlnaHQuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcblxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFbWl0dGVyIHtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAvL3N1cGVyKCk7XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIGFyZ3NbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnQuaXNqUXVlcnkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNqUXVlcnkob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBqUXVlcnk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVOb2RlcygpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3JlYWR5KCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7fVxuXG4gICAgX2JpbmRFdmVudHMoKSB7fVxuXG4gICAgX3JlYWR5KCkge31cbn0iLCJpbXBvcnQgXCJAZmFuY3lhcHBzL2ZhbmN5Ym94XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbGFuZzogJ3J1JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICAgICAgICAgIGJhY2tGb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAnY2xvc2UnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICAgICAgICAgIHJ1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDTE9TRTogJ9CX0LDQutGA0YvRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5FWFQ6ICfQlNCw0LvRjNGI0LUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUFJFVjogJ9Cd0LDQt9Cw0LQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICfQndC1INGD0LTQsNC10YLRgdGPINC30LDQs9GA0YPQt9C40YLRjC4gPGJyLz4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LTQvdC10LUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RBUlQ6ICfQndCw0YfQsNGC0Ywg0YHQu9Cw0LnQtNGI0L7RgycsXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZX1NUT1A6ICfQntGB0YLQsNC90L7QstC40YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZVTExfU0NSRUVOOiAn0J3QsCDQstC10YHRjCDRjdC60YDQsNC9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRIVU1CUzogJ9Cf0YDQtdCy0YzRjicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET1dOTE9BRDogJ9Ch0LrQsNGH0LDRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNIQVJFOiAn0J/QvtC00LXQu9C40YLRjNGB0Y8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgWk9PTTogJ9Cj0LLQtdC70LjRh9C40YLRjCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgbGluazogJCgnLmpzLWxpbmstbW9kYWwnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmxpbmsub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgICAgICAgICAgICBzcmM6ICRsaW5rLmRhdGEoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgIG9wdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUV4aXN0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25FZmZlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVMb2FkOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50LiRzbGlkZS5hZGRDbGFzcygnZmFuY3lib3gtbW9kYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuaTE4bi5ydSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5pMThuLnJ1O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmxhbmcgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMubGFuZztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5idXR0b25zID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJ1dHRvbnM7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMudHJhbnNpdGlvbkVmZmVjdCA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJhY2tGb2N1cyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5iYWNrRm9jdXM7XG4gICAgfVxufSIsIi8vINC60L3QvtC/0LrQsCDQvdCw0LLQtdGA0YVcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvVG9wQnRuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuc2V0VG9Ub3BCdXR0b24oKTtcbiAgICB9XG5cbiAgICBzZXRUb1RvcEJ1dHRvbigpIHtcblxuICAgICAgICB2YXIgJHNjcm9sbFRvcEJ0biA9ICQoJzxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cIiNcIiBpZD1cInNjcm9sbC10b3BcIiBjbGFzcz1cInNjcm9sbHRvdG9wLWJ0blwiPjxpPjwvaT48L2E+JykuYXBwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICAkc2Nyb2xsVG9wQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnaHRtbDpub3QoOmFuaW1hdGVkKSxib2R5Om5vdCg6YW5pbWF0ZWQpJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMH0sIDMwMCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4uYWRkQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5yZW1vdmVDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCRzY3JvbGxUb3BCdG4uaGFzQ2xhc3MoJ3RvcC1idG4tc2hvdycpKSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogMCxcbiAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZXItbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHt9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2luaXQnLCB0aGlzLmFkZENvdW50ZXIpO1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2JlZm9yZUNoYW5nZScsIHRoaXMuY2hhbmdlQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYnJlYWtwb2ludCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgfVxuXG4gICAgX3JlYWR5KCkge1xuICAgICAgICB0aGlzLnJvb3Quc2xpY2sodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBhZGRDb3VudGVyKGV2ZW50LCBzbGljaykge1xuICAgICAgICBpZiAoc2xpY2sub3B0aW9ucy5jb3VudGVyID09PSB0cnVlICYmIHNsaWNrLnNsaWRlQ291bnQgPiBzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgbGV0ICRjb3VudGVyID0gJCgnPGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXIgc2xpY2stY2xvbmVkXCI+PGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2lubmVyXCI+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY3VycmVudFwiPicgKyAoc2xpY2suY3VycmVudFNsaWRlICsgMSkgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJzbGljay1jb3VudGVyX19kaXZpZGVyXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2NvdW50XCI+JyArIChzbGljay5nZXREb3RDb3VudCgpICsgMSkgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICAkY291bnRlci5hcHBlbmRUbyhzbGljay4kc2xpZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUNvdW50ZXIoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgICBzbGljay4kc2xpZGVyLmZpbmQoJy5zbGljay1jb3VudGVyX19jdXJyZW50JykuaHRtbChNYXRoLmZsb29yKG5leHRTbGlkZSAvIHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICsgMSk7XG4gICAgfVxufSIsIihmdW5jdGlvbigpe3ZhciAkOyQ9alF1ZXJ5LCQuZm4uYXV0b0hlaWdodD1mdW5jdGlvbih0KXt2YXIgZSxpLG4scixoO3JldHVybiBuPXRoaXMsaD1udWxsLHI9JC5leHRlbmQoe3NlbGVjdG9yOlwiPiAqXCJ9LHQpLGk9ZnVuY3Rpb24oKXt2YXIgdCxlLGksaCxvLHMsdSxsLGYsYyxhLGcsZCxwO2lmKHU9W10sJC5pc0FycmF5KHIuc2VsZWN0b3IpKWZvcihwPXIuc2VsZWN0b3IsbD0wLGE9cC5sZW5ndGg7YT5sO2wrKylzPXBbbF0sdS5wdXNoKCQocyxuKSk7ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiByLnNlbGVjdG9yJiZ1LnB1c2goJChyLnNlbGVjdG9yLG4pKTtmb3IoZj0wLGc9dS5sZW5ndGg7Zz5mO2YrKylpZihlPXVbZl0sZS5sZW5ndGg+MSYmKGg9MCxvPXBhcnNlSW50KG4uaW5uZXJXaWR0aCgpLDEwKSxpPVtdLGUuZWFjaChmdW5jdGlvbigpe3ZhciB0O3JldHVybiB0PXBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCgpLDEwKSwkKHRoaXMpLmhlaWdodChcImF1dG9cIiksbz50JiYoaS5wdXNoKCQodGhpcykpLCQodGhpcykuaGVpZ2h0KCk+aCk/aD0kKHRoaXMpLmhlaWdodCgpOnZvaWQgMH0pLGg+MCkpZm9yKGM9MCxkPWkubGVuZ3RoO2Q+YztjKyspdD1pW2NdLHQuaGVpZ2h0KGgpO3JldHVybiBuLnRyaWdnZXIoXCJhdXRvSGVpZ2h0Q29tcGxldGVcIixyKX0sZT1mdW5jdGlvbigpe3JldHVybiBoPWh8fHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gaSgpLGg9bnVsbH0sMjAwKX0saSgpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvdy5hZGRSZXNpemVMaXN0ZW5lcj9uLnJlc2l6ZShlKTokKHdpbmRvdykucmVzaXplKGUpLHRoaXN9fSkuY2FsbCh0aGlzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPS4vanF1ZXJ5LmF1dG9IZWlnaHQuanMubWFwIiwiaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvbGlnaHRib3hcIjtcbmltcG9ydCBTY3JvbGxUb1RvcEJ0biBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0blwiO1xuXG5pbXBvcnQgXCIuL2pxdWVyeS5hdXRvSGVpZ2h0LmpzXCI7XG5cbmNsYXNzIEFwcGxpY2F0aW9uIHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbW1vbigpO1xuICAgICAgICB0aGlzLmluaXRTbGlkZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgICBpbml0Q29tbW9uKCkge1xuXG4gICAgICAgIG5ldyBMaWdodGJveCgpO1xuXG4gICAgICAgIG5ldyBTY3JvbGxUb1RvcEJ0bigpO1xuXG4gICAgICAgICQoJy5jYXJkLXdyYXAnKS5hdXRvSGVpZ2h0KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX2JvdHRvbSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnJldy1pbm5lcicpLmF1dG9IZWlnaHQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcucmV3LWl0ZW1fX2JvZHknXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zYy1wcmljZScpLmF1dG9IZWlnaHQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcucHJpY2UnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gICAgICAgICQoJy5qcy1vcGVuLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyDQvtGC0L/RgNCw0LLQutCwINGE0L7RgNC80Ysg0YfQtdGA0LXQtyBhamF4XG4gICAgICAgICQoJy5mb3JtJykuc3VibWl0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCcuanMtc3VjY2VzcycpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5qcy1mYWlsZWQnKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIHZhciAkdGhpcz0kKHRoaXMpO1xuXG4gICAgICAgICAgICAkLnBvc3QoXG4gICAgICAgICAgICAgICAgJ21haWwucGhwJywgLy8g0LDQtNGA0LXRgSDQvtCx0YDQsNCx0L7RgtGH0LjQutCwXG4gICAgICAgICAgICAgICAgICQodGhpcykuc2VyaWFsaXplKCksIC8vINC+0YLQv9GA0LDQstC70Y/QtdC80YvQtSDQtNCw0L3QvdGL0LUgIFx0XHRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihtc2cpIHsgLy8g0L/QvtC70YPRh9C10L0g0L7RgtCy0LXRgiDRgdC10YDQstC10YDQsCAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZy5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZihtc2cucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuanMtc3VjY2VzcycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5qcy1mYWlsZWQnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKCcuY3VzdG9tLWNoZWNrYm94X19pbnB1dCcpLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm0nKS5maW5kKCcuYnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZm9ybScpLmZpbmQoJy5idG4nKS5hdHRyKCdkaXNhYmxlZCcsJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICAvLyAvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LAg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRj9C60L7RgNGOXG4gICAgICAgIGNvbnN0ICRyb290ID0gJCgnaHRtbCwgYm9keScpO1xuICAgICAgICAkKCcubWFpbi1tZW51IGEnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcblxuICAgICAgICAgICAgdmFyIGhyZWYgPSAkLmF0dHIodGhpcywgJ2hyZWYnKTtcbiAgICAgICAgICAgIGhyZWYgPSBocmVmLnN1YnN0cmluZygxLCBocmVmLmxlbmd0aCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGhyZWYpO1xuICAgICAgICAgICAgJHJvb3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgfSwgMTUwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LLRgdC10YUg0YHQu9Cw0LnQtNC10YDQvtCyXG4gICAgaW5pdFNsaWRlcnMoKSB7XG5cbiAgICAgICAgLy8gU2xpZGVyIGluIGNvbnRlbnRcbiAgICAgICAgbGV0ICRzbGlkZXIgPSAkKCcuc2xpZGVyJyk7XG4gICAgICAgIGlmICgkc2xpZGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkc2xpZGVyLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2Fyb3VzZWwgaW4gY29udGVudFxuICAgICAgICBsZXQgJGNhcm91c2VsID0gJCgnLmNhcm91c2VsJyk7XG4gICAgICAgIGlmICgkY2Fyb3VzZWwubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRjYXJvdXNlbCwge1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvLyAxMDB2aCDQtNC70Y8g0LzQvtCx0LjQu9GM0L3QuNC60L7QslxuICAgIGluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCgpIHtcblxuICAgICAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3RoZS10cmljay10by12aWV3cG9ydC11bml0cy1vbi1tb2JpbGUvXG4gICAgICAgIC8qXG4gICAgICAgINCf0YDQvNC40LXRgCDQutCw0Log0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLRgyDRhNC40YfRgyDQsiDRgdGC0LjQu9GP0YVcbiAgICAgICAgLm1vZHVsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoOyAvL1VzZSB2aCBhcyBhIGZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEN1c3RvbSBQcm9wZXJ0aWVzXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgICAgIGxldCBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyBcbiAgICAgICAgLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnQgKNCwINGA0LXRgdCw0LnQtyDQsiDQvNC+0LHQuNC70LrQsNGFINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0Lgg0L/RgNC4INGB0LrRgNC+0LvQtSwg0LrQvtCz0LTQsCDQuNGB0YfQtdC30LDQtdGCINGB0YLRgNC+0LrQsCDQstCy0L7QtNCwINCw0LTRgNC10YHQsCDQsiDQsdGA0LDRg9C30LXRgNC1KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRfd2lkdGggIT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyBcbiAgICAgICAgICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG5cbi8vINC30LDQv9GD0YHQuiDQv9GA0LjQu9C+0LbQtdC90LjRj1xuJCgoKSA9PiB7XG4gICAgbmV3IEFwcGxpY2F0aW9uKCk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raHRtbF9zdGFydFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtodG1sX3N0YXJ0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJDb21wb25lbnQiLCJsZW5ndGgiLCJyb290Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIl9kZWZhdWx0T3B0aW9ucyIsImlzalF1ZXJ5IiwiX2NhY2hlTm9kZXMiLCJfYmluZEV2ZW50cyIsIl9yZWFkeSIsIm9iamVjdCIsIkxpZ2h0Ym94IiwiaW5pdGlhbGl6ZSIsImRlZmF1bHRzIiwibGFuZyIsInRyYW5zaXRpb25FZmZlY3QiLCJiYWNrRm9jdXMiLCJidXR0b25zIiwiaTE4biIsInJ1IiwiQ0xPU0UiLCJORVhUIiwiUFJFViIsIkVSUk9SIiwiUExBWV9TVEFSVCIsIlBMQVlfU1RPUCIsIkZVTExfU0NSRUVOIiwiVEhVTUJTIiwiRE9XTkxPQUQiLCJTSEFSRSIsIlpPT00iLCJub2RlcyIsImxpbmsiLCIkIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGxpbmsiLCJjdXJyZW50VGFyZ2V0IiwiZmFuY3lib3giLCJvcGVuIiwic3JjIiwiZGF0YSIsInR5cGUiLCJvcHRzIiwidG91Y2giLCJhdXRvRm9jdXMiLCJjbG9zZUV4aXN0aW5nIiwiYW5pbWF0aW9uRWZmZWN0IiwiYmVmb3JlTG9hZCIsImN1cnJlbnQiLCIkc2xpZGUiLCJhZGRDbGFzcyIsIlNjcm9sbFRvVG9wQnRuIiwic2V0VG9Ub3BCdXR0b24iLCIkc2Nyb2xsVG9wQnRuIiwiYXBwZW5kVG8iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsIlNsaWRlciIsInJvd3MiLCJjb3VudGVyIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYWRkQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJzbGljayIsInNsaWRlQ291bnQiLCJzbGlkZXNUb1Nob3ciLCIkY291bnRlciIsImN1cnJlbnRTbGlkZSIsImdldERvdENvdW50IiwiJHNsaWRlciIsIm5leHRTbGlkZSIsImZpbmQiLCJodG1sIiwiTWF0aCIsImZsb29yIiwic2xpZGVzVG9TY3JvbGwiLCJmbiIsImF1dG9IZWlnaHQiLCJ0IiwiZSIsImkiLCJuIiwiciIsImgiLCJleHRlbmQiLCJzZWxlY3RvciIsIm8iLCJzIiwidSIsImwiLCJmIiwiYyIsImEiLCJnIiwiZCIsInAiLCJpc0FycmF5IiwicHVzaCIsInBhcnNlSW50IiwiaW5uZXJXaWR0aCIsImVhY2giLCJvdXRlcldpZHRoIiwiaGVpZ2h0IiwidHJpZ2dlciIsInNldFRpbWVvdXQiLCJhZGRSZXNpemVMaXN0ZW5lciIsInJlc2l6ZSIsImNhbGwiLCJBcHBsaWNhdGlvbiIsImluaXRDb21tb24iLCJpbml0U2xpZGVycyIsImluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCIsInRvZ2dsZUNsYXNzIiwic3VibWl0IiwiaGlkZSIsIiR0aGlzIiwicG9zdCIsInNlcmlhbGl6ZSIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJzaG93IiwiY2hhbmdlIiwiY2hlY2tlZCIsInBhcmVudHMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIiRyb290IiwiY2xpY2siLCJocmVmIiwic3Vic3RyaW5nIiwib2Zmc2V0IiwidG9wIiwibG9jYXRpb24iLCJoYXNoIiwiaW5maW5pdGUiLCJhZGFwdGl2ZUhlaWdodCIsIiRjYXJvdXNlbCIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2aCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZG9jdW1lbnRfd2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==