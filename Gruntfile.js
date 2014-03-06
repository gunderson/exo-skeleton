module.exports = function (grunt) {

	var _ = require("underscore");
	var pkg = require('./package.json');

	// point to your stuff!
	var yeoman = {
		almond: "app/js/bower/almond/almond",
		require_config: "app/js/require_config",

		dist: "dist/",

		app: "app/",
		styles: "app/styles/",
		scripts: "app/js/",
		templates: "app/templates/",
		data: "app/data/",
		images: "app/assets/images/",
		fonts: "app/assets/fonts/",
		videos: "app/assets/videos/",
		sounds: "app/assets/sounds/",
		copy: "app/data/copy_"

	};

	var cfg = {

		yeoman: yeoman,

		// https://github.com/sindresorhus/grunt-concurrent
		concurrent: {
			server: [
				"php:dev",
				"watcher"
			]
		},

		// https://github.com/sindresorhus/grunt-php
		php: {
			options: {
				// change this to '0.0.0.0' to access the server from outside
				hostname: '0.0.0.0',
				port: 8888,
				livereload: 35729,
				base: yeoman.app,
				keepalive: true,
				open: true,
				router: 'router.php'
			},
			dev: {
				options: {
					base: yeoman.app
				}
			},
			dist: {
				options: {
					base: yeoman.dist
				}
			}
		},

		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			css: {
				files: [
					"Gruntfile.js",
					yeoman.styles + "/**/*.less"
				],
				tasks: "less"
			},
			templates: {
				files: [
					"Gruntfile.js",
					yeoman.templates + "/**/*.jade"

				],
				tasks: ["jade:debug", "jade:flat"]
			},
			bower_json:{
				files:[
					"bower.json"
				],
				tasks: ["shell:bower_install"]
			},
			package_json:{
				files:[
					"package.json"
				],
				tasks: ["shell:npm_install"]
			}
		},

		// https://github.com/gruntjs/grunt-contrib-jade
		jade: {
			debug: {
				options: {
					compileDebug: true,
					data: {
						debug: true
					},
					client: true, // compile to jst, not html
					processName: function (filename) {
						// give the JST a key that's relative to templates directory
						return filename.replace(yeoman.templates, '').replace('.jade', '');
					}
					// amd:true
				},
				files: {
					"<%= yeoman.templates %>jade_jst.js": [yeoman.templates + "/*.jade"]
				}
			},
			dist: {
				options: {
					compileDebug: false,
					data: {
						debug: false
					},
					client: true, // compile to jst, not html
					processName: function (filename) {
						// give the JST a key that's relative to templates directory
						return filename.replace(yeoman.templates, '').replace('.jade', '');
					}
				},
				files: {
					"<%= yeoman.templates %>jade_jst.js": [yeoman.templates + "/*.jade"]
				}
			},
			flat: {
				options: {
					pretty: true,
					compileDebug: false,
					data: function(dest, src) {
						// Return an object of data to pass to templates
						var data = {
							env: "dev",
							version: pkg.version
						};
						return _.extend(data, {
							constants:	require("./app/data/constants.json"),
							copy:		require("./app/data/copy_en.json")
						});
					},
					client: false, // compile to html
					processName: function (filename) {
						// give the JST a key that's relative to templates directory
						return filename.replace(yeoman.templates, '').replace('.jade', '');
					}
				},
				files: {
					"<%= yeoman.app %>index.html": [yeoman.templates + "index.jade"]
				}
			},

			flat_dist: {
				options: {
					pretty: false,
					compileDebug: false,
					data: function(dest, src) {
						// Return an object of data to pass to templates
						var data = {
							env: "dist",
							version: pkg.version
						};
						return _.extend(data, {
							constants:	require("./app/data/constants.json"),
							copy:		require("./app/data/copy_en.json")
						});
					},
					client: false, // compile to html
					processName: function (filename) {
						// give the JST a key that's relative to templates directory
						return filename.replace(yeoman.templates, '').replace('.jade', '');
					}
				},
				files: {
					"<%= yeoman.dist %>index.html": [yeoman.templates + "index.jade"]
				}
			}
		},

		// https://github.com/gruntjs/grunt-contrib-less
		less: {
			options: {
				paths: [yeoman.styles]
			},
			src: {
				expand: true,
				cwd: yeoman.styles,
				src: ["master.less"],
				dest: yeoman.styles,
				ext: ".css"
			}
		},

		clean: {
			dist: [yeoman.dist]

		},

		// Put files not handled in other tasks here
		// https://github.com/gruntjs/grunt-contrib-copy
		copy: {
			dist: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: yeoman.app,
						dest: yeoman.dist,
						src: [
							'*.{ico,txt}',
							'.htaccess',
							'router.php',
							yeoman.data.replace(yeoman.app, "") + "**/*",
							yeoman.images.replace(yeoman.app, "") + "**/*",
							yeoman.fonts.replace(yeoman.app, "") + "**/*",
							yeoman.sounds.replace(yeoman.app, "") + "**/*",
							yeoman.videos.replace(yeoman.app, "") + "**/*"
						]
					}
				]
			}
		},

		// This task uses James Burke's excellent r.js AMD builder to take all
		// modules and concatenate them into a single file.
		// https://github.com/jrburke/r.js/blob/master/build/example.build.js
		requirejs: {
			compile: {
				options: {
					preserveLicenseComments: false,
					baseUrl: yeoman.scripts,
					mainConfigFile: yeoman.require_config + ".js",
					out: yeoman.dist + "/source.js",

					// Root application module.
					name: "bower/almond/almond",

					// TODO - make dist / dev options that will minify / not minify
					optimize:"none",
					// optimize:"uglify2",

					// Include the main application.
					insertRequire: ["master"],

					// This will ensure the application runs after being built.
					include: [
						"app",
						"master",
						"router",
						"views/Main",
						"jade",
						"jade_jst",
						"backbone",
						"backbone.layoutmanager",
						"jquery.transit"
					]
				}
			}
		},

		// https://github.com/gruntjs/grunt-contrib-cssmin
		cssmin: {
			options: {
				compress: false
			},
			combine: {
				files: {
					"<%= yeoman.dist + 'css/styles.css' %>": [yeoman.styles + "master.css"]

				}
			}
		},

		// don't worry about running often. results are cached, and the process only re-runs on the changed files
		// https://github.com/gruntjs/grunt-contrib-imagemin
		imagemin: {
			options: {
				pngquant: true
			},
			dynamic: {
				files: [
					{
						expand: true,
						cwd: yeoman.app,
						src: [yeoman.images.replace(yeoman.app, "") + '/**/*.{png,jpg,gif}'],
						dest: yeoman.dist
					}
				]
			}
		},

		//https://github.com/motherjones/grunt-html-smoosher
		//Includes JS and CSS inline in the HTML page 
		smoosher: {
			dist: {
				options: {
					minify: true
				},
				files: {
					'<%= yeoman.dist %>index.html': '<%= yeoman.dist %>index.html',
				},
			},
		},

		// https://npmjs.org/package/grunt-ftpush
		// username / passwords need to be stored in .ftppass
		//		{
		//			"key1": {
		//			    "username": "username1",
		//				"password": "password1"
		//  		}
		//		}
		ftpush: {
			dist: {
				auth: {
					host: 'toolofnadrive.com',
					port: 21,
					authKey: 'key1'
				},
				src: yeoman.dist,
				dest: "subdomains/josh-dev/exo-skeleton/"
				// exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'dist/tmp'],
				// keep: ['/important/images/at/server/*.jpg']
			}
		},

		// https://github.com/jsoverson/grunt-open
		open: {
			dev:{
				path: "http://localhost:<%= php.options.port %>"
			},
			dist: {
				path: 'http://josh-dev.toolofnadrive.com/exo-skeleton'
			}
		},

		// https://github.com/sindresorhus/grunt-shell
		shell: {
			npm_install:{
				options: {
					stdout: true
				},
				command: "npm install"
			},
			bower_install:{
				options: {
					stdout: true
				},
				command: "bower install"
			}
		}
	};

	grunt.initConfig(cfg);

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-ftpush');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-html-smoosher');


	/**
	 *
	 *  TASK DEFINITIONS
	 *
	 */

	// start watching files. also does an initial batch process of target files


	grunt.registerTask("watcher", [
		"shell",
		"jade:debug",
		"jade:flat",
		"less",
		"watch"
	]);

	// start watching files, start a server
	grunt.registerTask("server", [
		"shell",
		"less",
		"jade:debug",
		"jade:flat",
		"open:dev",
		"concurrent:server"
	]);

	// save as above, but points to dist version
	grunt.registerTask("server:dist", [
		"php:dist"
	]);

	// The release task will first run the debug tasks.  Following that, minify
	// the built JavaScript and then minify the built CSS.
	grunt.registerTask('build', [
		'clean:dist',
		'copy:dist',
		"jade:flat_dist",
		"less",
		'requirejs',
		'cssmin',
		"jade:dist",
		// 'smoosher:dist',
		"imagemin"
	]);

	// https://npmjs.org/package/grunt-ftpush
	grunt.registerTask('deploy', [
		"ftpush:dist",
		"open:dist"
	]);

	grunt.registerTask("default", [
		"build",
		"deploy"
	]);

};