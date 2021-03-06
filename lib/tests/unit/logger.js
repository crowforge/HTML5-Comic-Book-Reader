/* jshint strict: false */
/* global console: false, QUnit: false */

// Logging setup for phantom integration
// Taken from Twitter Bootstrap

QUnit.begin = function () {
  console.log('Starting test suite');
  console.log('================================================\n');
};

QUnit.moduleDone = function (opts) {
  if (opts.failed === 0) {
    console.log('\u2714 All tests passed in "' + opts.name + '" module');
  } else {
    console.log('\u2716 ' + opts.failed + ' tests failed in "' + opts.name + '" module');
  }
};

QUnit.done = function (opts) {
  console.log('\n================================================');
  console.log('Tests completed in ' + opts.runtime + ' milliseconds');
  console.log(opts.passed + ' tests of ' + opts.total + ' passed, ' + opts.failed + ' failed.');
};
