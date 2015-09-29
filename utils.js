'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapsColor = require('./maps/color');

var _mapsColor2 = _interopRequireDefault(_mapsColor);

var previousColor = 1;
var selectColor = function selectColor() {
  return _mapsColor2['default'].colors[previousColor++ % 8];
};

exports['default'] = selectColor;
module.exports = exports['default'];
//# sourceMappingURL=source maps/utils.js.map
