'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            express: {
                files:  [ '**/*.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            },
            less: {
                files: ["client/**/*.less"],
                tasks: ["less"],
                options: {
                    livereload: false
                }
            },
            public: {
                files: ['client/**/*.css', 'client/**/*.js', 'client/**/*.html']
            }
        },
        express: {
            options: {
                port: process.env.PORT || 9000
            },
            dev: {
                options: {
                    script:'server/app.js'
                }
            }
        },
        open: {
            dev : {
                path: 'http://localhost:<%= express.options.port %>',
                app: 'Google Chrome'
            }
        },
        wiredep: {
            task: {
                src: ['client/index.html']
            }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-wiredep');

    // Default task(s).
    grunt.registerTask('serve', ['wiredep', 'express:dev', 'open:dev', 'watch']);

};