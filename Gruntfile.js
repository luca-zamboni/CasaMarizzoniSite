'use strict';

var finalhandler = require('finalhandler')
var http = require('http')

module.exports = function(grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    var imgspath = "app/img/**/*[^_m].jpg";

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        name: "_m",
                        width: 500,
                        separator: "",
                        suffix: "",
                        quality: 100
                    }]
                },
                files: [{
                    expand: true,
                    src: [imgspath],
                    cwd: './',
                    dest: './'
                }]
            }
        },
        /*uglify: {
            my_target: {
                files: {
                    'app/js/script.min.js': ['dev/js/parallax.slider.js', 'dev/js/script.js']
                }
            }

        },*/
        watch: {
            less: {
                files: "src/**/*.less",
                tasks: ["less"]
            }
            /*,
                        img: {
                            files: imgspath,
                            tasks: ["responsive_images"]
                        }*/
        },
        /*cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: 'app/css/', // Src matches are relative to this path.
                    src: ['*.css'], // Actual pattern(s) to match.
                    dest: 'app/css/', // Destination path prefix.
                }]
            }
        },*/
        less: {
            development: {
                files: {
                    // compilation.css  :  source.less
                    "src/styles.css": "src/styles/*.less"
                }
            },
        }
    });

    grunt.registerTask('default', ['watch']);
    /*grunt.registerTask('images', 'A sample task that logs stuff.', function() {
        grunt.task.run(['responsive_images']);
    });*/
};
