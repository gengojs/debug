'use strict';

import debug from 'debug';
import chalk from 'chalk';
import 'source-map-support/register';
/**
 * Debug is a debug wrapper for gengo.js
 */
class Debug {
  constructor(namespace) {
    this.namespace = namespace;
    var levels = ['debug', 'warn', 'error', 'info', 'verbose', 'silly'];
    this.console = (() => {
      var obj = {};
      var gengo = 'gengo';
      var namespaces = ['core', 'parser', 'router',
        'backend', 'api', 'localize', 'header'
      ];
      namespaces.forEach(function(namespace) {
        levels.forEach(function(level) {
          var key = gengo + '.' + namespace + ':' + level;
          obj[key] = debug(gengo + '.' + namespace + ':' + level);
        }, this);
      }, this);
      return obj;
    })();
    levels.forEach(level => {
      this[level] = (...args) => {
        var namespace = 'gengo' + '.' + this.namespace.toLowerCase() + ':' + level;
        if (level === 'error') args = args.map(a => {
          return chalk.red(a);
        });
        if (level === 'warn') args = args.map(a => {
          return chalk.yellow(a);
        });
        if (level === 'info') args = args.map(a => {
          return chalk.green(a);
        });
        this.console[namespace].apply(null, args);
      };
    });
  }
}

/**
 * Wraps 'debug' and outputs the arguments using namespaces.
 * @param {string} namespace - The namespace of the gengo to debug.
 * @example 
 *  debugify('core.plugins').warn('hello')
 */
export default (namespace) => {
  return new Debug(namespace);
};