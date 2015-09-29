'use strict';

import 'source-map-support/register';
import colors from 'colors/safe';
import Parser from './parser';
import maps from './maps/color';
import ansi from 'ansi-256-colors';
import selectColor from './utils';

/**
 * This class wraps debug and creates an API
 * @class
 */
class Debug extends Parser {
  /**
   * Constructs an instance of Debug
   * @param  {String} app        The name of the app.
   * @param  {String} namespace  The current namespace.
   * @param  {Array} namespaces The namespaces to support.
   * @param  {Array} levels     The levels to support.
   * @return {Debug}            Returns an instance of debug.
   */
  constructor(app, namespaces) {
    super(process.env.DEBUG);
    this.app = app;
    this.map = new Map();
    this.stacks = {
      namespaces,
      levels: Object.keys(maps.levels)
    };
    console.log(selectColor());
  }
  setNameSpace(namespace) {
    this.namespace = namespace;

    if (!this.map.has(namespace))
      this.map.set(namespace, selectColor().toString());

    this.colors = colors;
    this.colors.setTheme(maps.levels);

    this.build();
    return this;
  }
  console(key) {
    var obj = {};
    this.stacks.namespaces.forEach(namespace => {
      this.stacks.levels.map(level => level.toLowerCase()).forEach(level => {
        var key = this.app + '.' + namespace + ':' + level;
        obj[key] = (() => {
          if (
            this.hasLevel(this.app + '.' + this.namespace) ||
            this.hasLevel('*') ||
            this.hasLevel(this.app + '.' + this.namespace + ':' + level))
            return console.log.bind(console);
          else return () => {};
        })();
      });
    });
    return obj[key];
  }

  build() {
      this.stacks.levels.forEach((level) => {
        this[level] = (...args) => {
          var
            namespace = this.app + '.' + this.namespace.toLowerCase(),
            pos = parseInt(this.map.get(this.namespace)),
            color = ansi.fg.standard[pos];
          args.unshift(color + namespace + ':' + this.colors[level](level));
          this.console(namespace + ':' + level).apply(null, args);
          return this;
        };
      });
    }
    /**
     * Outputs a log statement
     * @return {Debug} The context of Debug.
     */
  log(...args) {
    args.unshift(this.app + '.' + this.namespace.toLowerCase() + ':');
    console.log.apply(console, args);
    return this;
  }
}
/**
 * @module Debug
 */
export default Debug;