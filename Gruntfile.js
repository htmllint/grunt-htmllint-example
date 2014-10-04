'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        htmllint: {
            options: {
                force: true,
                'tag-name-lowercase': true,
                'disable-inline-style': false
            },
            src: [
                'src/*.html'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-htmllint');

    grunt.registerTask('default', ['htmllint']);
};
