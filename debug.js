'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('source-map-support/register');

var _colorsSafe = require('colors/safe');

var _colorsSafe2 = _interopRequireDefault(_colorsSafe);

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _mapsColor = require('./maps/color');

var _mapsColor2 = _interopRequireDefault(_mapsColor);

var _ansi256Colors = require('ansi-256-colors');

var _ansi256Colors2 = _interopRequireDefault(_ansi256Colors);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

/**
 * This class wraps debug and creates an API
 * @class
 */

var Debug = (function (_Parser) {
  _inherits(Debug, _Parser);

  /**
   * Constructs an instance of Debug
   * @param  {String} app        The name of the app.
   * @param  {String} namespace  The current namespace.
   * @param  {Array} namespaces The namespaces to support.
   * @param  {Array} levels     The levels to support.
   * @return {Debug}            Returns an instance of debug.
   */

  function Debug(app, namespaces) {
    _classCallCheck(this, Debug);

    _get(Object.getPrototypeOf(Debug.prototype), 'constructor', this).call(this, process.env.DEBUG);
    this.app = app;
    this.map = new Map();
    this.stacks = {
      namespaces: namespaces,
      levels: Object.keys(_mapsColor2['default'].levels)
    };
    console.log((0, _utils2['default'])());
  }

  /**
   * @module Debug
   */

  _createClass(Debug, [{
    key: 'setNameSpace',
    value: function setNameSpace(namespace) {
      this.namespace = namespace;

      if (!this.map.has(namespace)) this.map.set(namespace, (0, _utils2['default'])().toString());

      this.colors = _colorsSafe2['default'];
      this.colors.setTheme(_mapsColor2['default'].levels);

      this.build();
      return this;
    }
  }, {
    key: 'console',
    value: (function (_console) {
      function console(_x) {
        return _console.apply(this, arguments);
      }

      console.toString = function () {
        return _console.toString();
      };

      return console;
    })(function (key) {
      var _this = this;

      var obj = {};
      this.stacks.namespaces.forEach(function (namespace) {
        _this.stacks.levels.map(function (level) {
          return level.toLowerCase();
        }).forEach(function (level) {
          var key = _this.app + '.' + namespace + ':' + level;
          obj[key] = (function () {
            if (_this.hasLevel(_this.app + '.' + _this.namespace) || _this.hasLevel('*') || _this.hasLevel(_this.app + '.' + _this.namespace + ':' + level)) return console.log.bind(console);else return function () {};
          })();
        });
      });
      return obj[key];
    })
  }, {
    key: 'build',
    value: function build() {
      var _this2 = this;

      this.stacks.levels.forEach(function (level) {
        _this2[level] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var namespace = _this2.app + '.' + _this2.namespace.toLowerCase(),
              pos = parseInt(_this2.map.get(_this2.namespace)),
              color = _ansi256Colors2['default'].fg.standard[pos];
          args.unshift(color + namespace + ':' + _this2.colors[level](level));
          _this2.console(namespace + ':' + level).apply(null, args);
          return _this2;
        };
      });
    }

    /**
     * Outputs a log statement
     * @return {Debug} The context of Debug.
     */
  }, {
    key: 'log',
    value: function log() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.unshift(this.app + '.' + this.namespace.toLowerCase() + ':');
      console.log.apply(console, args);
      return this;
    }
  }]);

  return Debug;
})(_parser2['default']);

exports['default'] = Debug;
module.exports = exports['default'];
//# sourceMappingURL=source maps/debug.js.map
