/*
 * grunt-onlywhen
 * https://github.com/billymoon/onlywhen
 *
 * Copyright (c) 2014 Billy Moon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('onlywhen', 'Only CODE_SNIPPET when BUILD_TYPE', function () {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			build_type: this.target || "remote"
		});
		// Iterate over all specified file groups.
		this.files.forEach(function (f) {

			var src = grunt.file.read(f.src);
			// Handle options.
			src = src.replace(new RegExp("\\n?[\\t ]*<!--\\s*onlywhen:(.+?)\\s*-->((?:\\s|.)+?)\\s*<!--\\s*\/onlywhen\\s*-->", "mg"), function (discard, types, code) {
				return types === options.build_type ? code : "";
			});

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};
