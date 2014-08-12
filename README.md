# grunt-onlywhen

> Only CODE_SNIPPET when BUILD_TYPE

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-onlywhen --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-onlywhen');
```

## The "onlywhen" task

### Overview
In your project's Gruntfile, add a section named `onlywhen` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  onlywhen: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.build_type
Type: `String`
Default value: grunt sub-task

The build type that should be used to determine which code snippets are shown

### Usage Examples

#### Custom Options
This is the most basic example of a page being built for two configurations (`develop` and `dist`).

** index.html **
```html
<!-- onlywhen:develop -->
<p class="banner">This only shows up during development</p>
<!-- /onlywhen -->
<p>... just some regular html ...</p>
```

** Gruntfile.js **

```js
grunt.initConfig({
	onlywhen: {
		develop: {
			files: {
				'tmp/index.html': ['index.html']
			}
		},
		dist: {
			files: {
				'tmp/index.html': ['index.html']
			}		
		}
	}
});
```

Running `grunt onlywhen:develop` will render an html page in the `tmp` directory including a banner, but `grunt onlywhen:dist` will strip out then banner.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 first release
