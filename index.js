'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var namespaces = ['core', 'parser', 'router', 'backend', 'api', 'localize', 'header'],
    d = new _debug2['default']('gengo', namespaces);

function debug(namespace) {
  return d.setNameSpace(namespace);
}

exports['default'] = debug;
module.exports = exports['default'];
//# sourceMappingURL=source maps/index.js.map
