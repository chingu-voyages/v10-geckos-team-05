module.exports = function( grunt ) {
	'use strict';

	// Load all tasks
	require( 'load-grunt-tasks' )( grunt, { scope: 'devDependencies' } );

	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
			dist: {
				options: {
					sourceMap: false,
					outputStyle:  'expanded'
				},
				files:   [ {
					expand: true,
					cwd:    'src/scss',
					src: [
						'*.scss'
					],
					dest:   'dist',
					ext: '.css'
				} ]
			},
			minify: {
				options: {
					sourceMap: false,
					outputStyle:  'compressed'
				},
				files:   [ {
					expand: true,
					cwd:    'dist',
					src: [
						'*.css'
					],
					dest:   'dist',
					ext: '.min.css'
				} ]
			}
		},

		watch: {
			sass: {
				options: {
					livereload: true
				},
				files: [ 'src/js/app.js', 'src/scss/**/*.scss' ],
				tasks: [ 'build:css', 'build:js' ]
			}
		}

	} );

	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-babel');
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register tasks
	grunt.registerTask( 'default', [
		'build:css'
	] );

	// Build tasks
	grunt.registerTask( 'build', [
		'default'
	] );

	// Build CSS
	grunt.registerTask( 'build:css', [
		'sass'
	] );

};
