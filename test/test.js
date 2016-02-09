var assert = require('assert');
var mHist = require('../index.js');

describe('Result', function() {
  it('should return truthy value', function() {
	assert.ok(mHist());
  });
  it('should dont throw an error', function() {
	assert.doesNotThrow(mHist);
  });
});

