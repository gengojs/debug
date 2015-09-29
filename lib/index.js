'use strict';
import Debug from './debug';
var namespaces = [
    'core', 'parser', 'router',
    'backend', 'api', 'localize', 'header'
  ],
  d = new Debug('gengo', namespaces);

function debug(namespace) {
  return d.setNameSpace(namespace);
}

export default debug;