import _ from 'lodash';

/**
 * This class parses the process.env.Debug
 * @class Parser
 */
class Parser {
  constructor(debug) {
    this.parsed = [];
    this.parse(debug);
  }
  parse(debug) {
    debug = debug.split(',');
    this.parsed = _.isArray(debug) ? debug : [debug];
    return this;
  }
  hasLevel(level) {
    return this.parsed.indexOf(level) > -1;
  }
}

export default Parser;