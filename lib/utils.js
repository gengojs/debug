'use strict';

import maps from './maps/color';

var previousColor = 1;
var selectColor = function() {
  return maps.colors[previousColor++ % 8];
};

export default selectColor;