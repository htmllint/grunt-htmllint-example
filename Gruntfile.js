'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        htmllint: {
            options: {
                force: true,
                'tag-name-lowercase': false,
                'disable-inline-style': true,
                'indent-width': 2
            },
            src: [
                'src/*.html'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-htmllint');

    grunt.registerTask('default', ['htmllint']);
};
