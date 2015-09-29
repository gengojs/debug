'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * This class parses the process.env.Debug
 * @class Parser
 */

var Parser = (function () {
  function Parser(debug) {
    _classCallCheck(this, Parser);

    this.parsed = [];
    this.parse(debug);
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(debug) {
      debug = debug.split(',');
      this.parsed = _lodash2['default'].isArray(debug) ? debug : [debug];
      return this;
    }
  }, {
    key: 'hasLevel',
    value: function hasLevel(level) {
      return this.parsed.indexOf(level) > -1;
    }
  }]);

  return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];
//# sourceMappingURL=source maps/parser.js.map
