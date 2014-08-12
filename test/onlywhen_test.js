'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.onlywhen = {
	setUp: function (done) {
		// setup here if necessary
		done();
	},
	local_task: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/local-index.html');
		var expected = grunt.file.read('test/expected/local-index.html');
		test.equal(actual, expected, 'when run local task, should populate with local data.');

		test.done();
	},
	remote_task: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/remote-index.html');
		var expected = grunt.file.read('test/expected/remote-index.html');
		test.equal(actual, expected, 'when run remote task, should populate with remote data.');

		test.done();
	},
	dist_task: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/dist-index.html');
		var expected = grunt.file.read('test/expected/dist-index.html');
		test.equal(actual, expected, 'when run dist task, should remove all onlywhen conditional blocks.');

		test.done();
	}
};